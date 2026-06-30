"use client";

import { Satellite, Database, Activity, MapPin, Server, Navigation, ShieldAlert, Cpu, Layers, GitMerge, Building } from "lucide-react";
import Link from "next/link";

export default function Methodology() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-semibold mb-6">
            <Server className="w-4 h-4 mr-2" /> Scientific Approach
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Our Methodology
          </h1>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            BhoomiAlert leverages a sophisticated pipeline of satellite imagery processing, GIS analytics, and machine learning to deliver proactive disaster intelligence.
          </p>
        </div>
      </section>

      {/* Core Pipeline Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-48">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up">
            <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden p-[1px] shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:scale-105 transition-all duration-500 group">
               <div className="absolute -inset-[100%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_70%,#3b82f6_100%)]"></div>
               <div className="relative z-10 w-full h-full bg-gray-900/95 rounded-xl flex items-center justify-center overflow-hidden backdrop-blur-xl">
                  <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/Topographic_map_of_Uttarakhand.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-125"></div>
                  <Satellite className="w-24 h-24 text-blue-500 relative z-10 animate-[bounce_4s_infinite]" />
                  <div className="absolute bottom-6 left-6 bg-gray-950/80 border border-gray-700 px-3 py-1 rounded text-xs text-blue-300 font-mono backdrop-blur-sm group-hover:-translate-y-1 transition-transform">Sentinel-1 A/B</div>
               </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center border border-blue-800">
                <span className="text-xl font-bold text-blue-400">01</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Data Acquisition & InSAR Processing</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                We utilize C-band Synthetic Aperture Radar (SAR) data from the <strong>Copernicus Sentinel-1</strong> mission. By employing Interferometric SAR (InSAR) techniques, specifically Persistent Scatterer Interferometry (PSI), we can detect millimeter-level ground displacements over time.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center"><Activity className="w-4 h-4 text-blue-500 mr-3"/> Phase difference calculation</li>
                <li className="flex items-center"><Activity className="w-4 h-4 text-blue-500 mr-3"/> Atmospheric phase screen removal</li>
                <li className="flex items-center"><Activity className="w-4 h-4 text-blue-500 mr-3"/> Line-of-sight (LOS) velocity extraction</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center border border-indigo-800">
                <span className="text-xl font-bold text-indigo-400">02</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Geospatial Overlay & Contextualization</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Raw deformation vectors are insufficient without environmental context. We integrate the InSAR velocities with secondary geospatial datasets to understand the drivers and the potential impact of the subsidence.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center"><Layers className="w-4 h-4 text-indigo-500 mr-3"/> High-resolution Digital Elevation Models (DEM) for slope analysis</li>
                <li className="flex items-center"><Layers className="w-4 h-4 text-indigo-500 mr-3"/> OpenStreetMap (OSM) for building footprints and critical infra</li>
                <li className="flex items-center"><Layers className="w-4 h-4 text-indigo-500 mr-3"/> Hydrological data proxy via building density mapping</li>
              </ul>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden p-[1px] shadow-[0_0_40px_rgba(79,70,229,0.2)] hover:scale-105 transition-all duration-500 group">
               <div className="absolute -inset-[100%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_70%,#6366f1_100%)]"></div>
               <div className="relative z-10 w-full h-full bg-gray-900/95 rounded-xl flex items-center justify-center overflow-hidden backdrop-blur-xl">
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
                 <div className="relative z-10 flex space-x-6">
                   <div className="w-20 h-32 bg-gray-800/80 border border-indigo-500/30 rounded-xl translate-y-4 shadow-[0_0_15px_rgba(99,102,241,0.2)] backdrop-blur flex items-center justify-center group-hover:-translate-y-4 transition-transform duration-700 ease-out"><Navigation className="text-indigo-400 w-8 h-8 group-hover:scale-125 transition-transform"/></div>
                   <div className="w-20 h-32 bg-gray-800/80 border border-blue-500/30 rounded-xl -translate-y-4 shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur flex items-center justify-center group-hover:-translate-y-12 transition-transform duration-700 delay-100 ease-out"><Layers className="text-blue-400 w-8 h-8 group-hover:scale-125 transition-transform"/></div>
                   <div className="w-20 h-32 bg-gray-800/80 border border-green-500/30 rounded-xl translate-y-8 shadow-[0_0_15px_rgba(74,222,128,0.2)] backdrop-blur flex items-center justify-center group-hover:translate-y-0 transition-transform duration-700 delay-200 ease-out"><Building className="text-green-400 w-8 h-8 group-hover:scale-125 transition-transform"/></div>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden p-[1px] shadow-[0_0_40px_rgba(239,68,68,0.2)] hover:scale-105 transition-all duration-500 group">
               <div className="absolute -inset-[100%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_70%,#ef4444_100%)]"></div>
               <div className="relative z-10 w-full h-full bg-gray-900/95 rounded-xl flex items-center justify-center overflow-hidden backdrop-blur-xl">
                 <Cpu className="w-32 h-32 text-red-500 relative z-10 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-red-500/20 rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-red-500/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                 </div>
               </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center border border-red-800">
                <span className="text-xl font-bold text-red-400">03</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Machine Learning Risk Prediction</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                We deploy a robust <strong>Random Forest Regression</strong> model trained on historical failure events and ground truth structural audits. This model ingests the multidimensional geospatial matrix to output a highly accurate risk score for every building or grid cell.
              </p>
              <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 mt-4">
                 <div className="text-xs font-mono text-gray-500 mb-2">Model Inputs:</div>
                 <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 font-medium">
                   <div className="bg-gray-900 px-2 py-1.5 rounded flex items-center"><GitMerge className="w-3 h-3 text-red-400 mr-2"/> Ground Subsidence Velocity</div>
                   <div className="bg-gray-900 px-2 py-1.5 rounded flex items-center"><GitMerge className="w-3 h-3 text-red-400 mr-2"/> Terrain Slope</div>
                   <div className="bg-gray-900 px-2 py-1.5 rounded flex items-center"><GitMerge className="w-3 h-3 text-red-400 mr-2"/> Infrastructure Proximity</div>
                   <div className="bg-gray-900 px-2 py-1.5 rounded flex items-center"><GitMerge className="w-3 h-3 text-red-400 mr-2"/> Density & Mass Proxy</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to see the intelligence in action?</h2>
          <Link href="/dashboard" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Go to Dashboard <MapPin className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
