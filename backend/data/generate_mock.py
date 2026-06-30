import pandas as pd
import numpy as np
import os

def generate_joshimath_data():
    """Generates a realistic mock dataset for Joshimath, focusing on Singhdhar Ward"""
    np.random.seed(42)
    
    # Coordinates for Joshimath area
    num_samples = 150
    latitudes = np.random.uniform(30.540, 30.565, num_samples)
    longitudes = np.random.uniform(79.550, 79.575, num_samples)
    
    wards = ['Singhdhar Ward', 'Sunil Ward', 'Manohar Bagh', 'Gandhinagar', 'Ravigram', 'Parsari']
    # Ensure Singhdhar has the most critical values
    ward_assignments = np.random.choice(wards, num_samples, p=[0.3, 0.2, 0.15, 0.15, 0.1, 0.1])
    
    data = []
    
    for i in range(num_samples):
        ward = ward_assignments[i]
        
        # Ground Deformation (mm/yr)
        if ward == 'Singhdhar Ward':
            deformation = np.random.normal(45, 10)  # High subsidence, mean 45mm
        else:
            deformation = np.random.normal(15, 8)
            
        deformation = max(0, deformation) # No negative
        
        # Building density (buildings / sq km)
        b_density = np.random.randint(500, 3000)
        
        # Hospital / School distances (meters)
        hosp_dist = np.random.randint(50, 2000)
        sch_dist = np.random.randint(100, 1500)
        
        # Historical movement (avg mm/yr over past 5 years)
        hist_mov = deformation * np.random.uniform(0.6, 0.9)
        
        # Elevation (meters) and Slope (degrees)
        elevation = np.random.randint(1800, 2000)
        slope = np.random.randint(15, 45)
        
        data.append({
            'latitude': latitudes[i],
            'longitude': longitudes[i],
            'ward': ward,
            'ground_deformation_mm': round(deformation, 2),
            'building_density': b_density,
            'hospital_distance_m': hosp_dist,
            'school_distance_m': sch_dist,
            'historical_movement_mm': round(hist_mov, 2),
            'elevation_m': elevation,
            'slope_deg': slope
        })
        
    df = pd.DataFrame(data)
    
    # Save to CSV
    os.makedirs('data', exist_ok=True)
    df.to_csv('data/joshimath_mock.csv', index=False)
    print("Mock data generated at data/joshimath_mock.csv")

if __name__ == "__main__":
    generate_joshimath_data()
