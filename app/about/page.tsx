import Link from "next/link";
import ParticlesBackground from "../components/ParticlesBackground";

export default function AboutPage() {
  return (
    <div className="min-h-screen  py-20 px-6">
      <div className="max-w-4xl mx-auto">
<ParticlesBackground />
        <section className="mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            I'm <span className="text-emerald-500">Thushadh</span>.
          </h1>
          <p className="text-xl leading-relaxed text-zinc-300 max-w-2xl">
            A specialized video editor and motion designer dedicated to 
            transforming raw footage into high-impact visual stories. 
            I bridge the gap between technical precision and creative rhythm.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          <div className="md:col-span-2 p-8 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md rounded-2xl">
            <h3 className="text-white font-semibold mb-2">The Philosophy</h3>
            <p className="text-sm leading-relaxed">
              Editing isn't just about cutting clips; it's about controlling the viewer's 
              heartbeat. From the sharpest transitions to the most subtle color grades, 
              every frame I render is intentional.
            </p>
          </div>
          
          <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md rounded-2xl flex flex-col justify-center">
            <h3 className="text-emerald-400 font-semibold mb-2">Experience</h3>
            <p className="text-3xl font-bold text-white">4+ Years</p>
            <p className="text-xs uppercase tracking-widest mt-1 text-emerald-500/60">Crafting Visuals</p>
          </div>

          <div className="p-8 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md rounded-2xl">
            <h3 className="text-white font-semibold mb-4">Toolkit</h3>
            <div className="flex flex-wrap gap-2">
              {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Blender'].map((tool) => (
                <span key={tool} className="text-xs px-3 py-1 bg-zinc-800/50 text-emerald-400 rounded-full border border-emerald-500/20">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 p-8 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md rounded-2xl flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold mb-1">Collaborate with Thushadh</h3>
              <p className="text-sm">Available for worldwide remote projects.</p>
            </div>
            <Link 
              href="/hire"
              className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-emerald-500 hover:text-white transition-all"
            >
              Hire Me
            </Link>
          </div>
        </div>

        <section className="space-y-6 text-zinc-400">
          <h2 className="text-2xl font-bold text-white">The Journey</h2>
          <p className="leading-relaxed">
            Starting with a passion for gaming montages and visual effects, I’ve evolved 
            into a full-scale digital storyteller. I specialize in high-energy edits, 
            commercial aesthetic videos, and cinematic motion graphics. 
          </p>
          <p className="leading-relaxed">
            When I'm not inside a timeline, I'm exploring new technologies—like this 
            Next.js and Supabase stack—to ensure my creative work is delivered 
            through the best digital experiences possible.
          </p>
        </section>

        <footer className="mt-20 pt-8 border-t border-zinc-800/50">
          <Link href="/" className="text-zinc-500 hover:text-emerald-400 transition-colors">
            ← Back to creations
          </Link>
        </footer>
      </div>
    </div>
  );
}