"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon, Circle } from "react-leaflet";
import { Info } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix Leaflet icon issue
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// Custom Icons for Infrastructure (Animated)
const hospitalIcon = L.divIcon({
  html: `<div class="relative w-5 h-5 flex items-center justify-center">
           <div class="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
           <div style="background-color: white; border: 2px solid red; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: red; font-size: 14px; position: relative; z-index: 10;">H</div>
         </div>`,
  className: '',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const schoolIcon = L.divIcon({
  html: `<div class="relative w-5 h-5 flex items-center justify-center">
           <div class="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
           <div style="background-color: white; border: 2px solid blue; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: blue; font-size: 14px; position: relative; z-index: 10;">S</div>
         </div>`,
  className: '',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const getColor = (risk: string) => {
  if (risk === "Critical") return "url(#riskGradientCritical)"; 
  if (risk === "High") return "url(#riskGradientHigh)"; 
  if (risk === "Moderate") return "#eab308"; 
  return "transparent"; // Green means safe, hiding low risk polygons or making them transparent
};

const getStrokeColor = (risk: string) => {
  if (risk === "Critical") return "#ef4444"; 
  if (risk === "High") return "#f97316"; 
  if (risk === "Moderate") return "#eab308"; 
  return "transparent";
};

// Mock Infrastructure Data
const infrastructure = [
  { name: "District Hospital", lat: 30.551, lng: 79.563, type: "hospital" },
  { name: "Primary School Sunil", lat: 30.558, lng: 79.569, type: "school" },
  { name: "High School Manohar Bagh", lat: 30.548, lng: 79.560, type: "school" },
];

export default function MapComponent({ simulationYear = 2024, wards = [], stats = null, activeLayer = 'Risk Polygon' }: { simulationYear?: number, wards?: any[], stats?: any, activeLayer?: string }) {
  const [mapWards, setMapWards] = useState(wards);
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  useEffect(() => {
    if (!wards || wards.length === 0) return;
    const diff = simulationYear - 2024;
    
    const simulatedWards = wards.map(ward => {
      const newSpeed = ward.ground_deformation_mm + (diff * 5);
      let newRisk = ward.risk_level;
      
      if (newSpeed > 60) newRisk = "Critical";
      else if (newSpeed > 40) newRisk = "High";
      else if (newSpeed > 20) newRisk = "Moderate";
      
      return {
        ...ward,
        ground_deformation_mm: newSpeed,
        risk_level: newRisk,
      };
    });
    
    setMapWards(simulatedWards);
  }, [simulationYear, wards]);

  if (!mapWards || mapWards.length === 0) return null;

  return (
    <div className="w-full h-full relative overflow-hidden group">
      
      {/* SVG Definitions for Gradients */}
      <svg style={{ height: 0, width: 0, position: "absolute" }}>
        <defs>
          <linearGradient id="riskGradientCritical" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient id="riskGradientHigh" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Satellite Scan Line */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-blue-500/0 via-blue-400/20 to-blue-500/0 z-[300] pointer-events-none animate-[scan_6s_ease-in-out_infinite] border-b border-blue-400/30"></div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(800px); }
          100% { transform: translateY(-100%); }
        }
        @keyframes gentle-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .polygon-critical {
          animation: gentle-pulse 2s infinite ease-in-out;
        }
      `}} />

      <MapContainer 
        center={[30.555, 79.565]} 
        zoom={14} 
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          url={activeLayer === 'Satellite Basemap' ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"}
          attribution={activeLayer === 'Satellite Basemap' ? "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community" : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}
        />

        {/* Render Infrastructure */}
        {infrastructure.map((inf, idx) => (
          <Marker 
            key={`inf-${idx}`} 
            position={[inf.lat, inf.lng]} 
            icon={inf.type === 'hospital' ? hospitalIcon : schoolIcon}
          >
            <Popup>
              <div className="text-gray-800 font-bold">{inf.name}</div>
              <div className="text-xs text-gray-600">Critical Infrastructure</div>
            </Popup>
          </Marker>
        ))}

        {/* Render Ward Polygons and Heatmap */}
        {mapWards.map((ward, idx) => (
          <div key={`ward-group-${idx}`}>
            {/* Pseudo-heatmap underneath */}
            {activeLayer === 'Risk Polygon' && ward.risk_level === 'Critical' && (
              <>
                <Circle center={[ward.latitude, ward.longitude]} radius={700} pathOptions={{ fillColor: "#eab308", stroke: false, fillOpacity: 0.15 }} />
                <Circle center={[ward.latitude, ward.longitude]} radius={450} pathOptions={{ fillColor: "#f97316", stroke: false, fillOpacity: 0.25 }} />
                <Circle center={[ward.latitude, ward.longitude]} radius={200} pathOptions={{ fillColor: "#ef4444", stroke: false, fillOpacity: 0.45 }} />
              </>
            )}
            {activeLayer === 'Risk Polygon' && ward.risk_level === 'High' && (
              <>
                <Circle center={[ward.latitude, ward.longitude]} radius={700} pathOptions={{ fillColor: "#22c55e", stroke: false, fillOpacity: 0.1 }} />
                <Circle center={[ward.latitude, ward.longitude]} radius={450} pathOptions={{ fillColor: "#eab308", stroke: false, fillOpacity: 0.2 }} />
                <Circle center={[ward.latitude, ward.longitude]} radius={200} pathOptions={{ fillColor: "#f97316", stroke: false, fillOpacity: 0.35 }} />
              </>
            )}
            
            <Polygon
            key={idx}
            positions={ward.polygon}
            pathOptions={{ 
              fillColor: activeLayer === 'Slope Layer' ? '#8B4513' : getColor(ward.risk_level), 
              color: activeLayer === 'Slope Layer' ? '#D2B48C' : getStrokeColor(ward.risk_level), 
              fillOpacity: activeLayer === 'Infrastructure Layer' ? 0.1 : (activeLayer === 'Slope Layer' ? 0.6 : (ward.risk_level === 'Critical' ? 0.7 : (ward.risk_level === 'Low' ? 0 : 0.5))), 
              weight: activeLayer === 'Infrastructure Layer' ? 1 : (ward.risk_level === 'Critical' ? 2 : (ward.risk_level === 'Low' ? 0 : 1)),
              className: activeLayer === 'Risk Polygon' && ward.risk_level === 'Critical' ? 'polygon-critical' : ''
            }}
          >
            <Popup className="custom-popup min-w-[240px]">
              <div className="text-gray-900 p-1 font-sans">
                <h3 className="font-bold text-lg border-b border-gray-300 pb-1 mb-3">{ward.ward || `Ward ${idx+1}`}</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center bg-gray-100 p-1.5 rounded">
                    <span className="text-gray-600 font-medium">Ground Movement</span> 
                    <span className="font-bold text-red-600">{Math.round(ward.ground_deformation_mm)} mm/year</span>
                  </div>
                  
                  <div className="flex justify-between items-center px-1">
                    <span className="text-gray-600 font-medium">Risk</span> 
                    <span className="font-bold" style={{color: getColor(ward.risk_level)}}>{ward.risk_level}</span>
                  </div>
                  
                  <div className="flex justify-between items-center px-1">
                    <span className="text-gray-600 font-medium">Population</span> 
                    <span className="font-bold">2,100</span>
                  </div>
                  
                  <div className="flex justify-between items-center px-1">
                    <span className="text-gray-600 font-medium">Buildings</span> 
                    <span className="font-bold">542</span>
                  </div>
                  
                  <div className="flex justify-between items-center px-1">
                    <span className="text-gray-600 font-medium">Prediction</span> 
                    <span className="font-bold text-orange-600">Very High</span>
                  </div>

                  <div className="mt-3 pt-2 border-t border-gray-300">
                    <div className="text-xs text-gray-500 font-bold uppercase mb-1">Recommendation</div>
                    <div className={`p-2 rounded text-center font-bold text-white ${ward.risk_level === 'Critical' ? 'bg-red-600' : 'bg-orange-500'}`}>
                      {ward.risk_level === 'Critical' ? 'Immediate Survey' : 'Deploy Drone LiDAR'}
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </Polygon>
          </div>
        ))}
      </MapContainer>

      {/* Clean HTML Legend Overlay */}
      <div className="absolute bottom-4 right-4 z-[400] flex flex-col items-end">
        {isLegendOpen && (
          <div className="mb-2 bg-gray-950/95 border border-gray-800 p-4 rounded-xl shadow-2xl text-xs text-gray-300 min-w-[180px] animate-fade-in-up origin-bottom-right backdrop-blur-md">
            <h4 className="font-bold text-white border-b border-gray-800 pb-2 mb-3 tracking-wider">MAP LEGEND</h4>
        <div className="space-y-2.5 font-medium">
          <div className="flex items-center justify-between">
            <div className="flex items-center"><div className="w-4 h-4 rounded bg-red-500 mr-2 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div><span className="text-white">Critical</span></div>
            <span className="text-gray-500 font-mono text-[10px]">&gt;60 mm/yr</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center"><div className="w-4 h-4 rounded bg-orange-500 mr-2 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div><span className="text-white">High</span></div>
            <span className="text-gray-500 font-mono text-[10px]">40–60 mm/yr</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center"><div className="w-4 h-4 rounded bg-yellow-500 mr-2 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div><span className="text-white">Moderate</span></div>
            <span className="text-gray-500 font-mono text-[10px]">20–40 mm/yr</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center"><div className="w-4 h-4 rounded bg-green-500 mr-2"></div><span className="text-white">Stable</span></div>
            <span className="text-gray-500 font-mono text-[10px]">&lt;20 mm/yr</span>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-800 space-y-2">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-white border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 font-bold text-[10px] mr-2">H</div>
              <span className="text-gray-400">Hospital</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold text-[10px] mr-2">S</div>
              <span className="text-gray-400">School</span>
            </div>
          </div>
        </div>
        </div>
        )}
        
        <button 
          onClick={() => setIsLegendOpen(!isLegendOpen)}
          className="bg-gray-950/90 border border-gray-800 p-2.5 rounded-lg shadow-lg backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors flex items-center justify-center"
          title="Map Legend"
        >
          <Info className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
