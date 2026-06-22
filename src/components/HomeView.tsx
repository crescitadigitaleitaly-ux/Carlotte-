import React, { useState } from 'react';
import { ArrowRight, Sparkles, Flame, Clock, Users, Heart } from 'lucide-react';
import { TabType } from '../types';
import { useLang } from '../LanguageContext';
import { t } from '../translations';

interface HomeViewProps {
  onNavigate: (tab: TabType) => void;
  onOpenBooking: () => void;
}

export default function HomeView({ onNavigate, onOpenBooking }: HomeViewProps) {
  const { lang } = useLang();
  const [activeDish, setActiveDish] = useState<string | null>(null);

  const signatureDishes = [
    {
      id: 'tartare',
      title: t.tartareTitle[lang],
      category: t.tartareCategory[lang],
      image: '/images/food/shrimp-tartare.jpg',
      story: t.tartareStory[lang],
      pairing: 'Vermentino Colli di Luni DOCG',
      details: t.tartareDetails[lang]
    },
    {
      id: 'roche',
      title: t.rocheTitle[lang],
      category: t.rocheCategory[lang],
      image: '/images/food/dark-plating.jpg',
      story: t.rocheStory[lang],
      pairing: 'Pigato Riviera Ligure di Ponente DOC',
      details: t.rocheDetails[lang]
    }
  ];

  return (
    <div className="space-y-24">
      {/* 1. Hero Container Segment */}
      <section className="relative min-h-[82vh] flex flex-col justify-between border-b-2 border-ink-black pb-8" id="hero-segment">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border-b-2 border-ink-black flex-grow">
          {/* Hero Left Callout Text */}
          <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col justify-between bg-surface-cream">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-block px-2 py-0.5 bg-accent-vermilion text-white font-oswald text-[11px] uppercase tracking-widest font-bold">
                   {t.servedNightly[lang]}
                </span>
                <p className="text-xs font-bold font-serif italic text-ink-black tracking-normal">Savona, IT</p>
              </div>
              <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.85] text-ink-black uppercase">
                {t.heroTitle1[lang]}<br />
                <span className="text-accent-vermilion font-serif font-bold italic tracking-tight lowercase block -mt-1 sm:-mt-2 lg:-mt-4">carletto</span>
              </h1>
              <p className="font-serif text-base sm:text-lg font-normal text-secondary max-w-sm leading-relaxed">
                {t.heroDesc[lang]}
              </p>
            </div>

            {/* Micro Details & Action Buttons */}
            <div className="pt-8 space-y-6">
              <div className="flex flex-col gap-3 font-oswald text-[11px] tracking-widest font-bold uppercase text-ink-black">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-vermilion shrink-0" /> 
                  <span>{t.serviceHours[lang]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent-vermilion shrink-0" /> 
                  <span>{t.tableOccupancy[lang]}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('MENU')}
                  className="flex-1 bg-ink-black text-white hover:bg-accent-vermilion hover:text-white font-oswald text-xs font-bold uppercase tracking-[0.2em] py-3.5 px-6 border-2 border-ink-black transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {t.exploreMenus[lang]} <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBooking}
                  className="flex-1 bg-accent-vermilion text-white hover:bg-ink-black font-oswald text-xs font-bold uppercase tracking-[0.2em] py-3.5 px-6 border-2 border-ink-black transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  {t.reserveSeats[lang]}
                </button>
              </div>
            </div>
          </div>

          {/* Hero Right Main Cinematic Image */}
          <div className="lg:col-span-3 relative h-80 lg:h-auto border-l-0 lg:border-l-2 border-ink-black overflow-hidden flex items-stretch">
            <img 
              src="/images/interior/dining-room-mirror.jpg"
              alt="Carletto Dining Room at Palazzo Santa Chiara"
              className="absolute inset-0 w-full h-full object-cover grayscale-[15%] hover:scale-105 hover:grayscale-0 transition-all duration-1000 ease-out"
            />
            {/* Visual bottom dark shade gradient */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 sm:p-10 flex flex-col justify-end text-white">
              <span className="font-oswald text-[11px] uppercase tracking-[0.25em] text-accent-vermilion font-bold">
                {t.miseEnPlace[lang]}
              </span>
              <p className="font-anton text-2xl sm:text-3xl uppercase tracking-tight mt-1">
                {t.ligurianHeritage[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Footer of Hero Layout */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center px-8 pt-4 gap-4 text-[11px] font-oswald font-bold uppercase tracking-[0.2em] text-[#5e5e5e]">
          <div>{t.establishedBy[lang]}</div>
          <div className="text-accent-vermilion">{t.palazzoCellars[lang]}</div>
          <div>{t.membersOnly[lang]}</div>
        </div>
      </section>

      {/* 2. Historic Convent & Concept Intro */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface-cream border-2 border-ink-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        <div className="space-y-6">
          <div className="inline-block bg-surface-tan px-2.5 py-0.5 font-oswald text-[11px] uppercase tracking-widest font-bold text-ink-black border border-ink-black">
            {t.conventSanctuary[lang]}
          </div>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase text-ink-black tracking-tighter leading-[0.95]">
            {t.monasteryTitle[lang]}
          </h2>
          <p className="font-serif text-secondary text-base leading-relaxed">
            {t.monasteryDesc[lang]}
          </p>
          <div className="pt-4 grid grid-cols-2 gap-4 border-t border-ink-black/15 font-oswald">
            <div>
              <span className="text-accent-vermilion text-3xl font-bold block font-anton">03</span>
              <span className="text-[11px] uppercase tracking-widest text-secondary font-semibold block mt-1">{t.acts[lang]}</span>
            </div>
            <div>
              <span className="text-ink-black text-3xl font-bold block font-anton">100%</span>
              <span className="text-[11px] uppercase tracking-widest text-[#5e5e5e] font-semibold block mt-1">{t.localIngredients[lang]}</span>
            </div>
          </div>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('STORY')}
              className="font-oswald text-xs font-bold uppercase tracking-widest text-ink-black border-b-2 border-ink-black pb-1 hover:text-accent-vermilion hover:border-accent-vermilion transition-colors inline-flex items-center gap-2"
            >
              {t.learnLineage[lang]} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Convent Picture */}
        <div className="relative aspect-video sm:aspect-square bg-white border-2 border-ink-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
          <img 
            src="/images/interior/full-room-piano.jpg"
            alt="Palazzo Santa Chiara dining room with piano and vaulted ceiling"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 bg-ink-black text-white px-3 py-1 font-oswald text-xxs uppercase tracking-widest font-semibold border border-white">
            {t.cloisterView[lang]}
          </div>
        </div>
      </section>

      {/* 3. Interactive Culinary Dishes grid */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b-2 border-ink-black pb-4 gap-4">
          <div>
            <span className="font-oswald text-xs uppercase tracking-[0.2em] text-accent-vermilion font-bold block mb-1">
              {t.interactiveShowcase[lang]}
            </span>
            <h2 className="font-anton text-4xl uppercase tracking-tight text-ink-black">
              {t.signatureCompositions[lang]}
            </h2>
          </div>
          <p className="font-serif text-secondary text-sm max-w-sm sm:text-right">
            {t.signatureDesc[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {signatureDishes.map((dish) => {
            const isSelected = activeDish === dish.id;
            return (
              <div 
                key={dish.id} 
                onClick={() => setActiveDish(isSelected ? null : dish.id)}
                className={`group cursor-pointer bg-surface-cream border-2 border-ink-black overflow-hidden transition-all duration-300 transform ${
                  isSelected ? 'shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] translate-y-1' : 'shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]'
                }`}
              >
                {/* Image panel */}
                <div className="relative aspect-video border-b-2 border-ink-black overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.title}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-750 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-accent-vermilion text-white font-oswald text-[11px] uppercase tracking-wider py-1 px-2.5 font-bold border border-ink-black">
                    {dish.category}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-anton text-2xl uppercase tracking-tight text-ink-black">
                      {dish.title}
                    </h3>
                    <span className="font-oswald text-[11px] text-accent-vermilion uppercase font-bold tracking-wider whitespace-nowrap">
                      {isSelected ? t.closeDetails[lang] : t.viewDetails[lang]}
                    </span>
                  </div>

                  <p className="font-serif text-secondary text-sm leading-relaxed">
                    {dish.story}
                  </p>

                  {/* Hidden / Expanded details with interactive somatic triggers */}
                  {isSelected && (
                    <div className="pt-4 border-t-2 border-ink-black bg-[#F8F5EE] -mx-6 -mb-6 p-6 space-y-4">
                      <div>
                        <strong className="font-oswald uppercase tracking-widest text-accent-vermilion text-[11px] font-bold block mb-1">{t.culinaryPrep[lang]}</strong>
                        <p className="font-serif text-sm text-ink-black leading-relaxed">{dish.details}</p>
                      </div>
                      <div className="pt-3 border-t border-ink-black/15 flex items-center justify-between gap-4">
                        <div>
                          <strong className="font-oswald uppercase tracking-widest text-[#5e5e5e] text-[11px] font-bold block mb-0.5">{t.sommelierFlight[lang]}</strong>
                          <span className="font-serif text-sm font-bold text-ink-black italic uppercase">{dish.pairing}</span>
                        </div>
                        <Sparkles className="w-5 h-5 text-accent-vermilion animate-pulse shrink-0" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Fine Wine and Guest Guidelines */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-ink-black shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] bg-surface-cream">
        <div className="p-8 space-y-4 border-b-2 lg:border-b-0 lg:border-r-2 border-ink-black">
          <Flame className="w-8 h-8 text-accent-vermilion stroke-[1.5px]" />
          <h3 className="font-anton text-xl uppercase text-ink-black tracking-tight">{t.ligurianTerroir[lang]}</h3>
          <p className="font-serif text-secondary text-sm leading-relaxed">
            {t.terroirDesc[lang]}
          </p>
        </div>
        <div className="p-8 space-y-4 border-b-2 lg:border-b-0 lg:border-r-2 border-ink-black">
          <Users className="w-8 h-8 text-accent-vermilion stroke-[1.5px]" />
          <h3 className="font-anton text-xl uppercase text-ink-black tracking-tight">{t.civilEtiquette[lang]}</h3>
          <p className="font-serif text-secondary text-sm leading-relaxed">
            {t.etiquetteDesc[lang]}
          </p>
        </div>
        <div className="p-8 space-y-4">
          <Heart className="w-8 h-8 text-accent-vermilion stroke-[1.5px]" />
          <h3 className="font-anton text-xl uppercase text-ink-black tracking-tight font-bold">{t.byInvitation[lang]}</h3>
          <p className="font-serif text-secondary text-sm leading-relaxed">
            {t.invitationDesc[lang]}
          </p>
        </div>
      </section>
    </div>
  );
}
