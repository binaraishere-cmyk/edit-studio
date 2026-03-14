'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const discordId = "2tggaming_54308"

  const copyDiscord = () => {
    navigator.clipboard.writeText(discordId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]/50 text-zinc-400 py-20 px-6 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">

        <section className="mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Get in <span className="text-emerald-500">Touch</span>.
          </h1>
          <p className="text-xl leading-relaxed text-zinc-300 max-w-2xl">
            Ready to start your next project? Reach out through any of the platforms 
            below and let's create something high-impact together.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {/* Discord Card */}
          <div className="p-8 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md rounded-2xl flex flex-col justify-between group">
            <div>
              <h3 className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">Discord</h3>
              <p className="text-sm text-zinc-500 mb-8 font-mono bg-black/30 p-3 rounded-lg border border-white/5">
                {discordId}
              </p>
            </div>
            <button 
              onClick={copyDiscord}
              className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                copied 
                ? 'bg-emerald-500 text-white' 
                : 'bg-white text-black hover:bg-emerald-500 hover:text-white'
              }`}
            >
              {copied ? 'Copied Successfully!' : 'Copy Discord ID'}
            </button>
          </div>

          {/* Email Card */}
          <div className="p-8 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">Email</h3>
              <p className="text-sm text-zinc-500 mb-8">Direct inquiries and formal proposals</p>
            </div>
            <Link 
              href="mailto:contact@thushadh.com"
              className="w-full py-4 bg-zinc-800 text-white text-center rounded-xl font-bold hover:bg-emerald-500 transition-all active:scale-95 flex items-center justify-center"
            >
              Send an Email
            </Link>
          </div>
        </div>

        {/* Availability Banner */}
        <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-md rounded-2xl flex items-center gap-4">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <p className="text-sm font-medium text-emerald-400 uppercase tracking-widest">
            Currently accepting new commissions
          </p>
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-800/50">
          <Link href="/" className="text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
        </footer>
      </div>
    </div>
  )
}