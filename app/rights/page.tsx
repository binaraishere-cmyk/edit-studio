import Link from "next/link";

export default function RightsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 selection:bg-blue-500/30 selection:text-blue-200 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Rights & <span className="text-blue-500">Usage</span>
          </h1>
          <p className="text-zinc-500">Last updated: March 2026</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-zinc-100 mb-4 border-l-2 border-blue-500 pl-4">
              Content Ownership
            </h2>
            <p className="leading-relaxed">
              All video edits, motion graphics, and digital assets showcased on this portfolio 
              are the intellectual property of <span className="text-zinc-200 font-medium">Binara Methsith</span> unless 
              explicitly stated otherwise. This includes original compositions, color grading 
              configurations, and custom animations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100 mb-4 border-l-2 border-blue-500 pl-4">
              Usage License
            </h2>
            <p className="leading-relaxed">
              You are granted a limited license to view the materials on this website for personal, 
              non-commercial transitory viewing only. This license does not permit:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-2 text-zinc-400">
              <li>Republishing or redistributing the videos as your own.</li>
              <li>Commercial use of the technical implementations (code) without prior consent.</li>
              <li>Removal of any copyright or proprietary notations from the materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100 mb-4 border-l-2 border-blue-500 pl-4">
              Third-Party Content
            </h2>
            <p className="leading-relaxed text-sm">
              Some projects may contain copyrighted music or footage used under Fair Use for 
              transformative artistic purposes (video editing). Rights to such external 
              elements remain with their respective owners.
            </p>
          </section>
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-800/50">
          <Link 
            href="/" 
            className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            ← Return to HOME
          </Link>
        </footer>
      </div>
    </div>
  );
}