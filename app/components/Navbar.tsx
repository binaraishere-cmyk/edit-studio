'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter hover:text-emerald-400 transition-all">
          EDIT<span className="text-emerald-500">.</span>STUDIO
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-widest uppercase text-zinc-400">
          <Link href="work" className="hover:text-white transition-colors">Work</Link>
          <Link href="about" className="hover:text-white transition-colors">About</Link>
          <Link href="contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="hire" className="bg-white text-black px-6 py-2 rounded-full hover:bg-emerald-400 transition-all active:scale-95">
            Hire Me
          </Link>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`md:hidden absolute w-full bg-black/95 border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'h-64' : 'h-0'}`}>
        <div className="flex flex-col items-center gap-6 py-8 font-bold uppercase tracking-widest">
          <Link href="work" onClick={() => setIsOpen(false)}>Work</Link>
          <Link href="about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}