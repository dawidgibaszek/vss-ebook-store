// src/config/site.ts
export const siteConfig = {
  name: "VSS Ebook Store",
  tagline: "Prestiżowa wiedza w zasięgu ręki",
  description: "Ekskluzywna biblioteka ebooków dla przedsiębiorców i wizjonerów.",
  
  hero: {
    badge: "Nowa Kolekcja 2026",
    title: "Wiedza, która\ndefiniuje przyszłość",
    subtitle: "Porzuć hałas. Skup się na esencji. Wyselekcjonowane ebooki, które pomogą Ci zdominować rynek dotacji i technologii AI.",
    cta: { text: "Przeglądaj Bibliotekę", href: "#katalog" },
    secondaryCta: { text: "O metodzie VSS", href: "#metoda" },
  },
  
  featuredBook: {
    title: "Radar Dotacji 2026",
    author: "Dawid Gibaszek",
    price: "199 PLN",
    description: "Kompletny przewodnik po miliardach z KPO i funduszy regionalnych. Strategia, nie tylko teoria.",
    image: "/cover.jpg",
  },
  
  categories: [
    { name: "Finanse i Dotacje", icon: "Wallet", count: 12 },
    { name: "Sztuczna Inteligencja", icon: "Cpu", count: 8 },
    { name: "Strategia Biznesowa", icon: "TrendingUp", count: 15 },
  ],
  
  benefits: [
    { title: "Editorial Quality", desc: "Każdy ebook to jakość premium, merytoryka bez lania wody." },
    { title: "Immediate Access", desc: "Pobierz i czytaj natychmiast po zakupie na dowolnym urządzeniu." },
    { title: "Exclusive Updates", desc: "Darmowe aktualizacje treści przez 12 miesięcy od zakupu." },
  ],

  footer: {
    copyright: "© 2026 VSS Ebook Store. Wszelkie prawa zastrzeżone.",
    links: [
      { text: "Regulamin", href: "/terms" },
      { text: "Polityka Prywatności", href: "/privacy" },
      { text: "Kontakt", href: "/contact" },
    ]
  }
}
