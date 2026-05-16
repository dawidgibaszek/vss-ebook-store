import { siteConfig } from './config/site';

const App = () => {
  return (
    <div className="min-h-screen grain selection:bg-accent selection:text-bg">
      {/* Navigation */}
      <nav className="py-8 px-8 md:px-16 flex justify-between items-center border-b border-white/5 sticky top-0 z-40 bg-bg/90 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-full animate-pulse"></div>
          <span className="text-xl font-bold tracking-tighter serif">{siteConfig.name}</span>
        </div>
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-semibold opacity-60">
          <a href="#about" className="hover:text-accent transition-colors">Manifest</a>
          <a href="#contents" className="hover:text-accent transition-colors">Treść</a>
          <a href="#order" className="hover:text-accent transition-colors">Zamów</a>
        </div>
        <button className="text-[10px] uppercase tracking-[0.2em] font-bold border border-white/20 px-6 py-2 hover:bg-fg hover:text-bg transition-all">
          Koszyk (0)
        </button>
      </nav>

      <main className="max-w-7xl mx-auto">
        {/* Hero */}
        <section className="pt-32 pb-24 px-8 md:px-16 text-center md:text-left grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {siteConfig.hero.badge}
            </span>
            <h1 className="text-7xl md:text-[120px] font-black leading-[0.9] mb-10 text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {siteConfig.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-12 max-w-md opacity-80">
              {siteConfig.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={siteConfig.hero.cta.href} className="bg-accent text-bg px-10 py-5 font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform text-center">
                {siteConfig.hero.cta.text}
              </a>
              <a href={siteConfig.hero.secondaryCta.href} className="border border-white/20 px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all text-center">
                {siteConfig.hero.secondaryCta.text}
              </a>
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="absolute -inset-20 bg-accent/10 rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative aspect-[3/4] bg-dark-surface border border-white/10 p-12 shadow-2xl transform hover:rotate-y-12 transition-transform duration-700 ease-out flex flex-col justify-between overflow-hidden">
                <div className="border-t border-accent w-12 pt-4">
                  <span className="text-accent serif italic text-lg">{siteConfig.product.version}</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-5xl font-black leading-tight">{siteConfig.product.title}</h2>
                  <p className="text-sm opacity-40 uppercase tracking-[0.2em]">{siteConfig.product.oneLiner}</p>
                </div>
                <div className="absolute top-0 right-0 p-8">
                  <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center opacity-20">
                     <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Manifesto / About */}
        <section id="about" className="py-32 px-8 md:px-16 border-y border-white/5">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl mb-12">{siteConfig.about.title}</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-muted font-light italic">
              "{siteConfig.about.text}"
            </p>
          </div>
        </section>

        {/* Contents */}
        <section id="contents" className="py-32 px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
               <h2 className="text-5xl mb-16 underline decoration-accent underline-offset-8">Spis Treści</h2>
               <div className="space-y-12">
                  {siteConfig.product.chapters.map((chapter) => (
                    <div key={chapter.id} className="group cursor-default">
                      <div className="flex items-baseline gap-6 mb-2">
                        <span className="text-accent text-sm font-mono opacity-60">{chapter.id}</span>
                        <h3 className="text-3xl group-hover:text-accent transition-colors">{chapter.title}</h3>
                      </div>
                      <p className="pl-12 text-muted opacity-60 leading-relaxed">{chapter.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-dark-surface p-12 md:p-20 flex flex-col justify-center border border-white/5">
               <h3 className="text-3xl mb-8">Co otrzymujesz</h3>
               <ul className="space-y-6">
                  {siteConfig.product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-muted">
                      <div className="w-1.5 h-1.5 bg-accent"></div>
                      <span className="text-lg font-medium">{feature}</span>
                    </li>
                  ))}
               </ul>
               <div className="mt-16 pt-12 border-t border-white/10">
                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-5xl font-black">{siteConfig.product.price}</span>
                    <span className="text-sm opacity-40 line-through">199 PLN</span>
                  </div>
                  <button id="order" className="w-full bg-fg text-bg py-6 font-black text-sm uppercase tracking-[0.3em] hover:bg-accent hover:text-bg transition-colors">
                    Kup Podręcznik
                  </button>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 px-8 md:px-16 border-t border-white/5 bg-dark-surface/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 bg-accent/20 rounded-full"></div>
             <span className="text-sm font-bold opacity-60">{siteConfig.name} Studio</span>
          </div>
          <div className="flex gap-12">
            {siteConfig.footer.links.map((link) => (
              <a key={link.text} href={link.href} className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                {link.text}
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-20">{siteConfig.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
