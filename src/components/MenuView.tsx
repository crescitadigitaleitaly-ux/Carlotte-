import React, { useState, useMemo } from 'react';
import { Search, Filter, ShieldCheck, Soup, Wine, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { useLang } from '../LanguageContext';
import { t } from '../translations';

export default function MenuView() {
  const { lang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const [glutenFreeOnly, setGlutenFreeOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems: MenuItem[] = [
    // Antipasti
    {
      id: 'm1',
      name: 'Tartare di filetto di cervo con parmigiano cracker',
      price: 28,
      category: 'antipasti',
      description: 'Raw deer fillet venison tartare hand-chopped, served under a delicate aromatics wood-smoking dome with a parmigiano reggiano cracker.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm2',
      name: 'Velo di seppia ripieno di crudo di gambero rosso',
      price: 27,
      category: 'antipasti',
      description: 'A delicate striped cuttlefish veil filled with sweet raw Oneglia purple red shrimp crudo, infused with citrus elixir and wild sea fennel.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm3',
      name: 'Roche di cavolfiore e parmigiano DOP',
      price: 27,
      category: 'antipasti',
      description: 'A signature research dish where roasted cauliflower is shaped into an elegant rocher shell with toasted hazelnut glaze and black winter truffle (tartufo nero) over smooth parmesan cheese cream.',
      isGlutenFree: true,
      isVegetarian: true,
    },
    {
      id: 'm4',
      name: 'Cuore di capesanta dell\'Atlantico francese',
      price: 27,
      category: 'antipasti',
      description: 'French Atlantic scallop hearts prepared beautifully and enhanced with a savory black bean cream sauce reduction.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm5',
      name: 'Spiedino di capesanta al burro di cacao e panatura al riso venere',
      price: 24,
      category: 'antipasti',
      description: 'Seared scallop skewer glazed with organic cocoa butter and a crunchy black Venere rice crust coating.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm6',
      name: 'Cuore di granchio Atlantico con salsa al pistacchio e la sua bisque',
      price: 26,
      category: 'antipasti',
      description: 'Clean Atlantic crab heart chunks paired with a bright, aromatic green pistachio sauce and its own rich seafood bisque reduction.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm6_beef',
      name: 'Tartare di filetto di manzo su cialda di taralli e sesamo tostato, crema all\'ostrica e la sua crudité',
      price: 24,
      category: 'antipasti',
      description: 'Finely hand-chopped beef fillet tartare served on a crunchy Savona taralli biscuit card with toasted sesame seeds, delicate oyster emulsion cream, and fresh oyster crudité.',
      isGlutenFree: false,
      isVegetarian: false,
    },

    // Primi
    {
      id: 'm7',
      name: 'Risotto Carnaroli DOP della Baraggia con crema di raclette al tartufo nero',
      price: 32,
      category: 'primi',
      description: 'Premium Carnaroli rice from Baraggia mantecato with melted raclette cheese cream and generous shaved black winter truffles.',
      isGlutenFree: true,
      isVegetarian: true,
    },
    {
      id: 'm8',
      name: 'Spago alla crema d\'ostrica e zola con crudité di ostrica e crumble di arancia',
      price: 28,
      category: 'primi',
      description: 'Artisanal square spaghetti tossed in deep oyster flavor extraction cream and premium blue gorgonzola cheese, crowned with raw oyster pieces and citrus arancia crumble.',
      isGlutenFree: false,
      isVegetarian: false,
    },
    {
      id: 'm8_spago_quadro',
      name: 'Spago quadro trafilato al bronzo, con pesto di barbabietola, crema di pecorino romano e cascata di ricotta salata pugliese',
      price: 23,
      category: 'primi',
      description: 'Bronze-drawn square spago pasta tossed in vibrant sweet beet pesto, served on a base of warm Roman pecorino cheese cream, and finished with a cascade of Pugliese salted sheep\'s milk ricotta.',
      isGlutenFree: false,
      isVegetarian: true,
    },

    // Secondi
    {
      id: 'm9',
      name: 'Petto di piccione francese (French Pigeon)',
      price: 32,
      category: 'secondi',
      description: 'Perfectly roasted French pigeon breast accompanied by a sweet and tangy compote made of Savona’s historic chinotto fruit.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm10',
      name: 'Petto d\'anatra (Duck Breast with Vin Brûlé)',
      price: 28,
      category: 'secondi',
      description: 'Slow-cooked tender duck breast drizzled with a rich, aromatic vin brûlé (cooked mulled wine) glaze.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm11',
      name: 'Tiramisu di ricciola e polvere di cacao',
      price: 26,
      category: 'secondi',
      description: 'A masterfully inventive savory seafood tiramisu made of hand-sliced raw amberjack (ricciola) fish layouts dusted with pure, bitter cocoa powder.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm12',
      name: 'Secreto iberico con crema di zucca',
      price: 28,
      category: 'secondi',
      description: 'Highly prized, tender cuts of seared Iberian Secreto pork served over a warm velvet pumpkin cream base.',
      isGlutenFree: true,
      isVegetarian: false,
    },
    {
      id: 'm13',
      name: 'Trancio di branzino all\'amo (Sea Bass)',
      price: 26,
      category: 'secondi',
      description: 'Hook-caught wild sea bass fillet seared crispy skin-on, garnished with local fresh herbs and olive oils.',
      isGlutenFree: true,
      isVegetarian: false,
    },

    // Dolci
    {
      id: 'm14',
      name: 'Cuore di rosa, cioccolato e aceto balsamico',
      price: 12,
      category: 'dolci',
      description: 'An artistic, structured dessert fusing premium dark chocolate hearts, exquisite rose aroma, and aged balsamic vinegar.',
      isGlutenFree: true,
      isVegetarian: true,
    },
    {
      id: 'm15',
      name: 'Brownies al cioccolato fondente e noci pecan',
      price: 12,
      category: 'dolci',
      description: 'Warm dark chocolate brownie squares baked with salted pecan nuts and served with a dusting of cocoa.',
      isGlutenFree: false,
      isVegetarian: true,
    },
    {
      id: 'm16',
      name: 'Semifreddo alle fragole e porto (Strawberry & Port)',
      price: 14,
      category: 'dolci',
      description: 'A special summer Friday treat featuring cold-whipped strawberry cream, fine Port reduction, and flambéed liquid meringue.',
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
            {t.menuActs[lang]}
          </span>
          <span className="text-xs font-bold font-serif italic text-ink-black">{t.savonTerraces[lang]}</span>
        </div>
        <h1 className="font-anton text-5xl sm:text-7xl uppercase text-ink-black leading-[0.85] tracking-tighter mb-4">
          {t.curatedCulinary[lang]}<br />
          <span className="text-accent-vermilion font-serif font-bold italic tracking-tight lowercase block mt-1 sm:mt-2">{t.manifesto[lang]}</span>
        </h1>
        <p className="font-serif text-secondary text-base max-w-2xl leading-relaxed">
          {t.menuDesc[lang]}
        </p>
      </section>

      {/* 2. Interactive scallops break image with organic text */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-cream border-2 border-ink-black shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        <div className="lg:col-span-7 aspect-video relative overflow-hidden h-64 lg:h-96 border-b-2 lg:border-b-0 lg:border-r-2 border-ink-black">
          <img 
            src="/images/food/pasta-oyster.jpg" 
            alt="Savona Harbor Scallops plating"
            className="w-full h-full object-cover grayscale-[10%] hover:scale-105 hover:grayscale-0 transition-all duration-1000 ease-out"
          />
        </div>
        <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex gap-2 text-accent-vermilion font-oswald text-[10px] uppercase tracking-widest font-black items-center">
              <Soup className="w-4 h-4" /> {t.freshCatch[lang]}
            </div>
            <h3 className="font-anton text-3xl uppercase tracking-tight text-ink-black leading-none">
              {t.savonaColdScallops[lang]}
            </h3>
            <p className="font-serif text-secondary text-sm leading-relaxed">
              {t.scallopsDesc[lang]}
            </p>
          </div>
          <div>
            <div className="inline-block bg-surface-tan px-2.5 py-1 font-oswald text-[9px] tracking-widest uppercase font-black text-ink-black border border-ink-black/25">
              {t.sourcedDaily[lang]}
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
              placeholder={t.filterPlaceholder[lang]}
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
              {t.vegetarian[lang]} {vegetarianOnly ? '✓' : ''}
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
              {t.glutenFree[lang]} {glutenFreeOnly ? '✓' : ''}
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
              {cat === 'all' ? t.allSections[lang] : cat}
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
                      {cat === 'antipasti' && t.actI[lang]}
                      {cat === 'primi' && t.actII[lang]}
                      {cat === 'secondi' && t.actIII[lang]}
                      {cat === 'dolci' && t.epilogue[lang]}
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
              {t.noMatchFilter[lang]}
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
              {t.clearFilters[lang]}
            </button>
          </div>
        )}

        {/* Sommelier Flight Invitation Section */}
        <div className="mt-16 bg-surface-tan border-2 border-ink-black p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 max-w-lg">
            <span className="font-oswald text-[10px] uppercase tracking-widest text-accent-vermilion font-bold block">
              {t.curatedCellar[lang]}
            </span>
            <h4 className="font-anton text-xl uppercase tracking-wide text-ink-black flex items-center gap-2">
              <Wine className="w-5 h-5 text-accent-vermilion shrink-0" /> {t.sommelierTerroirFlight[lang]}
            </h4>
            <p className="font-serif text-xs text-secondary leading-relaxed">
              {t.sommelierDesc[lang]}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-anton text-2xl text-ink-black">€45 {t.perCover[lang]}</div>
            <span className="font-oswald text-[9px] text-[#5e5e5e] uppercase tracking-widest font-bold block mb-1">
              {t.addDuringRes[lang]}
            </span>
          </div>
        </div>

      </section>
    </div>
  );
}
