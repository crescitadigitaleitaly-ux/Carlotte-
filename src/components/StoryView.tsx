import React, { useState } from 'react';
import { Sparkles, Calendar, BookOpen, Quote } from 'lucide-react';
import { useLang } from '../LanguageContext';
import { t } from '../translations';

export default function StoryView() {
  const { lang } = useLang();
  const [selectedEra, setSelectedEra] = useState<'2018' | '2021'>('2021');

  const timelineEvents = {
    '2018': {
      title: t.boselliTitle[lang],
      subtitle: t.boselliSubtitle[lang],
      image: '/images/interior/dining-room-painting.jpg',
      narrative: t.boselliNarrative[lang],
      stats: t.boselliStats[lang]
    },
    '2021': {
      title: t.palazzoTitle[lang],
      subtitle: t.palazzoSubtitle[lang],
      image: '/images/interior/dining-room-overview.jpg',
      narrative: t.palazzoNarrative[lang],
      stats: t.palazzoStats[lang]
    }
  };

  return (
    <div className="space-y-16">
      {/* 1. Header block */}
      <section className="border-b-2 border-ink-black pb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="font-oswald text-[10px] uppercase tracking-[0.25em] text-accent-vermilion font-bold">
            {t.bloodlineHeritage[lang]}
          </span>
          <span className="text-xs font-bold font-serif italic text-ink-black">{t.ligurianLineage[lang]}</span>
        </div>
        <h1 className="font-anton text-5xl sm:text-7xl uppercase text-ink-black leading-[0.85] tracking-tighter mb-4">
          {t.chefCarlo[lang]}<br />
          <span className="text-accent-vermilion font-serif font-bold italic tracking-tight lowercase block mt-1 sm:mt-2">astengo</span>
        </h1>
        <p className="font-serif text-secondary text-base max-w-2xl leading-relaxed">
          {t.storyDesc[lang]}
        </p>
      </section>

      {/* 2. Chef Profile Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="chef-profile-segment">
        
        {/* Chef Portrait Image (Left Column) */}
        <div className="lg:col-span-5 relative group border-2 border-ink-black bg-surface-cream p-4 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
          <div className="aspect-[4/5] overflow-hidden border-2 border-ink-black">
            <img 
              src="/images/interior/brick-wall-table.jpg"
              alt="Chef Carlo Astengo's intimate dining setting"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="mt-4 font-oswald text-center">
            <span className="font-anton uppercase text-lg text-ink-black block">Carlo Astengo</span>
            <span className="text-[10px] uppercase tracking-widest text-accent-vermilion font-black">{t.foundingCustodian[lang]}</span>
          </div>
        </div>

        {/* Narrative & Quote (Right Column) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Quote Panel */}
          <div className="bg-[#F8F5EE] border-l-4 border-accent-vermilion p-6 text-ink-black font-serif text-lg relative border border-y-2 border-r-2 border-ink-black">
            <Quote className="absolute top-2 right-4 w-10 h-10 text-accent-vermilion/10 stroke-[2px]" />
            <p className="leading-relaxed relative z-10 font-bold italic">
              {t.chefQuote[lang]}
            </p>
          </div>

          <div className="font-serif text-secondary space-y-4 text-base leading-relaxed">
            <p>
              {t.chefBio1[lang]}
            </p>
            <p>
              {t.chefBio2[lang]}
            </p>
          </div>

          <div className="border-t border-ink-black/15 pt-6 grid grid-cols-2 gap-6 font-oswald text-xs">
            <div>
              <span className="text-ink-black font-anton text-lg block uppercase">{t.savonaBorn[lang]}</span>
              <span className="text-[10px] text-secondary tracking-wider font-extrabold uppercase">{t.rootedSea[lang]}</span>
            </div>
            <div>
              <span className="text-accent-vermilion font-anton text-lg block uppercase">{t.accountantBg[lang]}</span>
              <span className="text-[10px] text-secondary tracking-wider font-extrabold uppercase">{t.autodidact[lang]}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Grandfather Heritage connection */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface-cream border-2 border-ink-black p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        
        <div className="space-y-6">
          <BookOpen className="w-8 h-8 text-accent-vermilion" />
          <h2 className="font-anton text-3xl uppercase tracking-tight leading-none text-ink-black">
            {t.grandfatherTitle[lang]}
          </h2>
          <p className="font-serif text-secondary text-sm leading-relaxed">
            {t.grandfatherDesc[lang]}
          </p>
          <div className="p-4 bg-surface-tan border border-ink-black/20 font-serif text-xs italic text-ink-black/80">
            {t.grandfatherQuote[lang]}
          </div>
        </div>

        {/* Vintage Portrait of grandfather */}
        <div className="relative aspect-video sm:aspect-square bg-white border-2 border-ink-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <img 
            src="/images/interior/saletta-francese.jpg"
            alt="La Nostra Saletta Francese - the heritage dining room"
            className="w-full h-full object-cover grayscale brightness-95"
          />
          <div className="absolute bottom-4 left-4 bg-ink-black text-white px-2.5 py-1 font-oswald text-[9px] uppercase tracking-widest font-black border border-white/20">
            {t.vigevanoPatriarch[lang]}
          </div>
        </div>

      </section>

      {/* 4. Interactive Timeline Segment (Boselli Palace 2018 vs Palazzo Santa Chiara 2021) */}
      <section className="space-y-6">
        <div className="border-b-2 border-ink-black pb-4 flex flex-col sm:flex-row justify-between items-baseline gap-4">
          <div>
            <span className="font-oswald text-xs uppercase tracking-[0.2em] text-accent-vermilion font-bold block mb-1">
              {t.dualPeriod[lang]}
            </span>
            <h2 className="font-anton text-3xl uppercase tracking-tight text-ink-black">
              {t.chronicles[lang]}
            </h2>
          </div>
          
          {/* ERA Selector buttons */}
          <div className="flex gap-2 font-oswald font-black text-[10px] uppercase tracking-widest">
            <button
              onClick={() => setSelectedEra('2018')}
              className={`px-4 py-2 border-2 border-ink-black transition-all cursor-pointer ${
                selectedEra === '2018' 
                  ? 'bg-ink-black text-white' 
                  : 'bg-white text-ink-black hover:bg-surface-tan'
              }`}
            >
              {t.boselliPalace[lang]}
            </button>
            <button
              onClick={() => setSelectedEra('2021')}
              className={`px-4 py-2 border-2 border-ink-black transition-all cursor-pointer ${
                selectedEra === '2021' 
                  ? 'bg-ink-black text-white' 
                  : 'bg-white text-ink-black hover:bg-surface-tan'
              }`}
            >
              {t.santaChiaraConvent[lang]}
            </button>
          </div>
        </div>

        {/* Dynamic Timeline Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-surface-cream border-2 border-ink-black p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
          
          {/* Era Image */}
          <div className="lg:col-span-5 relative aspect-video lg:aspect-auto border-2 border-ink-black overflow-hidden bg-white group min-h-[300px]">
            <img 
              src={timelineEvents[selectedEra].image} 
              alt={timelineEvents[selectedEra].title} 

              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute top-4 left-4 bg-accent-vermilion text-white font-anton text-lg px-2.5 py-1 uppercase tracking-widest border border-ink-black">
              {selectedEra}
            </div>
          </div>

          {/* Era narrative info */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-6">
            <div className="space-y-4">
              <span className="font-oswald text-[11px] uppercase tracking-widest text-accent-vermilion font-black flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-vermilion" /> {timelineEvents[selectedEra].subtitle}
              </span>
              <h3 className="font-anton text-4xl uppercase tracking-tight text-ink-black">
                {timelineEvents[selectedEra].title}
              </h3>
              <p className="font-serif text-secondary text-base leading-relaxed">
                {timelineEvents[selectedEra].narrative}
              </p>
            </div>

            {/* Metrics indicator */}
            <div className="border-t border-ink-black/10 pt-4 font-oswald text-[10px] uppercase tracking-wider text-[#5e5e5e] font-black">
              <span className="text-secondary block mb-1">{t.operationalProfile[lang]}</span>
              <span className="text-ink-black text-xs font-black">{timelineEvents[selectedEra].stats}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Act I Plating Dinner Candleholder and Food art */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-cream border-2 border-ink-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        <div className="lg:col-span-4 aspect-square max-w-sm mx-auto relative overflow-hidden border-2 border-ink-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <img 
            src="/images/interior/cellar-candlelight.jpg"
            alt="Act I Dinner under candlelight in the cellar"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-ink-black text-white px-2 py-0.5 font-oswald text-[9px] tracking-widest font-black">
            {t.actIExposure[lang]}
          </div>
        </div>

        <div className="lg:col-span-4 aspect-square max-w-sm mx-auto relative overflow-hidden border-2 border-ink-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <img 
            src="/images/food/risotto-truffle.jpg" 
            alt="Plating Art Puree Plate" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-accent-vermilion text-white px-2 py-0.5 font-oswald text-[9px] tracking-widest font-black">
            {t.platingArtistry[lang]}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <span className="font-oswald text-[10px] uppercase tracking-[0.2em] text-[#5e5e5e] font-black block">
            {t.platedNarrative[lang]}
          </span>
          <h4 className="font-anton text-2xl uppercase tracking-wide text-ink-black leading-tight">
            {t.symmetryStone[lang]}
          </h4>
          <p className="font-serif text-secondary text-sm leading-relaxed">
            {t.symmetryDesc[lang]}
          </p>
          <div className="pt-2">
            <Sparkles className="w-5 h-5 text-accent-vermilion animate-spin duration-[5000ms]" />
          </div>
        </div>
      </section>

    </div>
  );
}
