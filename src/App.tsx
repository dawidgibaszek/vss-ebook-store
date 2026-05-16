import { siteConfig } from './config/site';

const App = () => {
  return (
    <div className="min-h-screen grain">
      {/* Navigation */}
      <nav className="border-b border-black/5 py-6 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <span className="text-2xl font-bold serif tracking-tight">{siteConfig.name}</span>
        <div className="space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#katalog" className="hover:text-orange-600 transition-colors">Katalog</a>
          <a href="#metoda" className="hover:text-orange-600 transition-colors">O nas</a>
          <button className="bg-black text-white px-6 py-2 hover:bg-orange-600 transition-all duration-300">Koszyk (0)</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-8 max-w-7xl mx-auto text-center md:text-left md:grid md:grid-cols-2 md:gap-12 items-center">
        <div>
          <span className="inline-block border border-orange-500 text-orange-600 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            {siteConfig.hero.badge}
          </span>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.hero.cta.href} className="bg-black text-white text-center px-8 py-4 font-bold text-lg hover:bg-orange-600 transition-all">
              {siteConfig.hero.cta.text}
            </a>
            <a href={siteConfig.hero.secondaryCta.href} className="border border-black text-center px-8 py-4 font-bold text-lg hover:bg-black hover:text-white transition-all">
              {siteConfig.hero.secondaryCta.text}
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-0 relative group">
          <div className="absolute -inset-4 bg-orange-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative bg-white p-8 shadow-2xl border border-black/5 rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden border border-black/10">
                <span className="text-gray-400 serif italic">Okładka Ebooka</span>
             </div>
             <div className="mt-6">
                <h3 className="text-2xl font-bold">{siteConfig.featuredBook.title}</h3>
                <p className="text-orange-600 font-bold text-xl mt-2">{siteConfig.featuredBook.price}</p>
             </div>
          </div>
        </div>
      </header>

      {/* Features/Benefits */}
      <section className="bg-black text-white py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          {siteConfig.benefits.map((benefit, i) => (
            <div key={i} className="border-t border-white/20 pt-8">
              <span className="text-orange-500 text-sm font-bold">0{i+1}</span>
              <h3 className="text-3xl mt-4 mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="katalog" className="py-24 px-8 max-w-7xl mx-auto text-center">
         <h2 className="text-5xl mb-16">Wybierz swoją ścieżkę</h2>
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.categories.map((cat, i) => (
              <div key={i} className="group cursor-pointer border border-black/5 p-12 hover:border-orange-500 transition-colors bg-white">
                <h4 className="text-2xl font-bold group-hover:text-orange-600 transition-colors">{cat.name}</h4>
                <p className="text-gray-400 mt-4 font-medium uppercase tracking-tighter">{cat.count} publikacji</p>
              </div>
            ))}
         </div>
      </section>

      <footer className="border-t border-black/5 py-12 px-8 text-center text-gray-500 text-sm">
        <p>{siteConfig.footer.copyright}</p>
      </footer>
    </div>
  );
};

export default App;
