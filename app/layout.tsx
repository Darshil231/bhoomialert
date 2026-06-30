import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Search, Map, ShieldAlert, FileText, Activity, Layers, Info, Server } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BhoomiAlert - AI-Powered Geospatial Infrastructure Risk Intelligence Platform",
  description: "Satellite-Derived Land Deformation Analysis & Machine Learning Risk Assessment Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen flex flex-col`}>
        {/* DEMO MODE BANNER */}
        <div className="bg-blue-600 text-white text-xs font-semibold py-1.5 text-center flex items-center justify-center space-x-2">
          <span className="bg-white text-blue-600 px-1.5 py-0.5 rounded text-[10px] tracking-wider font-bold">PROTOTYPE DEMONSTRATION</span>
          <span>Using representative Sentinel-1 InSAR-derived deformation data for Joshimath.</span>
        </div>

        {/* NAVBAR */}
        <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-[500]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2 group">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-xl tracking-tight text-white">Bhoomi<span className="text-blue-500">Alert</span></span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/dashboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center"><Activity className="w-4 h-4 mr-1.5"/> Dashboard</Link>
                <Link href="/methodology" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center"><Info className="w-4 h-4 mr-1.5"/> Methodology</Link>
                <Link href="/architecture" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center"><Server className="w-4 h-4 mr-1.5"/> Architecture</Link>
                <Link href="/alerts" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center relative"><ShieldAlert className="w-4 h-4 mr-1.5"/> Alerts <span className="absolute -top-1 -right-2 flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span></Link>
                <Link href="/reports" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center"><FileText className="w-4 h-4 mr-1.5"/> Reports</Link>
                <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center">About</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* FOOTER */}
        <footer className="border-t border-gray-800 bg-gray-950 py-10 text-center text-sm text-gray-500 mt-auto">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
            <p className="font-bold text-gray-300 mb-2">Research Prototype<br/>Built for ISRO National Hackathon</p>
            <p className="mb-4">Demonstration using representative satellite-derived geospatial datasets.</p>
            <p className="text-xs text-gray-600 mb-6 max-w-2xl">
              Future deployment may integrate official InSAR processing pipelines, Bhuvan, Sentinel-1 and validated geospatial datasets.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-gray-500 pt-4 border-t border-gray-900 w-full">
              <span className="hover:text-gray-300 transition-colors">Sentinel-1 SAR</span>
              <span className="hover:text-gray-300 transition-colors">InSAR Processing</span>
              <span className="hover:text-gray-300 transition-colors">Python</span>
              <span className="hover:text-gray-300 transition-colors">Random Forest</span>
              <span className="hover:text-gray-300 transition-colors">FastAPI</span>
              <span className="hover:text-gray-300 transition-colors">Next.js</span>
              <span className="hover:text-gray-300 transition-colors">Leaflet</span>
              <span className="hover:text-gray-300 transition-colors">OpenStreetMap</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
