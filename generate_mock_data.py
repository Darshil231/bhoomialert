import pandas as pd
import numpy as np
import os

def generate_mock_data(num_samples=1000):
    np.random.seed(42)
    
    # Lat: 30.55 to 30.56, Lon: 79.56 to 79.57
    latitudes = np.random.uniform(30.55, 30.57, num_samples)
    longitudes = np.random.uniform(79.55, 79.57, num_samples)
    
    # InSAR data (Ground Subsidence Velocity in mm/year) - High risk areas
    velocities = np.random.uniform(25.0, 75.0, size=num_samples)
    
    wards = np.random.choice(['Ward A', 'Ward B', 'Ward C', 'Ward D', 'Ward E'], num_samples)
    confidences = np.random.uniform(70.0, 99.9, num_samples)
    
    def get_risk(speed):
        if speed > 60: return "Critical"
        if speed > 40: return "High"
        if speed > 20: return "Moderate"
        return "Low"

    def get_rec(risk):
        if risk == "Critical": return "Evacuate immediately and deploy emergency response"
        if risk == "High": return "Deploy structural engineers for immediate inspection"
        if risk == "Moderate": return "Monitor closely, increase sensor density"
        return "Standard periodic monitoring"

    risk_levels = [get_risk(v) for v in velocities]
    recommendations = [get_rec(r) for r in risk_levels]

    df = pd.DataFrame({
        'latitude': latitudes,
        'longitude': longitudes,
        'ground_deformation_mm': velocities,
        'ward': wards,
        'confidence_pct': confidences,
        'risk_level': risk_levels,
        'recommendation': recommendations
    })
    
    os.makedirs('data', exist_ok=True)
    df.to_csv('data/predictions.csv', index=False)
    print("Mock data generated in data/predictions.csv")

if __name__ == "__main__":
    generate_mock_data()
