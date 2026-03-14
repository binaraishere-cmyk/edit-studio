import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import { prisma } from './lib/prisma'
import Link from 'next/link'

type Project = {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnail: string | null;
}

export default async function Home() {
  let projects: Project[] = [];
  try {
    const data = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    if (data) projects = data as Project[];
  } catch (error) {
    console.error("Database connection check:", error);
  }

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      
      <ParticlesBackground />
      <Navbar />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20">
        <div className="mb-10 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-bold tracking-[0.3em] uppercase animate-pulse">
          Available for Bookings 2026
        </div>
        
        <h1 className="relative group text-[18vw] md:text-[13rem] font-[1000] tracking-tighter leading-[0.75] text-center select-none cursor-default uppercase">
          <span className="relative z-10 block text-white transition-transform duration-700 group-hover:-translate-y-3">
            VISUAL
          </span>
          
          <span className="relative block text-transparent transition-all duration-700 group-hover:translate-y-3" 
                style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)' }}>
            POETRY
            
            <span className="absolute inset-0 text-emerald-500 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
              POETRY
            </span>
          </span>
        </h1>
        
        <p className="max-w-md md:max-w-2xl text-zinc-500 text-sm md:text-lg font-medium leading-relaxed text-center mt-14 px-4 uppercase tracking-[0.25em]">
          "Transforming <span className="text-white">raw footage</span> into <span className="text-emerald-500">high-octane</span> cinematic experiences."
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <a href="#work" className="h-16 px-12 rounded-full bg-emerald-500 text-black flex items-center justify-center font-black text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] active:scale-95">
            View Work
          </a>

          <Link href="/contact" className="h-16 px-12 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 flex items-center justify-center font-black text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all active:scale-95">
            Contacts
          </Link>
        </div>
      </section>

      <section id="work" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-24 gap-6">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">Selected Works</h2>
          <div className="text-zinc-500 font-mono text-xs tracking-widest bg-white/5 px-6 py-3 rounded-full border border-white/5 uppercase">
            Records: {projects.length.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={project.id} className="group relative flex flex-col">
                <div className="relative aspect-video bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-emerald-500/40 transition-all duration-700">
                  <div className="absolute inset-0 z-0">
                    {project.thumbnail ? (
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl opacity-5 font-black italic">VP</div>
                    )}
                  </div>

                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <a 
                      href={project.videoUrl} 
                      target="_blank" 
                      className="bg-white text-black px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-500 transition-colors"
                    >
                      Play Project
                    </a>
                  </div>

                  <div className="absolute top-8 left-8 z-20">
                    <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="mt-10 flex justify-between items-start px-2">
                  <h3 className="text-4xl font-black uppercase tracking-tighter group-hover:text-emerald-500 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <span className="text-zinc-900 font-black text-8xl italic leading-none select-none group-hover:text-emerald-500/10 transition-colors duration-700">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-40 border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center bg-white/[0.01]">
              <p className="font-mono text-[10px] tracking-[0.8em] uppercase text-zinc-700">
                Awaiting Data Stream...
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 text-center px-6">
        <div className="text-emerald-500 font-black text-4xl mb-12 tracking-tighter italic">VP.</div>
        <p className="text-zinc-600 text-[10px] tracking-[0.6em] uppercase leading-loose">
          Visual Poetry Studio • 2026<br />
          Built by Binara Methsith<br />
          <Link href="/rights" className="text-emerald-500/40 hover:text-emerald-500 transition-colors mt-8 inline-block tracking-widest uppercase text-[9px]">
            All Rights Reserved
          </Link>
        </p>
      </footer>
    </main>
  )
}