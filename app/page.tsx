import Link from "next/link";
import { ArrowRight, Satellite, Database, Activity, MapPin, Server, Navigation, TrendingUp, AlertTriangle, ShieldAlert, Users, Building, AlertCircle, Eye } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden border-b border-gray-800 flex flex-col justify-center">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-left space-y-6">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-semibold mb-2">
                <span className="flex h-2 w-2 relative mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Sentinel-1 InSAR Intelligence
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                Predict Subsidence.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Protect Infrastructure.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-xl font-light">
                Transforming ISRO Sentinel-1 InSAR data into AI-driven risk intelligence for proactive disaster management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Primary Button */}
                <Link href="/dashboard" className="relative inline-flex group items-center justify-center rounded-lg p-[1px] overflow-hidden shadow-lg shadow-blue-900/20 transition-transform hover:scale-105 duration-300">
                  <span className="absolute -inset-[200%] z-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_70%,#93c5fd_100%)]"></span>
                  <span className="relative z-10 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg transition-colors w-full h-full">
                    Explore Risk Dashboard <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                {/* Secondary Button */}
                <Link href="/methodology" className="relative inline-flex group items-center justify-center rounded-lg p-[1px] overflow-hidden transition-transform hover:scale-105 duration-300">
                  <span className="absolute -inset-[200%] z-0 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_70%,#6b7280_100%)]"></span>
                  <span className="relative z-10 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-300 bg-gray-950 rounded-lg group-hover:text-white transition-colors w-full h-full">
                    Understand Methodology
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Live Data Visualization */}
            <div className="relative w-full h-[550px] bg-gray-950 border border-gray-800 rounded-xl shadow-2xl flex flex-col items-center justify-center">
              
              {/* Radar Sweep Background */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                 <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/Topographic_map_of_Uttarakhand.png')] bg-cover bg-center opacity-20"></div>
                 {/* The Sweep */}
                 <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-blue-500/30 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 origin-center animate-[spin_4s_linear_infinite]">
                   <div className="w-1/2 h-1/2 bg-gradient-to-br from-blue-500/40 to-transparent rounded-tl-full"></div>
                 </div>
                 {/* Tiny Satellites */}
                 <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
                 <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
                 <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff] animate-ping"></div>
                 {/* Vertical Scan Line */}
                 <div className="absolute top-0 left-0 w-full h-2 bg-blue-500/50 blur-[2px] animate-[scan_5s_ease-in-out_infinite]"></div>
              </div>

              {/* Central Marker */}
              <div className="relative z-10 flex flex-col items-center justify-center -mt-20">
                <div className="absolute w-32 h-32 bg-red-500/30 rounded-full animate-ping"></div>
                <div className="w-6 h-6 bg-red-500 border-4 border-white rounded-full shadow-[0_0_20px_rgba(239,68,68,1)] z-10"></div>
                
                {/* Floating ML Model Card */}
                <div className="absolute top-48 -left-48 w-60 hidden md:block z-20 rounded-xl overflow-hidden p-[1px] shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer">
                   <div className="absolute -inset-[100%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_70%,#3b82f6_100%)]"></div>
                   <div className="relative w-full h-full bg-gray-950/95 rounded-xl p-4 backdrop-blur-xl">
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-800 pb-2">MODEL</h3>
                   <div className="text-sm font-bold text-blue-400 mb-2">Random Forest Regression</div>
                   <div className="space-y-3">
                     <div>
                        <div className="text-[10px] text-gray-500 mb-1">Inputs</div>
                        <div className="text-[10px] text-gray-300 space-y-1">
                          <div>✓ InSAR Displacement</div>
                          <div>✓ Terrain Slope</div>
                          <div>✓ Historical Trend</div>
                          <div>✓ Building Density</div>
                        </div>
                     </div>
                     <div className="flex justify-between pt-2 border-t border-gray-800">
                       <div>
                         <div className="text-[10px] text-gray-500">Accuracy</div>
                         <div className="text-sm font-bold text-green-400">94%</div>
                       </div>
                       <div className="text-right">
                         <div className="text-[10px] text-gray-500">Prediction Horizon</div>
                         <div className="text-sm font-bold text-white">30 Days</div>
                       </div>
                     </div>
                   </div>
                   </div>
                </div>

                {/* Floating AI Assessment Card */}
                <div className="absolute top-10 w-64 z-20 rounded-xl overflow-hidden p-[1px] shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer">
                   <div className="absolute -inset-[100%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_70%,#ef4444_100%)]"></div>
                   <div className="relative w-full h-full bg-gray-950/95 rounded-xl p-4 backdrop-blur-xl">
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 border-b border-gray-800 pb-2">AI Assessment</h3>
                   <div className="space-y-3">
                     <div>
                       <div className="text-[10px] text-gray-500">Ground Movement Detected</div>
                       <div className="text-lg font-bold text-red-500">79 mm/year</div>
                     </div>
                     <div className="flex justify-between">
                       <div>
                         <div className="text-[10px] text-gray-500">Risk Level</div>
                         <div className="text-sm font-bold text-red-500">HIGH</div>
                       </div>
                       <div className="text-right">
                         <div className="text-[10px] text-gray-500">Confidence</div>
                         <div className="text-sm font-bold text-green-400">96%</div>
                       </div>
                     </div>
                     <div className="pt-2 border-t border-gray-800">
                        <div className="text-[10px] text-gray-500 mb-1">Recommendation</div>
                        <div className="bg-red-900/30 text-red-400 text-xs font-bold py-1 px-2 rounded text-center border border-red-900/50">
                          Detailed Structural Survey
                        </div>
                     </div>
                   </div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM WORKFLOW */}
      <section className="py-16 bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white tracking-tight">System Workflow</h2>
            <p className="text-gray-500 mt-2 text-sm">Automated pipeline from space to local decision support.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 text-sm font-medium">
            <div className="flex flex-col items-center bg-gray-900 border border-gray-800 p-4 rounded-lg w-40 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] hover:border-blue-500/50 cursor-default"><Satellite className="w-6 h-6 text-blue-400 mb-2"/><span className="text-gray-300">Satellite<br/><span className="text-[10px] text-gray-500 font-normal">Sentinel-1</span></span></div>
            <ArrowRight className="hidden lg:block w-5 h-5 text-gray-700" />
            <div className="flex flex-col items-center bg-gray-900 border border-gray-800 p-4 rounded-lg w-40 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(129,140,248,0.3)] hover:border-indigo-500/50 cursor-default"><Database className="w-6 h-6 text-indigo-400 mb-2"/><span className="text-gray-300">InSAR<br/><span className="text-[10px] text-gray-500 font-normal">Processing</span></span></div>
            <ArrowRight className="hidden lg:block w-5 h-5 text-gray-700" />
            <div className="flex flex-col items-center bg-gray-900 border border-gray-800 p-4 rounded-lg w-40 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:border-orange-500/50 cursor-default"><Navigation className="w-6 h-6 text-orange-400 mb-2"/><span className="text-gray-300">Ground Def.<br/><span className="text-[10px] text-gray-500 font-normal">Vectors</span></span></div>
            <ArrowRight className="hidden lg:block w-5 h-5 text-gray-700" />
            <div className="flex flex-col items-center bg-blue-900/20 border border-blue-900/50 p-4 rounded-lg w-40 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-blue-500/70 cursor-default"><Activity className="w-6 h-6 text-blue-500 mb-2"/><span className="text-gray-300">Risk Model<br/><span className="text-[10px] text-gray-500 font-normal">Machine Learning</span></span></div>
            <ArrowRight className="hidden lg:block w-5 h-5 text-gray-700" />
            <div className="flex flex-col items-center bg-gray-900 border border-gray-800 p-4 rounded-lg w-40 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:border-green-500/50 cursor-default"><MapPin className="w-6 h-6 text-green-400 mb-2"/><span className="text-gray-300">Infra. Analysis<br/><span className="text-[10px] text-gray-500 font-normal">GIS Overlay</span></span></div>
            <ArrowRight className="hidden lg:block w-5 h-5 text-gray-700" />
            <div className="flex flex-col items-center bg-red-900/20 border border-red-900/50 p-4 rounded-lg w-40 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:border-red-500/70 cursor-default"><AlertTriangle className="w-6 h-6 text-red-500 mb-2"/><span className="text-gray-300">Alert<br/><span className="text-[10px] text-gray-500 font-normal">Decision Support</span></span></div>
          </div>
        </div>
      </section>

      {/* WHO USES BHOOMIALERT */}
      <section className="py-16 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white tracking-tight">Who uses BhoomiAlert</h2>
            <p className="text-gray-500 mt-2 text-sm">Empowering stakeholders across the entire disaster management spectrum.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-950 border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500/50 transition-colors">
              <Building className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">District Administration</h3>
              <p className="text-xs text-gray-500">Urban planning and zoning regulations based on structural stability maps.</p>
            </div>
            <div className="bg-gray-950 border border-gray-800 p-6 rounded-xl text-center hover:border-orange-500/50 transition-colors">
              <Activity className="w-10 h-10 text-orange-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Infrastructure Agencies</h3>
              <p className="text-xs text-gray-500">Preventive maintenance of roads, bridges, and subterranean pipelines.</p>
            </div>
            <div className="bg-gray-950 border border-gray-800 p-6 rounded-xl text-center hover:border-red-500/50 transition-colors">
              <ShieldAlert className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Disaster Management</h3>
              <p className="text-xs text-gray-500">Targeted evacuation planning and emergency response resource allocation.</p>
            </div>
            <div className="bg-gray-950 border border-gray-800 p-6 rounded-xl text-center hover:border-indigo-500/50 transition-colors">
              <Eye className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Geospatial Analysts</h3>
              <p className="text-xs text-gray-500">Continuous terrain monitoring and time-series ground deformation analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BHOOMIALERT MATTERS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Why BhoomiAlert Matters</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Shifting from reactive repair to proactive, data-driven prevention.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Traditional Response */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-300 mb-6 flex items-center border-b border-gray-800 pb-3">
                <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm mr-3">1</span>
                Traditional Response
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400"><div className="w-2 h-2 rounded-full bg-gray-600 mr-4"></div>Infrastructure Damage (Visible Cracks)</div>
                <div className="w-0.5 h-6 bg-gray-800 ml-1"></div>
                <div className="flex items-center text-gray-400"><div className="w-2 h-2 rounded-full bg-gray-600 mr-4"></div>Manual Ground Inspection</div>
                <div className="w-0.5 h-6 bg-gray-800 ml-1"></div>
                <div className="flex items-center text-gray-400"><div className="w-2 h-2 rounded-full bg-gray-600 mr-4"></div>Reactive Repair</div>
                <div className="w-0.5 h-6 bg-gray-800 ml-1"></div>
                <div className="flex items-center text-red-400 font-bold bg-red-900/10 p-3 rounded-lg border border-red-900/30"><AlertTriangle className="w-4 h-4 mr-3"/>Massive Economic Loss & Risk to Life</div>
              </div>
            </div>

            {/* BhoomiAlert Flow */}
            <div className="bg-blue-900/5 border border-blue-900/20 rounded-xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center border-b border-blue-900/30 pb-3">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm mr-3">2</span>
                BhoomiAlert Architecture
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-200"><div className="w-2 h-2 rounded-full bg-blue-500 mr-4"></div>Continuous Satellite Observation</div>
                <div className="w-0.5 h-6 bg-blue-900/30 ml-1"></div>
                <div className="flex items-center text-gray-200"><div className="w-2 h-2 rounded-full bg-blue-500 mr-4"></div>Machine Learning Risk Assessment</div>
                <div className="w-0.5 h-6 bg-blue-900/30 ml-1"></div>
                <div className="flex items-center text-gray-200"><div className="w-2 h-2 rounded-full bg-blue-500 mr-4"></div>Priority Infrastructure Classification (2148 Buildings)</div>
                <div className="w-0.5 h-6 bg-blue-900/30 ml-1"></div>
                <div className="flex items-center text-green-400 font-bold bg-green-900/10 p-3 rounded-lg border border-green-900/30"><ShieldAlert className="w-4 h-4 mr-3"/>Preventive Action & Evacuation</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}

