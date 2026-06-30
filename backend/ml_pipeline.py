import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

def generate_and_train():
    print("Generating realistic demo data...")
    np.random.seed(42)
    num_samples = 500
    
    # Joshimath coordinates approx: 30.55, 79.56
    lats = np.random.uniform(30.54, 30.57, num_samples)
    lngs = np.random.uniform(79.55, 79.58, num_samples)
    
    # Realistic factors
    elevation = np.random.normal(1800, 150, num_samples)
    slope = np.random.normal(25, 10, num_samples)
    building_density = np.random.normal(1500, 500, num_samples)
    
    # Groundwater decline correlates with building density
    groundwater = building_density * 0.05 + np.random.normal(0, 5, num_samples)
    
    # Ground deformation correlates with slope and groundwater
    deformation_mm = (slope * 0.8) + (groundwater * 0.3) + np.random.normal(5, 5, num_samples)
    
    # Define Wards
    wards = ["Singhdhar Ward", "Manohar Bagh", "Sunil Ward", "Ravigram", "Marwari"]
    ward_assignment = np.random.choice(wards, num_samples)
    
    # Force Singhdhar to be the worst as per demo
    deformation_mm = np.where(ward_assignment == "Singhdhar Ward", deformation_mm + 25, deformation_mm)
    
    # Calculate Risk Score (0-100)
    risk_score = (deformation_mm * 1.2) + (slope * 0.5) + (building_density * 0.01)
    risk_score = np.clip((risk_score / risk_score.max()) * 100, 0, 100)
    
    # Labels for ML
    def assign_label(score):
        if score > 75: return 'Critical'
        elif score > 50: return 'High'
        elif score > 25: return 'Moderate'
        return 'Low'
        
    labels = [assign_label(s) for s in risk_score]
    
    df = pd.DataFrame({
        'id': range(1, num_samples + 1),
        'latitude': lats,
        'longitude': lngs,
        'ward': ward_assignment,
        'elevation_m': elevation,
        'slope_deg': slope,
        'building_density': building_density,
        'groundwater_decline': groundwater,
        'ground_deformation_mm': deformation_mm,
        'risk_score': risk_score,
        'risk_level': labels
    })
    
    # Recommendations
    recs = {
        'Critical': 'Immediate Evacuation & Structural Inspection',
        'High': 'Structural Inspection Required',
        'Moderate': 'Detailed Survey Needed',
        'Low': 'Continue Monitoring'
    }
    df['recommendation'] = df['risk_level'].map(recs)
    
    os.makedirs('data', exist_ok=True)
    os.makedirs('models', exist_ok=True)
    
    # ML Pipeline
    print("Training Machine Learning Risk Assessment Model (Random Forest)...")
    X = df[['elevation_m', 'slope_deg', 'building_density', 'groundwater_decline', 'ground_deformation_mm']]
    y = df['risk_level']
    
    rf = RandomForestClassifier(n_estimators=100, random_state=42)
    rf.fit(X, y)
    
    # Get prediction probabilities for confidence score
    probs = rf.predict_proba(X)
    confidence = np.max(probs, axis=1) * 100
    df['confidence_pct'] = confidence
    
    # Save Model
    joblib.dump(rf, 'models/rf_model.pkl')
    
    # Save Data
    df.to_csv('data/predictions.csv', index=False)
    print("Pipeline Complete. Data saved to data/predictions.csv")

if __name__ == "__main__":
    generate_and_train()
