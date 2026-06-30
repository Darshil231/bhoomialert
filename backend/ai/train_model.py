import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib
import os

def calculate_heuristic_risk(row):
    """Calculates a realistic risk label for training purposes."""
    score = row['ground_deformation_mm'] * 0.5 + row['slope_deg'] * 0.2 + row['historical_movement_mm'] * 0.3
    
    if score > 35:
        return 'Critical'
    elif score > 20:
        return 'High'
    elif score > 10:
        return 'Moderate'
    else:
        return 'Safe'

def get_recommendation(risk):
    if risk == 'Critical':
        return "Immediate Structural Inspection & Evacuation Warning"
    elif risk == 'High':
        return "Deploy Ground Sensors & Issue Alert"
    elif risk == 'Moderate':
        return "Monitor Monthly with InSAR"
    else:
        return "Standard Annual Review"

def train_and_predict():
    print("Loading data...")
    df = pd.read_csv('data/joshimath_mock.csv')
    
    # Generate labels for training
    df['target_risk'] = df.apply(calculate_heuristic_risk, axis=1)
    
    features = ['ground_deformation_mm', 'building_density', 'hospital_distance_m', 
                'school_distance_m', 'historical_movement_mm', 'elevation_m', 'slope_deg']
    
    X = df[features]
    y = df['target_risk']
    
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X, y)
    
    os.makedirs('models', exist_ok=True)
    joblib.dump(model, 'models/rf_risk_model.joblib')
    print("Model saved to models/rf_risk_model.joblib")
    
    # Generate Predictions for the Dashboard
    df['predicted_risk'] = model.predict(X)
    
    # Calculate confidence based on probability of predicted class
    probas = model.predict_proba(X)
    df['confidence_pct'] = np.max(probas, axis=1) * 100
    df['confidence_pct'] = df['confidence_pct'].round(1)
    
    # Base risk score 0-100 (using probability of Critical/High)
    classes = list(model.classes_)
    crit_idx = classes.index('Critical') if 'Critical' in classes else -1
    high_idx = classes.index('High') if 'High' in classes else -1
    
    risk_scores = np.zeros(len(X))
    if crit_idx != -1: risk_scores += probas[:, crit_idx] * 100
    if high_idx != -1: risk_scores += probas[:, high_idx] * 50
    df['risk_score_0_100'] = np.clip(risk_scores, 0, 100).round(1)
    
    df['recommended_action'] = df['predicted_risk'].apply(get_recommendation)
    
    df.to_csv('data/predictions.csv', index=False)
    print("Predictions saved to data/predictions.csv")

if __name__ == "__main__":
    train_and_predict()
