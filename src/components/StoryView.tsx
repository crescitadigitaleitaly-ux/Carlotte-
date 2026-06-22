import React, { useState } from 'react';
import { Sparkles, Calendar, BookOpen, Quote } from 'lucide-react';

export default function StoryView() {
  const [selectedEra, setSelectedEra] = useState<'2018' | '2021'>('2021');

  const timelineEvents = {
    '2018': {
      title: 'Boselli Palace',
      subtitle: 'The Home Private Kitchen Era',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOBHZq5SuGRY4bWMJOUGz9BIkgn-ilAoEEizQ5gf7wYVYiBNcx55BhHQD_VE7I4zNHrJaHOLrIMXL_Gvvn0sXAFRnWXqLNPDJuaqYVVl4LytQq1BNcbOCxz3fZsMsCdy69wFv3sxciwt87gGWgwljIofSzBFgnDX4B_Db6mhjtlQitxYFPmVGoBi2xV4nzKjQN4AAf62c_vtXtFW-oEH5ElRjOOcdV6SwwwgtqDDnEcHDYRWmQ-AkphiT-ohDKD0H-nRKkMjo7gOE',
      narrative: 'Carletto originated in complete confidentiality as a micro home dining experience inside the historic apartments of Boselli Palace in Savona. Squeezing in just eight guests at a small, beautiful mahogany kitchen counter on Friday nights, Chef Carlo used old handwritten journals from his grandmother to reconstruct authentic northern Italian maritime dishes.',
      stats: '8 guests, weekly service, fully secret invitations'
    },
    '2021': {
      title: 'Palazzo Santa Chiara',
      subtitle: 'The 16th-Century Sanctuary Sanctuary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK2gaRs6HCAk9a27Zg8Kl7rhXBrZoDoJXajAgDS32yL-ypsDdo7iyxWpwFNECly4ET2U5Lfbp38JXdOTRXTsR-eDcQgPqvlMjfgbzyKVkmqi7kzbdmTOQBrJuTvMHaMjV7lPbDPwckzPIOY2D53EMTNM50njZbLbwNrKCM_WCbqkOMsQxYJjZDeSbWnVwJAcLPIGroYwPZyKzVmv_2N_JILHctzEmlOEPqqetL70p60y3ovu1hkheLm-ZmDKW3Bz8wci3GjytwJ-M',
      narrative: 'Seeking deep liturgical silence to pair with his high-concept plating, Carlo established Carletto inside the sequestered vaults of the Palazzo Santa Chiara – a vacant sixteenth-century convent cloister. Here, the raw architectural stone walls, heavy linen runners, and a hand-crafted oak refectory table host twelve covers under absolute focus.',
      stats: '12 guests, Thursday–Saturday, reservation-only logs'
    }
  };

  return (
    <div className="space-y-16">
      {/* 1. Header block */}
      <section className="border-b-2 border-ink-black pb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="font-oswald text-[10px] uppercase tracking-[0.25em] text-accent-vermilion font-bold">
            THE BLOODLINE & HERITAGE
          </span>
          <span className="text-xs font-bold font-serif italic text-ink-black">Ligurian Lineage</span>
        </div>
        <h1 className="font-anton text-5xl sm:text-7xl uppercase text-ink-black leading-[0.85] tracking-tighter mb-4">
          CHEF CARLO<br />
          <span className="text-accent-vermilion font-serif font-bold italic tracking-tight lowercase block mt-1 sm:mt-2">astengo</span>
        </h1>
        <p className="font-serif text-secondary text-base max-w-2xl leading-relaxed">
          The culinary soul of Carletto lives at the threshold of industrial memory and clerical sanctuary. Meet the descendant of Piedmontese cordwainers who converted convent vaults into culinary stages.
        </p>
      </section>

      {/* 2. Chef Profile Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="chef-profile-segment">
        
        {/* Chef Portrait Image (Left Column) */}
        <div className="lg:col-span-5 relative group border-2 border-ink-black bg-surface-cream p-4 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
          <div className="aspect-[4/5] overflow-hidden border-2 border-ink-black">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_kIThqyz8aTRBtYjUnf_ajGWYIWUBRjgFvmkAe6rg17P6nAzRLIRVTU7viBqXjG7RdKlV25B9k2cDteS7nO6qYg5FnynAgfiepOThBQ58zNftfsJv0MwJjFZXimp2wszbsxxbc9JWLwPlz66pOwm_NIQp-SAt24AnLuH5dflE1IqTLN6XBVSElK1A0DOrpQkC6bC8vDjnIKh-EUZyTSoLv_NlgGOQGoPuZ4J2H04644VRc4h9gRNIq0LU7048biigFYcdalm8vLc" 
              alt="Chef Carlo Astengo Portrait" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="mt-4 font-oswald text-center">
            <span className="font-anton uppercase text-lg text-ink-black block">Carlo Astengo</span>
            <span className="text-[10px] uppercase tracking-widest text-accent-vermilion font-black">FOUNDING CUSTODIAN & CHEF</span>
          </div>
        </div>

        {/* Narrative & Quote (Right Column) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Quote Panel */}
          <div className="bg-[#F8F5EE] border-l-4 border-accent-vermilion p-6 text-ink-black font-serif text-lg relative border border-y-2 border-r-2 border-ink-black">
            <Quote className="absolute top-2 right-4 w-10 h-10 text-accent-vermilion/10 stroke-[2px]" />
            <p className="leading-relaxed relative z-10 font-bold italic">
              "We cook in absolute loyalty to raw Ligurian elements. A fish from captain Stefano, an artichoke from the limestone hills, cooked briefly, served in full silence under five hundred years of monastery stone."
            </p>
          </div>

          <div className="font-serif text-secondary space-y-4 text-base leading-relaxed">
            <p>
              Carlo Astengo graduated in cultural anthropology before committing to the kitchen. Born in Savona to a line of historic leather guild artisans, Carlo defines cooking as a tactile, manual transmission of family codes.
            </p>
            <p>
              Applying surgical modern techniques to ancient Ligurian formulas, Carlo is known for omitting heavy cream and fats, preferring to extract pure starches and marine emulsion. The resulting plates present transparent aromatic structures that honor coastal Italy.
            </p>
          </div>

          <div className="border-t border-ink-black/15 pt-6 grid grid-cols-2 gap-6 font-oswald text-xs">
            <div>
              <span className="text-ink-black font-anton text-lg block uppercase">SAVONA BORN</span>
              <span className="text-[10px] text-secondary tracking-wider font-extrabold uppercase">ROOTED IN THE LIGURIAN SEA</span>
            </div>
            <div>
              <span className="text-accent-vermilion font-anton text-lg block uppercase">ANTHROPOLOGY BG</span>
              <span className="text-[10px] text-secondary tracking-wider font-extrabold uppercase">CULTURAL DISH RECONSTRUCTION</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Grandfather Heritage connection */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface-cream border-2 border-ink-black p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        
        <div className="space-y-6">
          <BookOpen className="w-8 h-8 text-accent-vermilion" />
          <h2 className="font-anton text-3xl uppercase tracking-tight leading-none text-ink-black">
            THE GRANDFATHER’S CORDWAINER BLUEPRINT
          </h2>
          <p className="font-serif text-secondary text-sm leading-relaxed">
            Carlo’s grandfather was a famous footwear industrialist who built leather riding boots in Savona. In his workshop, precision was paramount: every millimeter of cowhide had to fit the foot perfectly. Carlo translates this strict, geometric discipline to the kitchen board. The plates are arranged with the exact symmetry of structural patterns.
          </p>
          <div className="p-4 bg-surface-tan border border-ink-black/20 font-serif text-xs italic text-ink-black/80">
            "Craft is the same whether it is leather or venison; each tool has one sound, and each cut leaves no room for return."
          </div>
        </div>

        {/* Vintage Portrait of grandfather */}
        <div className="relative aspect-video sm:aspect-square bg-white border-2 border-ink-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkwauPCqRXvOIYzMmPTPkFVkphKU34v3XxdQC-FEl9RPV77rZFB7JxHfGiF_RImAUPh6PNK3dghw42k8cgdIGLJARQ6FW9hvjDRiVcs43h-H2CHU_aBDJXhbtq6y0E-JqHDM4V9Lf2P20hZZm_MKlUQzpyc0ekL0OAJJoaEeDb9UpxQY0zYm9NPTpYRHy2hlCMkHzF8avbB3TXrYDLWPwzc39Jh8BdoGfJFce6TdRGgYvkKRir8DhGUDmjyD_2ns4GOBN6akDuioc" 
            alt="The Grandfather shoe industrialist portrait" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale brightness-95"
          />
          <div className="absolute bottom-4 left-4 bg-ink-black text-white px-2.5 py-1 font-oswald text-[9px] uppercase tracking-widest font-black border border-white/20">
            SAVONA GUILD, 1924
          </div>
        </div>

      </section>

      {/* 4. Interactive Timeline Segment (Boselli Palace 2018 vs Palazzo Santa Chiara 2021) */}
      <section className="space-y-6">
        <div className="border-b-2 border-ink-black pb-4 flex flex-col sm:flex-row justify-between items-baseline gap-4">
          <div>
            <span className="font-oswald text-xs uppercase tracking-[0.2em] text-accent-vermilion font-bold block mb-1">
              Dual Period Exhibition
            </span>
            <h2 className="font-anton text-3xl uppercase tracking-tight text-ink-black">
              THE CHRONICLES OF CARLETTO
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
              2018: Boselli Palace
            </button>
            <button
              onClick={() => setSelectedEra('2021')}
              className={`px-4 py-2 border-2 border-ink-black transition-all cursor-pointer ${
                selectedEra === '2021' 
                  ? 'bg-ink-black text-white' 
                  : 'bg-white text-ink-black hover:bg-surface-tan'
              }`}
            >
              2021: Santa Chiara Convent
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
              referrerPolicy="no-referrer"
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
              <span className="text-secondary block mb-1">OPERATIONAL PROFILE:</span>
              <span className="text-ink-black text-xs font-black">{timelineEvents[selectedEra].stats}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Act I Plating Dinner Candleholder and Food art */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-cream border-2 border-ink-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        <div className="lg:col-span-4 aspect-square max-w-sm mx-auto relative overflow-hidden border-2 border-ink-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOywdMWX8Hbbfx9e7960pTu-gL7Bc7bKlygpayUHtZnGpxU37C0jEs6Z4N36_chCh4kYC-Jbh9nHRSXkMeI4P7RZOPA38PIShU2mW8iuArStjDFyWGvvQ7CuaS5NrKcrXSzz2dqYlFzsVjRwniX2I-272M-R2DpkyUwCoHZo_dNdxbNqcP9QnLJVF79z2GxShefOIgCTlS3-Z0CCMMKnS_meljtNtu84xrtU6E11a9qAqVrFoi6HOTu0KQqyMlzPs1hZxudkNUOik" 
            alt="Act I Dinner under candlelight" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-ink-black text-white px-2 py-0.5 font-oswald text-[9px] tracking-widest font-black">
            ACT I EXPOSURE
          </div>
        </div>

        <div className="lg:col-span-4 aspect-square max-w-sm mx-auto relative overflow-hidden border-2 border-ink-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXu1z-J4BkwavfNeDgpShO4d3Xm-h05ehiDa1AWuUaledcWe_0VeQp3zy4Upl43XPu_HEcquA9C0ovdeTB4X0QEAxL37tghmi_8-HhTNeaepUB4hgcL1ml449Q93I-kx5Glf9U8NZCahwqba5d8jCuHEleA39fNOg-mTbzh_3Fmi4b_YP6nsJasKN6_bwFGKI87vqZLkHxc0d17W3GQO3V2f4VLjWR9y-rds_TuRXqoJpbwk5MecfSdTl3Ss19daJGsYu2UeYYrHoME" 
            alt="Plating Art Puree Plate" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-accent-vermilion text-white px-2 py-0.5 font-oswald text-[9px] tracking-widest font-black">
            PLATING ARTISTRY
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <span className="font-oswald text-[10px] uppercase tracking-[0.2em] text-[#5e5e5e] font-black block">
            The Plated Narrative
          </span>
          <h4 className="font-anton text-2xl uppercase tracking-wide text-ink-black leading-tight">
            SYMMETRY ON THE STONE
          </h4>
          <p className="font-serif text-secondary text-sm leading-relaxed">
            Every dish is placed precisely at the intersection of local memory and contemporary geometry. Using hand-glazed terracotta platters and heavy raw linen, we frame each plate as an individual culinary exhibit.
          </p>
          <div className="pt-2">
            <Sparkles className="w-5 h-5 text-accent-vermilion animate-spin duration-[5000ms]" />
          </div>
        </div>
      </section>

    </div>
  );
}
