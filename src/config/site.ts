// src/config/site.ts
export const siteConfig = {
  name: "Głębia",
  tagline: "Manifest Skupienia w Epoce Szumu",
  description: "Kompletny system odzyskiwania suwerenności poznawczej.",
  
  product: {
    title: "Cyfrowa Głębia",
    version: "Wydanie 2.0 (2026)",
    price: "129 PLN",
    oneLiner: "Jak budować systemy pracy głębokiej w świecie nasyconym AI.",
    description: "To nie jest zwykły ebook. To architektoniczny projekt Twojego umysłu. Naucz się projektować życie, w którym koncentracja jest stanem domyślnym, a nie rzadkim wydarzeniem.",
    chapters: [
      { id: "01", title: "Ekonomia Rozproszenia", desc: "Zrozumienie neurologicznego kosztu bycia stale podłączonym." },
      { id: "02", title: "Protokół Suwerenności", desc: "Budowanie osobistego, cyfrowego firewallu." },
      { id: "03", title: "Architektura Deep Work", desc: "Projektowanie otoczenia, które wymusza stan flow." },
      { id: "04", title: "Synergia Człowiek+AI", desc: "Jak korzystać z maszyn, nie tracąc przy tym własnego człowieczeństwa." },
    ],
    features: [
      "140+ stron strategii opartych na dowodach",
      "Szablony rutyn skupienia do druku",
      "Dostęp do zamkniętej społeczności",
      "Kwartalne audyty cyfrowego dobrostanu"
    ]
  },
  
  hero: {
    badge: "Dostępne już teraz",
    title: "Skupienie to nowy\nQuiet Luxury.",
    subtitle: "W świecie, który krzyczy o Twoją uwagę, ostateczną potęgą jest umiejętność zignorowania wszystkiego. Opanuj sztukę pracy głębokiej z podręcznikiem, który zmienia zasady gry.",
    cta: { text: "Zabezpiecz swój egzemplarz", href: "#order" },
    secondaryCta: { text: "Przeczytaj przedmowę", href: "#about" },
  },
  
  about: {
    title: "Dlaczego to? Dlaczego teraz?",
    text: "Średni czas skupienia uwagi spadł do 8 sekund. Stajemy się gatunkiem powierzchownym. 'Cyfrowa Głębia' to antidotum. To synteza neurobiologii, filozofii stoickiej i nowoczesnych systemów produktywności, stworzona dla tych, którzy odmawiają bycia jedynie punktem danych w algorytmie."
  },

  footer: {
    copyright: "© 2026 Głębia Studio. Stworzone dla nielicznych skupionych.",
    links: [
      { text: "Prywatność", href: "/privacy" },
      { text: "Regulamin", href: "/terms" },
      { text: "Kontakt", href: "/contact" },
    ]
  }
}
