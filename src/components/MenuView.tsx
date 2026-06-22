import React, { useState, useMemo } from 'react';
import { Search, Filter, ShieldCheck, Soup, Wine, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

export default function MenuView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const [glutenFreeOnly, setGlutenFreeOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems: MenuItem[] = [
    // Antipasti
    {
      id: 'm1',
      name: 'Venison Tartare under Pine Smoke',
      price: 28,
      category: 'antipasti',
      description: 'Ligurian pine needle smoking dome, hand-diced venison loin, cured quail yolk, mountain capers.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm2',
      name: 'Savona Harbor Scallops',
      price: 26,
      category: 'antipasti',
      description: 'Pan-seared hand-dived scallops, white parsnip puree, fermented red apple vinegar, hazelnut crunch.',
      isGlutenFree: false,
      isVegetarian: false,
    },
    {
      id: 'm3',
      name: 'Charred Artichokes & Almond Ricotta',
      price: 22,
      category: 'antipasti',
      description: 'Alba wild crispy artichokes, smooth almond curd cheese, wild thyme oil infusion, lemon zest.',
      isGlutenFree: true,
      isVegetarian: true,
    },

    // Primi
    {
      id: 'm4',
      name: 'Black Winter Truffle Risotto',
      price: 36,
      category: 'primi',
      description: 'Aged Vialone Nano rice mantecato, mountain butter, double extract parmesan bone broth, Norcia truffles.',
      isGlutenFree: true,
      isVegetarian: true,
    },
    {
      id: 'm5',
      name: 'Nettles & Ricotta Ravioloni',
      price: 32,
      category: 'primi',
      description: 'Hand-laminated egg pasta stuffed with young stinging nettles, buffalo milk ricotta, organic sage brown butter.',
      isGlutenFree: false,
      isVegetarian: true,
    },
    {
      id: 'm6',
      name: 'Savona Seafood Tagliolini',
      price: 38,
      category: 'primi',
      description: 'Squid ink ribbons, fresh spiny lobster, sweet cherry tomato reduction, wild coastal fennel leaves.',
      isGlutenFree: false,
      isVegetarian: false,
    },

    // Secondi
    {
      id: 'm7',
      name: 'Ligurian Sea Bass in Salt Crust',
      price: 46,
      category: 'secondi',
      description: 'Baked under high-grade sea salt shell, served tableside with cold emulsified extra virgin olive oil and lemon balm.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm8',
      name: 'Dry-Aged Piedmontese Beef Ribeye',
      price: 52,
      category: 'secondi',
      description: '45-day reserve Piedmontese beef grilled over natural oak wood coals, glazed with reduction of Nebbiolo wine.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm9',
      name: 'Braised Forest Mushrooms & Polenta',
      price: 40,
      category: 'secondi',
      description: 'Slow-simmered chanterelle and porcini mushrooms, stone-ground white maize cream, shavings of aged pecorino.',
      isGlutenFree: true,
      isVegetarian: true,
    },

    // Dolci
    {
      id: 'm10',
      name: 'Smoked Chestnut Semifreddo',
      price: 18,
      category: 'dolci',
      description: 'Cold aerated cream of wild chestnuts, salted dark cacao crumble, wild rosemary honey drizzle.',
      isGlutenFree: true,
      isVegetarian: true,
    },
    {
      id: 'm11',
      name: 'Burnt Honey & Fig Tartlet',
      price: 16,
      category: 'dolci',
      description: 'Crisp pastry shell, caramelized organic woodland raw honey pastry cream, fresh black figs from Savona convent gardens.',
      isGlutenFree: false,
      isVegetarian: true,
    },
    {
      id: 'm12',
      name: 'Ligurian Extra Virgin Olive Oil Gelato',
      price: 14,
      category: 'dolci',
      description: 'Luxurious heavy cream churned with cold-press Tagiasca olives, pinch of hand-harvested Cervia sea salt.',
      isGlutenFree: true,
      isVegetarian: true,
    }
  ];

  const filteredMenuItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Vegetarian filter
      if (vegetarianOnly && !item.isVegetarian) {
        return false;
      }
      // Gluten free filter
      if (glutenFreeOnly && !item.isGlutenFree) {
        return false;
      }
      // Search term
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query))
        );
      }
      return true;
    });
  }, [selectedCategory, vegetarianOnly, glutenFreeOnly, searchQuery]);

  return (
    <div className="space-y-16">
      {/* 1. Header with custom typography */}
      <section className="border-b-2 border-ink-black pb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="font-oswald text-[10px] uppercase tracking-[0.25em] text-accent-vermilion font-bold">
            ACTS I, II, & III
          </span>
          <span className="text-xs font-bold font-serif italic text-ink-black">Savona Terraces</span>
        </div>
        <h1 className="font-anton text-5xl sm:text-7xl uppercase text-ink-black leading-[0.85] tracking-tighter mb-4">
          CURATED CULINARY<br />
          <span className="text-accent-vermilion font-serif font-bold italic tracking-tight lowercase block mt-1 sm:mt-2">manifesto</span>
        </h1>
        <p className="font-serif text-secondary text-base max-w-2xl leading-relaxed">
          Our dishes are developed by Chef Carlo Astengo around the absolute seasonality of the Savona terroir. We cooperate with select mountain producers and local sea pilots to maintain a sustainable, zero-waste cooking program.
        </p>
      </section>

      {/* 2. Interactive scallops break image with organic text */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-cream border-2 border-ink-black shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        <div className="lg:col-span-7 aspect-video relative overflow-hidden h-64 lg:h-96 border-b-2 lg:border-b-0 lg:border-r-2 border-ink-black">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcKlQUVNd47Hs9_ww2tGcoQcXgWguloAzrDS3XAsOPBF169uOlR2-CAzdtt4v5aoldIEczqic3uYzB4J5tVxmE9jHqthCCqhFpWryMOpmqM3tucjmopKJaOAHyUzEMp1CGpsn1DI9BWOo2Ca8K4NsSM2b9CRzXmqL5soMZ9Rc_Nj44eZTYhH8ldEKZ3w3u1v298Ynw7VsvYAMiVvIKej-A0c1eExKeaJcQkdNCu1o_DM6dAJZRp2niNZP40oKMKodt5CTxxpHQgZQ" 
            alt="Savona Harbor Scallops plating" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[10%] hover:scale-105 hover:grayscale-0 transition-all duration-1000 ease-out"
          />
        </div>
        <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex gap-2 text-accent-vermilion font-oswald text-[10px] uppercase tracking-widest font-black items-center">
              <Soup className="w-4 h-4" /> Fresh Catch Highlight
            </div>
            <h3 className="font-anton text-3xl uppercase tracking-tight text-ink-black leading-none">
              SAVONA HARBOR COLD SCALLOPS
            </h3>
            <p className="font-serif text-secondary text-sm leading-relaxed">
              Every morning at 05:00, Carlo monitors the incoming vessels at the Savona quayside. Our premium scallops are preserved alive in cold salt-wells until they are shucked tableside, resulting in an exquisite sweet density contrasted with sour green apple shards.
            </p>
          </div>
          <div>
            <div className="inline-block bg-surface-tan px-2.5 py-1 font-oswald text-[9px] tracking-widest uppercase font-black text-ink-black border border-ink-black/25">
              Sourced daily from captain stefano’s cutter
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search and interactive search controls panel */}
      <section className="bg-surface-cream border-2 border-ink-black p-6 space-y-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          
          {/* Search Input bar */}
          <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
            <input 
              type="text" 
              placeholder="Filter dishes by element or aroma (e.g. truffle, artichoke, cod)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-ink-black py-2.5 pl-11 pr-4 font-oswald text-xs text-ink-black uppercase tracking-wider outline-none placeholder:text-secondary/60 focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion"
            />
          </div>

          {/* Filtering buttons (Gluten-Free, Vegetarian) */}
          <div className="flex flex-wrap gap-2 font-oswald text-[11px] tracking-widest uppercase font-black">
            <button
              onClick={() => setVegetarianOnly(!vegetarianOnly)}
              className={`px-4 py-2.5 border-2 border-ink-black flex items-center gap-1.5 transition-colors cursor-pointer ${
                vegetarianOnly 
                  ? 'bg-ink-black text-white' 
                  : 'bg-white text-ink-black hover:bg-surface-tan'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              Vegetarian {vegetarianOnly ? '✓' : ''}
            </button>
            <button
              onClick={() => setGlutenFreeOnly(!glutenFreeOnly)}
              className={`px-4 py-2.5 border-2 border-ink-black flex items-center gap-1.5 transition-colors cursor-pointer ${
                glutenFreeOnly 
                  ? 'bg-ink-black text-white' 
                  : 'bg-white text-ink-black hover:bg-surface-tan'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Gluten Free {glutenFreeOnly ? '✓' : ''}
            </button>
          </div>

        </div>

        {/* Categorization tabs */}
        <div className="flex flex-wrap gap-1.5 border-t border-ink-black/15 pt-4 font-oswald text-[10px] uppercase tracking-widest font-black">
          {['all', 'antipasti', 'primi', 'secondi', 'dolci'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 border-2 border-ink-black transition-colors cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-[#FF4D00] text-white border-[#FF4D00]' 
                  : 'bg-transparent text-ink-black hover:bg-surface-tan'
              }`}
            >
              {cat === 'all' ? 'All Sections' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Display of Menu Items with dotted leaders */}
      <section className="bg-surface-cream border-2 border-ink-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        
        {filteredMenuItems.length > 0 ? (
          <div className="space-y-16">
            {/* Group filtered menu items by category dynamically */}
            {['antipasti', 'primi', 'secondi', 'dolci'].map((cat) => {
              const catItems = filteredMenuItems.filter(item => item.category === cat);
              if (catItems.length === 0) return null;

              return (
                <div key={cat} className="space-y-8" id={`category-block-${cat}`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b-2 border-ink-black pb-2">
                    <h3 className="font-anton text-2xl uppercase tracking-wider text-accent-vermilion">
                      {cat}
                    </h3>
                    <div className="h-0.5 bg-ink-black/10 flex-grow" />
                    <span className="font-oswald text-xxs font-black text-secondary uppercase tracking-widest">
                      {cat === 'antipasti' && 'Act I'}
                      {cat === 'primi' && 'Act II'}
                      {cat === 'secondi' && 'Act III'}
                      {cat === 'dolci' && 'Epilogue'}
                    </span>
                  </div>

                  {/* List of items in that category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {catItems.map((item) => (
                      <div key={item.id} className="space-y-2 group">
                        
                        {/* Title and price dotted header line */}
                        <div className="flex justify-between items-baseline">
                          <span className="font-anton text-lg uppercase tracking-wide text-ink-black group-hover:text-accent-vermilion transition-colors">
                            {item.name}
                          </span>
                          <span className="menu-leader hidden sm:block" />
                          <span className="font-anton text-lg text-ink-black pl-2 shrink-0">
                            €{item.price}
                          </span>
                        </div>

                        {/* Description */}
                        {item.description && (
                          <p className="font-serif text-secondary text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {/* Badges */}
                        <div className="flex gap-2 pt-1 font-oswald text-[10px] uppercase font-bold tracking-widest">
                          {item.isVegetarian && (
                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200">
                              VEG
                            </span>
                          )}
                          {item.isGlutenFree && (
                            <span className="px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200">
                              GF
                            </span>
                          )}
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 font-oswald space-y-4">
            <Soup className="w-12 h-12 text-secondary mx-auto opacity-40 animate-bounce" />
            <p className="text-secondary text-sm uppercase tracking-widest font-bold">
              No dishes match your specific dietary filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setVegetarianOnly(false);
                setGlutenFreeOnly(false);
                setSearchQuery('');
              }}
              className="text-accent-vermilion hover:text-ink-black transition-colors underline font-semibold text-xs uppercase tracking-wider"
            >
              Clear Filters & Search
            </button>
          </div>
        )}

        {/* Sommelier Flight Invitation Section */}
        <div className="mt-16 bg-surface-tan border-2 border-ink-black p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 max-w-lg">
            <span className="font-oswald text-[10px] uppercase tracking-widest text-accent-vermilion font-bold block">
              Curated Cellar Pairing
            </span>
            <h4 className="font-anton text-xl uppercase tracking-wide text-ink-black flex items-center gap-2">
              <Wine className="w-5 h-5 text-accent-vermilion shrink-0" /> Sommelier Terroir Flight
            </h4>
            <p className="font-serif text-xs text-secondary leading-relaxed">
              Upgrade your narrative with our bespoke Sommelier Terroir Flight. Sourced entirely from small vintages in Genoa and Piedmont. Shaved truffle, sea salt extraction, and dry wood smoked plates are specifically accompanied. 
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-anton text-2xl text-ink-black">€45 / COVER</div>
            <span className="font-oswald text-[9px] text-[#5e5e5e] uppercase tracking-widest font-bold block mb-1">
              Add during reservation check-in
            </span>
          </div>
        </div>

      </section>
    </div>
  );
}
