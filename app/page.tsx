import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import { prisma } from './lib/prisma'
import Link from 'next/link'

export default async function Home() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />

      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-20">
        <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[9px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 animate-pulse">
          Available for Bookings 2026
        </div>
        
        <h1 className="text-[15vw] md:text-[12rem] font-black tracking-tighter leading-[0.8] text-center">
          VISUAL<br />POETRY
        </h1>
        
        <p className="max-w-md md:max-w-2xl text-zinc-500 text-base md:text-xl font-medium leading-relaxed text-center mt-8 px-4">
          Transforming raw footage into high-octane cinematic experiences. 
          Specializing in music videos and narrative storytelling.
        </p>

        <div className="mt-10 w-full flex flex-col sm:flex-row justify-center gap-4 px-6">
          <a href="#work" className="w-full sm:w-auto h-14 sm:h-16 px-10 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-lg hover:scale-105 transition-all">
            View Work
          </a>
          <button className="w-full sm:w-auto h-14 sm:h-16 px-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-lg hover:bg-zinc-800 transition-all">
            Contact
          </button>
        </div>
      </section>

      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-20 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Archive</h2>
            <p className="text-zinc-500 mt-2">Selected works 2024 — 2026</p>
          </div>
          <div className="text-zinc-500 font-mono text-sm tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
            COUNT: {projects.length.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group relative flex flex-col">
              <div className="relative aspect-video bg-zinc-900 rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-10" />
                
                <div className="absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-1000">
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={project.title} className="object-cover w-full h-full" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl opacity-10">🎞️</div>
                  )}
                </div>

                <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end">
                  <span className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">{project.title}</h3>
                  <a 
                    href={project.videoUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center w-full sm:w-max gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-emerald-400 transition-all"
                  >
                    Play Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center px-6">
        <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase">
          Designed for Visual Excellence • 2026<br />
          by Binara Methsith<br />
          <Link className="text-emerald-400 m-5 m-3 hover:underline" href="/rights">
            all rights reserved
          </Link>
        </p>
      </footer>
    </main>
  )
}