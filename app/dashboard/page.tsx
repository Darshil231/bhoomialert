"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Activity, Layers, ShieldAlert, Navigation, Info, Clock, CheckCircle, Database, Play, AlertTriangle, IndianRupee, BrainCircuit, ScanSearch, MapPin, Search } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false, loading: () => <div className="w-full h-[500px] bg-gray-900 animate-pulse rounded-lg border border-gray-800 flex items-center justify-center text-gray-500">Loading Map Data...</div> });

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);
  const [activeLayer, setActiveLayer] = useState("Risk Polygon");
  const [timeView, setTimeView] = useState("1M");
  const [simulating, setSimulating] = useState(false);
  const [simulationYear, setSimulationYear] = useState(2024);
  const [loadingStep, setLoadingStep] = useState(0);
  const [layerToast, setLayerToast] = useState('');
  const [isLayersMenuOpen, setIsLayersMenuOpen] = useState(false);

  const handleLayerSelect = (layer: string) => {
    setActiveLayer(layer);
    setLayerToast(layer);
    setTimeout(() => setLayerToast(''), 2500);
  };

  useEffect(() => {
    // Premium Loading Sequence
    const steps = [
      "Loading Satellite Tiles...",
      "Running ML Risk Assessment...",
      "Generating Infrastructure Layers..."
    ];
    
    let step = 0;
    const loadInterval = setInterval(() => {
      step++;
      setLoadingStep(step);
      if (step >= steps.length) {
        clearInterval(loadInterval);
        fetchData();
      }
    }, 1000);

    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/dashboard");
        setStats(res.data);
      } catch (err) {
        console.error("Failed to load ML pipeline data", err);
      }
    };
    
    return () => clearInterval(loadInterval);
  }, []);

  const triggerSimulation = () => {
    setSimulating(true);
    let year = 2024;
    setSimulationYear(year);
    const interval = setInterval(() => {
      year++;
      if (year > 2027) {
        clearInterval(interval);
        setSimulating(false);
      } else {
        setSimulationYear(year);
      }
    }, 1500);
  };

  if (!stats) {
    const steps = ["Loading Satellite Tiles...", "Running ML Risk Assessment...", "Generating Infrastructure Layers..."];
    return (
      <div className="text-white p-8 text-center flex flex-col items-center justify-center h-screen bg-gray-950">
        <div className="relative">
          <Activity className="w-12 h-12 text-blue-500 mb-4 animate-spin"/>
          <div className="absolute inset-0 border-t-2 border-blue-400 rounded-full animate-[spin_2s_linear_infinite]"></div>
        </div>
        <div className="font-mono text-sm text-gray-400">{steps[Math.min(loadingStep, 2)]}</div>
      </div>
    );
  }

  if (stats.error) {
    return (
      <div className="text-red-500 p-8 text-center flex flex-col items-center justify-center h-screen bg-gray-950">
        <AlertTriangle className="w-12 h-12 mb-4"/>
        <div className="text-xl font-bold">Error: {stats.error}</div>
        <div className="text-sm text-gray-400 mt-2">Please ensure the backend has the required data.</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header & Disclaimers */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">National Geospatial Infrastructure Risk Dashboard</h1>
          <Link href="/about" className="text-blue-400 hover:text-blue-300 mt-1 flex items-center space-x-1 text-sm transition-colors">
            <span>How was this prediction generated? View Methodology →</span>
          </Link>
        </div>
        <div className="flex flex-col items-end gap-3">
          
          {/* Live Status */}
          <div className="flex items-center bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg shadow-lg">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping mr-3 shadow-[0_0_8px_#22c55e]" style={{ animationDuration: '2s' }}></div>
            <div className="text-right">
              <div className="text-sm font-bold text-white">Latest Observation</div>
              <div className="text-[10px] text-gray-400 font-mono">12 June 2026<br/>Sentinel-1 Pass</div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Link href="/reports" className="bg-gray-900 border border-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center">
              Generate Official Report
            </Link>
            <button onClick={triggerSimulation} disabled={simulating} className={`border px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center shadow-lg ${simulating ? 'bg-purple-900/50 border-purple-500 text-purple-300 cursor-not-allowed' : 'bg-purple-600 border-purple-500 text-white hover:bg-purple-700 shadow-purple-900/20'}`}>
              <Play className="w-4 h-4 mr-2" /> {simulating ? `Simulating ${simulationYear}...` : "Simulate Future"}
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          { label: "High Risk Wards", value: "12", icon: ShieldAlert, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-900/50", hover: "hover:shadow-red-500/20 hover:border-red-500/50 hover:-translate-y-1", source: "Sentinel-1", date: "Latest Observation" },
          { label: "Critical Infrastructure", value: `${stats.infrastructure.total_assets} Assets`, icon: AlertTriangle, color: "text-orange-400", bg: "bg-gray-900/50", border: "border-gray-800", hover: "hover:shadow-orange-400/20 hover:border-orange-500/50 hover:-translate-y-1", source: "OpenStreetMap", date: "June 2026" },
          { label: "Buildings Analysed", value: "2,148", icon: Layers, color: "text-blue-400", bg: "bg-gray-900/50", border: "border-gray-800", hover: "hover:shadow-blue-400/20 hover:border-blue-500/50 hover:-translate-y-1", source: "OpenStreetMap", date: "June 2026" },
          { label: "Maximum Observed", value: stats.hero_stats.max_observed, icon: Navigation, color: "text-orange-400", bg: "bg-gray-900/50", border: "border-gray-800", hover: "hover:shadow-orange-400/20 hover:border-orange-500/50 hover:-translate-y-1", source: "InSAR Processing", date: "Latest Observation" },
          { 
            label: "Confidence", value: stats.hero_stats.ai_prediction_accuracy, icon: Activity, color: "text-green-400", bg: "bg-gray-900/50", border: "border-gray-800", hover: "hover:shadow-green-400/20 hover:border-green-500/50 hover:-translate-y-1", source: "Model: Random Forest", date: "Version 1.0",
            customContent: (
               <div className="mt-2 text-[10px] text-gray-400 space-y-1">
                 <div className="font-bold text-gray-300 mb-1">Model Inputs</div>
                 <div className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1"/> Historical InSAR</div>
                 <div className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1"/> Terrain</div>
                 <div className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1"/> Infrastructure</div>
                 <div className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1"/> Building Density</div>
               </div>
            )
          }
        ].map((kpi, idx) => (
          <div key={idx} className={`${kpi.bg} border ${kpi.border} ${kpi.hover} transition-all duration-300 p-5 rounded-xl flex flex-col justify-between shadow-lg animate-fade-in-up group`} style={{ animationDelay: `${idx * 150}ms` }}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">{kpi.label}</span>
                <kpi.icon className={`w-4 h-4 ${kpi.color} group-hover:scale-110 transition-transform`} />
              </div>
              <span className="text-2xl font-bold text-white">{kpi.value}</span>
              {kpi.customContent}
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-800 flex justify-between items-center text-[9px] text-gray-500 uppercase tracking-wider">
              <span className="flex items-center truncate max-w-[60%]"><Database className="w-3 h-3 mr-1 flex-shrink-0" /> {kpi.source}</span>
              <span className="flex items-center"><Clock className="w-3 h-3 mr-1 flex-shrink-0" /> {kpi.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Map & Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* MAP */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden h-[750px] flex flex-col relative shadow-xl">
           <div className="absolute top-4 left-4 z-[400] bg-gray-950/90 border border-gray-800 rounded-lg p-1.5 shadow-lg backdrop-blur-sm flex space-x-1">
             {['1M', '6M', '1Y', 'Custom'].map(time => (
               <button 
                 key={time}
                 onClick={() => setTimeView(time)}
                 className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${timeView === time ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`}
               >
                 {time}
               </button>
             ))}
           </div>

           <div className="absolute top-4 right-4 z-[400] flex flex-col items-end">
             {/* Small Icon Button */}
             <button 
               onClick={() => setIsLayersMenuOpen(!isLayersMenuOpen)}
               className="bg-gray-950/90 border border-gray-800 p-2.5 rounded-lg shadow-lg backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors flex items-center justify-center"
               title="Geospatial Layers"
             >
               <Layers className="w-5 h-5" />
             </button>

             {/* Popup Menu */}
             {isLayersMenuOpen && (
               <div className="mt-2 bg-gray-950/95 border border-gray-800 rounded-lg p-2 text-xs shadow-2xl backdrop-blur-md flex flex-col space-y-2 w-48 animate-fade-in-up origin-top-right">
                 <div className="font-semibold text-gray-200 mb-1 px-1 border-b border-gray-800 pb-2">Geospatial Layers</div>
                 {['Risk Polygon', 'Infrastructure Layer', 'Slope Layer', 'Satellite Basemap'].map(layer => (
                    <button 
                      key={layer}
                      onClick={() => {
                        handleLayerSelect(layer);
                        setIsLayersMenuOpen(false);
                      }}
                      className={`flex items-center justify-between px-2 py-1.5 rounded transition-colors ${activeLayer === layer ? 'bg-blue-600 text-white' : 'hover:bg-gray-800 text-gray-400'}`}
                    >
                      <span>{layer}</span>
                      {activeLayer === layer && <CheckCircle className="w-3 h-3" />}
                    </button>
                 ))}
               </div>
             )}
           </div>
           
           {simulating && (
             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-[400] text-6xl font-black text-white/50 tracking-widest drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] pointer-events-none">
               {simulationYear}
             </div>
           )}

           {/* GLOWING AI CARD */}
           <div className="absolute bottom-6 right-6 z-[400] bg-gray-950/90 border border-gray-800 rounded-xl p-4 shadow-[0_0_20px_rgba(239,68,68,0.3)] backdrop-blur-md w-72">
             <div className="flex justify-between items-center mb-2">
               <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">AI Overall Risk</div>
               <div className="text-red-500 font-black text-lg">HIGH</div>
             </div>
             <div className="flex justify-between items-center mb-4">
               <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Confidence</div>
               <div className="text-green-400 font-bold">96.2%</div>
             </div>
             <div className="pt-3 border-t border-gray-800">
               <div className="text-[10px] text-gray-500 mb-1">Next Recommended Action</div>
               <div className="bg-red-900/30 text-red-400 text-xs font-bold py-1.5 px-2 rounded text-center border border-red-900/50">
                 Immediate Structural Inspection
               </div>
             </div>
           </div>

           {/* LAYER TOAST POPUP */}
           {layerToast && (
             <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-[500] bg-blue-600/90 text-white px-4 py-2 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)] font-bold text-sm backdrop-blur animate-fade-in-up">
               Active Layer: {layerToast}
             </div>
           )}

           <MapComponent simulationYear={simulationYear} wards={stats.wards} stats={stats} activeLayer={activeLayer} />
        </div>
        
        {/* CHARTS & XAI */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-6 overflow-y-auto h-[750px]">
          
          {/* Infrastructure Impact Panel */}
          <div className="p-4 bg-gray-950 rounded-lg border border-gray-800">
             <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Infrastructure at Risk</h4>
             
             {/* Financial Exposure Add */}
             <div className="flex justify-between items-center bg-red-900/10 border border-red-900/30 p-3 rounded mb-4">
               <span className="text-red-400 text-sm font-semibold flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/> Potential Infrastructure Loss</span>
               <span className="text-sm font-bold text-red-500">Estimated (Representative)</span>
             </div>

             <div className="flex justify-between items-end border-b border-gray-800 pb-2 mb-3">
               <span className="text-gray-400 text-sm">Population at Risk</span>
               <span className="text-lg font-bold text-white">{stats.infrastructure.population_at_risk}</span>
             </div>
             <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-900 p-2 rounded border border-gray-800 flex justify-between">
                  <span className="text-gray-400">Hospitals</span><span className="font-bold text-white">{stats.infrastructure.hospitals}</span>
                </div>
                <div className="bg-gray-900 p-2 rounded border border-gray-800 flex justify-between">
                  <span className="text-gray-400">Schools</span><span className="font-bold text-white">{stats.infrastructure.schools}</span>
                </div>
                <div className="bg-gray-900 p-2 rounded border border-gray-800 flex justify-between">
                  <span className="text-gray-400">Bridges</span><span className="font-bold text-white">{stats.infrastructure.bridges}</span>
                </div>
                <div className="bg-gray-900 p-2 rounded border border-gray-800 flex justify-between">
                  <span className="text-gray-400">Roads</span><span className="font-bold text-white">{stats.infrastructure.roads}</span>
                </div>
             </div>
          </div>

          {/* AI Reasoning Summary (NEW) */}
          <div className="p-4 bg-gray-950 rounded-lg border border-gray-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-8 -mt-8"></div>
             <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3 flex items-center">
               <BrainCircuit className="w-4 h-4 mr-2" /> AI Risk Assessment
             </h4>
             <div className="text-sm text-gray-300 font-medium mb-4 flex flex-col">
               <span className="text-xs text-gray-500 mb-1">Predicted Probability of Continued Subsidence</span>
               <span className="text-green-400 font-bold text-xl">96%</span>
             </div>
             <div className="space-y-2 text-xs text-gray-400 mb-5 bg-gray-900 p-3 rounded border border-gray-800">
               <div className="font-semibold text-gray-300 border-b border-gray-800 pb-2 mb-2">Expected Progression</div>
               <div className="flex justify-between items-center"><span className="text-gray-500">30 Days</span> <span className="text-orange-400 font-bold">Moderate Increase</span></div>
             </div>
             <div className="flex justify-between items-center bg-gray-900/50 border border-gray-800 p-3 rounded">
               <span className="text-gray-400 text-sm font-semibold">Confidence</span>
               <span className="text-green-400 font-bold text-lg">96%</span>
             </div>
          </div>

          {/* Prediction Timeline (Replaces expected trend) */}
          <div className="p-4 bg-gray-950 rounded-lg border border-gray-800">
             <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Prediction Timeline</h4>
             
             <div className="flex items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>
                <div className="absolute top-1/2 left-4 right-1/2 h-0.5 bg-orange-500 -translate-y-1/2 z-0"></div>

                {/* Nodes */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500 border-2 border-gray-950 mb-2"></div>
                  <span className="text-[10px] text-orange-400 font-bold">Current</span>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500 border-2 border-gray-950 mb-2"></div>
                  <span className="text-[10px] text-gray-400">30 Day Forecast</span>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-950 mb-2"></div>
                  <span className="text-[10px] text-gray-500">6 Month Forecast</span>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-950 mb-2"></div>
                  <span className="text-[10px] text-gray-500">12 Month Forecast</span>
                </div>
             </div>
          </div>

          {/* Evidence Used */}
          <div className="p-4 bg-gray-950 rounded-lg border border-gray-800">
             <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
               <Info className="w-4 h-4 mr-2" /> Evidence Used
             </h4>
             <div className="space-y-2 text-sm text-gray-300">
               <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Satellite Observation</div>
               <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Historical Trend</div>
               <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Terrain</div>
               <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Infrastructure</div>
               <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Building Density</div>
             </div>
          </div>

        </div>
      </div>

      {/* Bottom Recommendation Panel (NEW) */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
         <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
         <h3 className="text-lg font-bold text-white mb-4 flex items-center">
           <ScanSearch className="w-5 h-5 text-blue-400 mr-2" /> 
           Recommended Actions
         </h3>
         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           {[
             { title: "Immediate Survey", subtitle: "Deploy UAV inspection", icon: MapPin, color: "text-blue-400" },
             { title: "Drone", subtitle: "Capture updated imagery", icon: Navigation, color: "text-orange-400" },
             { title: "Restrict Vehicles", subtitle: "Reduce structural loading", icon: ShieldAlert, color: "text-red-400" },
             { title: "Emergency Inspection", subtitle: "Assess structural risk", icon: Activity, color: "text-red-500" },
             { title: "Notify Authority", subtitle: "District Disaster Office", icon: AlertTriangle, color: "text-yellow-400" }
           ].map((action, i) => (
             <div key={i} className="bg-gray-950 border border-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-gray-800 transition-colors cursor-pointer group">
               <action.icon className={`w-6 h-6 ${action.color} group-hover:scale-110 mb-3 transition-transform`} />
               <span className="text-xs text-gray-200 font-bold mb-1">{action.title}</span>
               <span className="text-[10px] text-gray-500 font-medium leading-tight">{action.subtitle}</span>
             </div>
           ))}
         </div>
      </div>

    </div>
  );
}
