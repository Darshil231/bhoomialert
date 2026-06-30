"use client";

import { Satellite, Map as MapIcon, Mountain, Layers, Cpu, Activity, Database, Monitor, BarChart, FileText, Users, ArrowDown, ArrowRight, Network, ShieldAlert, Globe, Building, Zap, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Architecture() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto py-24 px-4 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">System Architecture</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">End-to-end AI-powered geospatial intelligence pipeline for infrastructure risk assessment.</p>
        </div>

        <div className="flex flex-col space-y-0 relative">
          
          {/* Connector Track Background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-900/50 via-purple-900/50 to-red-900/50 -translate-x-1/2 hidden md:block z-0 pointer-events-none"></div>

          {/* STAGE 1: DATA ACQUISITION */}
          <div className="relative border border-blue-900/50 bg-blue-950/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-shadow duration-500 group z-10 backdrop-blur-md">
            <h3 className="absolute -top-4 left-8 bg-gray-950 px-4 py-1 text-sm font-bold text-blue-400 border border-blue-900/50 rounded-full flex items-center shadow-lg"><Database className="w-4 h-4 mr-2"/> STAGE 1: DATA ACQUISITION</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500/50 hover:bg-gray-800 transition-colors group/card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Satellite className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover/card:scale-110 transition-transform"/>
                <h4 className="text-white font-bold mb-2">Representative Sentinel-1 SAR</h4>
                <p className="text-xs text-gray-500">Ground Deformation Observations</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500/50 hover:bg-gray-800 transition-colors group/card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <MapIcon className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover/card:scale-110 transition-transform"/>
                <h4 className="text-white font-bold mb-2">OpenStreetMap</h4>
                <p className="text-xs text-gray-500">Buildings • Roads • Critical Assets</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500/50 hover:bg-gray-800 transition-colors group/card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Mountain className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover/card:scale-110 transition-transform"/>
                <h4 className="text-white font-bold mb-2">Copernicus DEM</h4>
                <p className="text-xs text-gray-500">Elevation • Terrain • Slope</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6 relative z-10 pointer-events-none h-12">
            <div className="w-12 h-12 rounded-full bg-gray-950 border border-gray-800 flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-pulse">
              <ArrowDown className="w-6 h-6" />
            </div>
          </div>

          {/* STAGE 2: INSAR PROCESSING */}
          <div className="relative border border-purple-900/50 bg-purple-950/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-shadow duration-500 group z-10 backdrop-blur-md">
            <h3 className="absolute -top-4 left-8 bg-gray-950 px-4 py-1 text-sm font-bold text-purple-400 border border-purple-900/50 rounded-full flex items-center shadow-lg"><Layers className="w-4 h-4 mr-2"/> STAGE 2: INSAR PROCESSING</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500/50 hover:bg-gray-800 transition-colors group/card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <h4 className="text-white font-bold mb-4 flex items-center border-b border-gray-800 pb-3"><Activity className="w-5 h-5 mr-3 text-purple-400"/> InSAR Processing Pipeline</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div> Image Coregistration</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div> Interferogram Generation</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div> Phase Unwrapping</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div> Surface Displacement Extraction</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500/50 hover:bg-gray-800 transition-colors group/card flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <h4 className="text-gray-500 font-bold mb-4 uppercase tracking-wider text-xs">Output</h4>
                <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-full w-48 h-48 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)] animate-[spin_10s_linear_infinite] group-hover/card:border-purple-500/60 transition-colors">
                  <div className="animate-[spin_10s_linear_infinite_reverse] flex flex-col items-center">
                    <Globe className="w-8 h-8 text-purple-400 mb-2 group-hover/card:scale-110 transition-transform"/>
                    <div className="text-white font-bold text-sm">Ground Deformation Map</div>
                    <div className="text-xs text-purple-300">(mm/year)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6 relative z-10 pointer-events-none h-12">
            <div className="w-12 h-12 rounded-full bg-gray-950 border border-gray-800 flex items-center justify-center text-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)] animate-pulse">
              <ArrowDown className="w-6 h-6" />
            </div>
          </div>

          {/* STAGE 3: AI RISK ENGINE */}
          <div className="relative border border-cyan-900/50 bg-cyan-950/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.05)] hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-shadow duration-500 group z-10 backdrop-blur-md">
            <h3 className="absolute -top-4 left-8 bg-gray-950 px-4 py-1 text-sm font-bold text-cyan-400 border border-cyan-900/50 rounded-full flex items-center shadow-lg"><Cpu className="w-4 h-4 mr-2"/> STAGE 3: AI RISK ENGINE</h3>
            
            <div className="text-center mb-8 mt-4 group-hover:scale-105 transition-transform duration-500">
              <h4 className="text-2xl font-bold text-white">Random Forest Regression</h4>
              <p className="text-cyan-400 text-sm font-mono mt-1">Core Machine Learning Module</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-cyan-500/50 hover:bg-gray-800 transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <h4 className="text-gray-500 font-bold mb-4 uppercase tracking-wider text-xs border-b border-gray-800 pb-2">Inputs</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-cyan-500 mr-3"/> Ground Deformation</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-cyan-500 mr-3"/> Terrain</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-cyan-500 mr-3"/> Building Density</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-cyan-500 mr-3"/> Infrastructure</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-cyan-500 mr-3"/> Historical Trend</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-cyan-500/50 hover:bg-gray-800 transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <h4 className="text-gray-500 font-bold mb-4 uppercase tracking-wider text-xs border-b border-gray-800 pb-2">Outputs</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div> Risk Score</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div> Risk Classification</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div> 30-Day Forecast</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div> Confidence Score</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6 relative z-10 pointer-events-none h-12">
            <div className="w-12 h-12 rounded-full bg-gray-950 border border-gray-800 flex items-center justify-center text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)] animate-pulse">
              <ArrowDown className="w-6 h-6" />
            </div>
          </div>

          {/* STAGE 4: DECISION SUPPORT PLATFORM */}
          <div className="relative border border-orange-900/50 bg-orange-950/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(249,115,22,0.05)] hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-shadow duration-500 group z-10 backdrop-blur-md">
            <h3 className="absolute -top-4 left-8 bg-gray-950 px-4 py-1 text-sm font-bold text-orange-400 border border-orange-900/50 rounded-full flex items-center shadow-lg"><Monitor className="w-4 h-4 mr-2"/> STAGE 4: DECISION SUPPORT PLATFORM</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-4 md:space-y-0 w-full">
              <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-xl hover:border-orange-500/50 hover:bg-gray-800 transition-colors text-center w-full md:w-auto relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Network className="w-6 h-6 text-orange-400 mx-auto mb-2 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-white">FastAPI Backend</div>
              </div>
              <ArrowRight className="hidden md:block w-6 h-6 text-gray-600 animate-pulse" />
              <ArrowDown className="block md:hidden w-6 h-6 text-gray-600 animate-pulse" />
              
              <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-xl hover:border-orange-500/50 hover:bg-gray-800 transition-colors text-center w-full md:w-auto relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-white">Prediction API</div>
              </div>
              <ArrowRight className="hidden md:block w-6 h-6 text-gray-600 animate-pulse" />
              <ArrowDown className="block md:hidden w-6 h-6 text-gray-600 animate-pulse" />

              <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-xl hover:border-orange-500/50 hover:bg-gray-800 transition-colors text-center w-full md:w-auto relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Monitor className="w-6 h-6 text-orange-400 mx-auto mb-2 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-white">BhoomiAlert Dashboard</div>
              </div>
              <ArrowRight className="hidden md:block w-6 h-6 text-gray-600 animate-pulse" />
              <ArrowDown className="block md:hidden w-6 h-6 text-gray-600 animate-pulse" />

              <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-xl hover:border-orange-500/50 hover:bg-gray-800 transition-colors text-center w-full md:w-auto relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <BarChart className="w-6 h-6 text-orange-400 mx-auto mb-2 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-white">Infrastructure Analytics</div>
              </div>
              <ArrowRight className="hidden md:block w-6 h-6 text-gray-600 animate-pulse" />
              <ArrowDown className="block md:hidden w-6 h-6 text-gray-600 animate-pulse" />

              <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-xl hover:border-orange-500/50 hover:bg-gray-800 transition-colors text-center w-full md:w-auto relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <ShieldAlert className="w-6 h-6 text-orange-400 mx-auto mb-2 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-white">Authority Decision Support</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6 relative z-10 pointer-events-none h-12">
            <div className="w-12 h-12 rounded-full bg-gray-950 border border-gray-800 flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)] animate-pulse">
              <ArrowDown className="w-6 h-6" />
            </div>
          </div>

          {/* STAGE 5: VISUALIZATION */}
          <div className="relative border border-green-900/50 bg-green-950/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.05)] hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition-shadow duration-500 group z-10 backdrop-blur-md">
            <h3 className="absolute -top-4 left-8 bg-gray-950 px-4 py-1 text-sm font-bold text-green-400 border border-green-900/50 rounded-full flex items-center shadow-lg"><BarChart className="w-4 h-4 mr-2"/> STAGE 5: VISUALIZATION</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-green-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <MapIcon className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">Interactive Risk Map</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-green-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Building className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">Infrastructure Exposure</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-green-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Activity className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">Forecast Timeline</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-green-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Cpu className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">AI Assessment</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-green-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <ShieldAlert className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">Recommended Actions</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-green-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <FileText className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">PDF Reports</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6 relative z-10 pointer-events-none h-12">
            <div className="w-12 h-12 rounded-full bg-gray-950 border border-gray-800 flex items-center justify-center text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)] animate-pulse">
              <ArrowDown className="w-6 h-6" />
            </div>
          </div>

          {/* STAGE 6: END USERS */}
          <div className="relative border border-red-900/50 bg-red-950/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.05)] hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] transition-shadow duration-500 group z-10 backdrop-blur-md">
            <h3 className="absolute -top-4 left-8 bg-gray-950 px-4 py-1 text-sm font-bold text-red-400 border border-red-900/50 rounded-full flex items-center shadow-lg"><Users className="w-4 h-4 mr-2"/> STAGE 6: END USERS</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-red-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Users className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">District Administration</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-red-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <ShieldAlert className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">Disaster Management Authority</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-red-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <MapIcon className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">Urban Planning Department</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl hover:border-red-500/50 hover:bg-gray-800 text-center transition-colors relative overflow-hidden group/card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                <Building className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover/card:scale-110 transition-transform"/>
                <div className="text-sm font-bold text-gray-200">Infrastructure Agencies</div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM PIPELINE SUMMARY */}
        <div className="pt-16 border-t border-gray-800/50">
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest text-center mb-8">End-to-End Pipeline Overview</h4>
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs md:text-sm font-mono text-gray-400">
            <div className="bg-gray-900 px-4 py-2 rounded-lg border border-gray-800 hover:text-white hover:border-gray-600 transition-colors shadow-lg cursor-default">Representative Sentinel-1</div>
            <ChevronRight className="w-4 h-4 text-blue-500 animate-pulse"/>
            <div className="bg-gray-900 px-4 py-2 rounded-lg border border-gray-800 hover:text-white hover:border-gray-600 transition-colors shadow-lg cursor-default">InSAR Processing</div>
            <ChevronRight className="w-4 h-4 text-purple-500 animate-pulse"/>
            <div className="bg-gray-900 px-4 py-2 rounded-lg border border-gray-800 hover:text-white hover:border-gray-600 transition-colors shadow-lg cursor-default">Ground Deformation</div>
            <ChevronRight className="w-4 h-4 text-purple-500 animate-pulse"/>
            <div className="bg-gray-900 px-4 py-2 rounded-lg border border-gray-800 hover:text-white hover:border-gray-600 transition-colors shadow-lg cursor-default">AI Risk Engine</div>
            <ChevronRight className="w-4 h-4 text-cyan-500 animate-pulse"/>
            <div className="bg-gray-900 px-4 py-2 rounded-lg border border-gray-800 hover:text-white hover:border-gray-600 transition-colors shadow-lg cursor-default">Prediction API</div>
            <ChevronRight className="w-4 h-4 text-orange-500 animate-pulse"/>
            <div className="bg-gray-900 px-4 py-2 rounded-lg border border-gray-800 hover:text-white hover:border-gray-600 transition-colors shadow-lg cursor-default">Dashboard</div>
            <ChevronRight className="w-4 h-4 text-orange-500 animate-pulse"/>
            <div className="bg-gray-900 px-4 py-2 rounded-lg border border-gray-800 hover:text-white hover:border-gray-600 transition-colors shadow-lg cursor-default">Decision Support</div>
            <ChevronRight className="w-4 h-4 text-green-500 animate-pulse"/>
            <div className="bg-red-900/20 text-red-400 px-4 py-2 rounded-lg border border-red-900/50 font-bold shadow-[0_0_15px_rgba(239,68,68,0.15)] cursor-default">Early Warning</div>
          </div>
        </div>

      </div>
    </div>
  );
}
