'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HirePage() {
  const [copied, setCopied] = useState(false)
  const discordId = "2tggaming_54308"

  const copyDiscord = () => {
    navigator.clipboard.writeText(discordId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation / Back Section */}
        <div className="flex justify-between items-end border-b border-white/5 pb-12 mb-12">
          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">
              HIRE<span className="text-emerald-500">.</span>ME
            </h1>
            <p className="text-zinc-400 text-sm font-bold tracking-[0.2em] uppercase">
              Available for high-end video editing
            </p>
          </div>

          <Link 
            href="/" 
            className="text-xs font-black tracking-[0.3em] uppercase text-zinc-500 hover:text-emerald-400 transition-all pb-2 group flex items-center gap-2"
          >
            <span className="text-emerald-500 group-hover:-translate-x-1 transition-transform">←</span> 
            Home
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Discord Card */}
          <div className="bg-emerald-500/5 border border-emerald-500/10 p-10 backdrop-blur-xl hover:bg-emerald-500/10 transition-all group">
            <h2 className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-8">Primary Contact</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-black shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  D
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Discord ID</p>
                  <p className="text-2xl font-black tracking-tight group-hover:text-emerald-400 transition-colors">{discordId}</p>
                </div>
              </div>
              
              <button 
                onClick={copyDiscord}
                className="w-full bg-white text-black py-4 font-black tracking-widest uppercase text-sm hover:bg-emerald-500 hover:text-white transition-all active:scale-95 shadow-lg"
              >
                {copied ? 'Copied!' : 'Copy Discord ID'}
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-8">
              <p className="text-zinc-300 leading-relaxed max-w-sm">
                I specialize in high-retention edits. Whether it's gaming content or cinematic shorts, my workflow is optimized for speed and quality.
              </p>
              
              <div className="flex gap-12">
                <div>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Status</p>
                  <p className="font-bold text-emerald-500 uppercase tracking-tighter shadow-emerald-500/20">Ready to Edit</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Response</p>
                  <p className="font-bold uppercase tracking-tighter">Under 24h</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4 italic">Social Connectivity</p>
                <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}