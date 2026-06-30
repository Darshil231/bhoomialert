import { Target, Eye, Code, Activity, Database, Clock, ArrowRight, ShieldAlert, Cpu, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Project Overview</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive documentation of the BhoomiAlert mission, technology stack, and operational methodology.</p>
      </div>

      {/* Grid: Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4"></div>
          <Target className="w-8 h-8 text-blue-400 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            To provide national disaster management authorities with proactive, satellite-derived geospatial intelligence, shifting the paradigm of infrastructure protection from reactive repair to data-driven prevention.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full -mr-4 -mt-4"></div>
          <Eye className="w-8 h-8 text-indigo-400 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            A resilient future where continuous remote sensing and machine learning algorithms work autonomously to safeguard critical infrastructure and human life in geologically fragile regions.
          </p>
        </div>
      </div>

      {/* Methodology Visual Flow */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Operational Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="bg-gray-950 border border-gray-800 p-5 rounded-lg flex flex-col items-center text-center relative group">
            <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-400 border border-blue-500/30">1</div>
            <h3 className="text-white font-bold mb-2">Satellite Data</h3>
            <p className="text-xs text-gray-500">Sentinel-1 SAR imagery collection over target geographic zones.</p>
            <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-700 hidden md:block" />
          </div>
          
          <div className="bg-gray-950 border border-gray-800 p-5 rounded-lg flex flex-col items-center text-center relative group">
            <div className="w-12 h-12 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-400 border border-indigo-500/30">2</div>
            <h3 className="text-white font-bold mb-2">InSAR Processing</h3>
            <p className="text-xs text-gray-500">Interferometric extraction of millimeter-level ground deformation vectors.</p>
            <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-700 hidden md:block" />
          </div>
          
          <div className="bg-gray-950 border border-gray-800 p-5 rounded-lg flex flex-col items-center text-center relative group">
            <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-400 border border-green-500/30">3</div>
            <h3 className="text-white font-bold mb-2">GIS Overlay</h3>
            <p className="text-xs text-gray-500">Mapping terrain slopes, water tables, and critical infrastructure footprints.</p>
            <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-700 hidden md:block" />
          </div>
          
          <div className="bg-blue-900/10 border border-blue-900/50 p-5 rounded-lg flex flex-col items-center text-center relative group">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-900/50">4</div>
            <h3 className="text-white font-bold mb-2">Machine Learning</h3>
            <p className="text-xs text-gray-400">Random Forest risk engine generating priority classifications and confidence scores.</p>
            <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-700 hidden md:block" />
          </div>
          
          <div className="bg-gray-950 border border-gray-800 p-5 rounded-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-900/30 rounded-full flex items-center justify-center mb-4 text-orange-400 border border-orange-500/30">5</div>
            <h3 className="text-white font-bold mb-2">Dashboard</h3>
            <p className="text-xs text-gray-500">Real-time alerts, visual clustering, and automated report generation.</p>
          </div>
          
        </div>
      </div>

      {/* Technology & Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-lg">
          <Code className="w-8 h-8 text-green-400 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-6">Core Technology</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="text-gray-300">Frontend</span>
              <span className="text-gray-500 font-mono text-sm">Next.js 16 (React)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="text-gray-300">Backend API</span>
              <span className="text-gray-500 font-mono text-sm">Python FastAPI</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="text-gray-300">Machine Learning</span>
              <span className="text-gray-500 font-mono text-sm">Scikit-Learn (Random Forest)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="text-gray-300">Geospatial Vis.</span>
              <span className="text-gray-500 font-mono text-sm">Leaflet / OpenStreetMap</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-lg">
          <ShieldAlert className="w-8 h-8 text-orange-400 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-6">Real-World Impact</h2>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Prioritized Evacuations:</strong> Enables NDMA to identify structural collapse risks weeks before visible surface damage.</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Economic Preservation:</strong> Guides preventive reinforcement of bridges, hospitals, and water pipelines.</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Resource Allocation:</strong> Provides irrefutable, data-driven evidence for directing disaster relief funding.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-lg">
        <Clock className="w-8 h-8 text-purple-400 mb-6" />
        <h2 className="text-2xl font-bold text-white mb-6">Future Integration Scope</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['NISAR Mission Data', 'RISAT Integration', 'ISRO Bhuvan Portal', 'MOSDAC Weather Feeds', 'Drone LiDAR Surveys', 'Ground IoT Sensors', 'Pan-India Deployment', 'Mobile Field App'].map(scope => (
            <div key={scope} className="bg-gray-950 border border-gray-800 p-3 rounded text-sm text-center text-gray-300 hover:border-purple-500/50 transition-colors">
              {scope}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
