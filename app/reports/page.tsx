import { FileText, Download, CheckCircle, Calendar, MapPin, Printer } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex justify-between items-end border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Official Reports</h1>
          <p className="text-gray-400 mt-2">Generate and download automated risk assessment reports.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors shadow-lg shadow-blue-900/20">
          <Download className="w-4 h-4 mr-2" /> Generate New Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Report List */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Recent Archives</h3>
          
          {[
            { id: "REP-2026-06", date: "June 2026", active: true },
            { id: "REP-2026-05", date: "May 2026", active: false },
            { id: "REP-2026-04", date: "April 2026", active: false },
            { id: "REP-2026-03", date: "March 2026", active: false },
          ].map(rep => (
            <div key={rep.id} className={`p-4 rounded-lg border cursor-pointer transition-colors ${rep.active ? 'bg-gray-900 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'bg-gray-950 border-gray-800 hover:bg-gray-900'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-sm text-gray-300">{rep.id}</span>
                {rep.active && <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>}
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="w-3 h-3 mr-1" /> {rep.date} Monthly Assessment
              </div>
            </div>
          ))}
        </div>

        {/* Right Col: PDF Preview */}
        <div className="lg:col-span-2">
           <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[700px]">
             
             {/* PDF Toolbar */}
             <div className="bg-gray-950 border-b border-gray-800 p-3 flex justify-between items-center text-gray-400 text-sm">
               <div className="flex items-center space-x-4">
                 <span className="font-mono">Joshimath_Risk_Assessment_June2026.pdf</span>
                 <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">Page 1 / 4</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Printer className="w-4 h-4 cursor-pointer hover:text-white" />
                 <Download className="w-4 h-4 cursor-pointer hover:text-white" />
               </div>
             </div>

             {/* Document Preview Canvas */}
             <div className="flex-1 bg-gray-800 p-8 overflow-y-auto flex justify-center">
                
                {/* The "Paper" */}
                <div className="bg-white w-full max-w-2xl min-h-full shadow-lg p-10 text-gray-900 font-serif">
                  
                  {/* Letterhead */}
                  <div className="border-b-2 border-blue-900 pb-6 mb-8 flex justify-between items-end">
                    <div>
                      <h1 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">BhoomiAlert</h1>
                      <div className="text-sm font-sans text-gray-600 font-bold tracking-widest mt-1">Geospatial Intelligence Report</div>
                    </div>
                    <div className="text-right text-xs font-sans text-gray-500">
                      <div>Report ID: REP-2026-06</div>
                      <div>Date: 12 June 2026</div>
                      <div>Classification: OFFICIAL USE</div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Executive Summary</h2>
                      <p className="text-sm leading-relaxed">
                        This document presents the automated risk assessment for the Joshimath region, derived from Sentinel-1 Interferometric Synthetic Aperture Radar (InSAR) observations. The Random Forest risk engine indicates a <strong>CRITICAL</strong> state of ground deformation in Ward 1 and Ward 3, necessitating immediate structural inspection of critical infrastructure.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 font-sans">
                      <div className="bg-gray-100 p-4 border-l-4 border-red-600">
                        <div className="text-xs text-gray-500 font-bold uppercase">Max Deformation</div>
                        <div className="text-2xl font-black text-red-700">79 mm/year</div>
                      </div>
                      <div className="bg-gray-100 p-4 border-l-4 border-blue-600">
                        <div className="text-xs text-gray-500 font-bold uppercase">Confidence Score</div>
                        <div className="text-2xl font-black text-blue-700">96.2%</div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Infrastructure Impact Matrix</h2>
                      <table className="w-full text-sm text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-2">Asset Type</th>
                            <th className="border border-gray-300 p-2">Total Exposed</th>
                            <th className="border border-gray-300 p-2">Critical Risk</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Residential Buildings</td>
                            <td className="border border-gray-300 p-2">2,148</td>
                            <td className="border border-gray-300 p-2 text-red-600 font-bold">420</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Hospitals</td>
                            <td className="border border-gray-300 p-2">2</td>
                            <td className="border border-gray-300 p-2 text-red-600 font-bold">1</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-semibold">Schools</td>
                            <td className="border border-gray-300 p-2">5</td>
                            <td className="border border-gray-300 p-2 text-red-600 font-bold">2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="pt-8">
                       <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Model Verification (XAI)</h2>
                       <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
                         <li><strong>Ground Movement (42%):</strong> Primary driver. High velocity line-of-sight displacement.</li>
                         <li><strong>Terrain (31%):</strong> Steep slope angles (&gt;35 degrees) accelerating risk.</li>
                         <li><strong>Infrastructure (17%):</strong> High density of non-engineered structures.</li>
                       </ul>
                    </div>

                  </div>

                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
