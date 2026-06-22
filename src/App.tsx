import React, { useState, useEffect } from 'react';
import { Calendar, Compass, ListTodo, ClipboardList, Info, Flame, Wine, ChevronRight, Sparkles } from 'lucide-react';
import { TabType, Reservation } from './types';
import { useLang } from './LanguageContext';
import { t } from './translations';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import StoryView from './components/StoryView';
import LocationView from './components/LocationView';
import ReservationModal from './components/ReservationModal';

const navLabels = {
  HOME: { it: 'HOME', en: 'HOME' },
  MENU: { it: 'MENU', en: 'MENU' },
  STORY: { it: 'STORIA', en: 'STORY' },
  LOCATION: { it: 'LUOGO', en: 'LOCATION' },
} as const;

export default function App() {
  const { lang, setLang } = useLang();
  const [activeTab, setActiveTab] = useState<TabType>('HOME');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [showMyBookings, setShowMyBookings] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('carletto_reservations');
    if (saved) {
      try {
        setReservations(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse reservations');
      }
    }
  }, []);

  const handleAddReservation = (newRes: Reservation) => {
    const updated = [newRes, ...reservations];
    setReservations(updated);
    localStorage.setItem('carletto_reservations', JSON.stringify(updated));
  };

  const handleCancelReservation = (id: string) => {
    if (confirm(t.cancelConfirm[lang])) {
      const updated = reservations.filter((r) => r.id !== id);
      setReservations(updated);
      localStorage.setItem('carletto_reservations', JSON.stringify(updated));
    }
  };

  return (
    <div className="min-h-screen bg-surface-cream text-on-surface flex flex-col font-sans selection:bg-accent-vermilion selection:text-white">
      {/* 1. Global Announcement Micro-Header */}
      <div className="bg-ink-black text-[#FDFCF6]/90 text-[10px] font-oswald uppercase tracking-[0.25em] py-2.5 px-4 sm:px-8 flex justify-between items-center border-b border-[#FDFCF6]/15 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-accent-vermilion rounded-full animate-pulse" />
          <span className="font-bold">{t.status[lang]}</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>{t.palazzoInfo[lang]}</span>
          <span>•</span>
          <span>{t.seatsInfo[lang]}</span>
        </div>
      </div>

      {/* 2. Primary Navigation Bar */}
      <header className="sticky top-0 z-50 bg-surface-cream/90 backdrop-blur-md border-b-2 border-ink-black/20 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">

          <button
            onClick={() => setActiveTab('HOME')}
            className="flex items-center gap-2 text-left focus:outline-none group"
          >
            <div className="font-anton text-2xl font-black tracking-tighter text-ink-black block leading-none uppercase">
              STUDIO.CARLETTO
            </div>
            <div className="w-2 h-2 bg-accent-vermilion rounded-full group-hover:scale-150 transition-transform"></div>
          </button>

          <nav className="hidden md:flex items-center gap-12 font-oswald text-xs uppercase tracking-widest font-bold">
            {(['HOME', 'MENU', 'STORY', 'LOCATION'] as TabType[]).map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`py-2 px-1 relative transition-all duration-200 ${
                    isSelected ? 'text-accent-vermilion underline underline-offset-8 decoration-[3px]' : 'text-on-surface hover:underline hover:underline-offset-8 hover:decoration-2'
                  }`}
                >
                  {navLabels[tab][lang]}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">

            {/* Language Toggle */}
            <div className="flex border-2 border-ink-black overflow-hidden font-oswald text-[10px] uppercase tracking-widest font-black">
              <button
                onClick={() => setLang('it')}
                className={`px-2.5 py-2 transition-colors ${
                  lang === 'it' ? 'bg-ink-black text-white' : 'bg-white text-ink-black hover:bg-surface-tan'
                }`}
              >
                IT
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-2 transition-colors border-l-2 border-ink-black ${
                  lang === 'en' ? 'bg-ink-black text-white' : 'bg-white text-ink-black hover:bg-surface-tan'
                }`}
              >
                EN
              </button>
            </div>

            {reservations.length > 0 && (
              <button
                onClick={() => setShowMyBookings(!showMyBookings)}
                className={`relative p-2.5 border-2 border-ink-black transition-colors ${
                  showMyBookings ? 'bg-ink-black text-white' : 'bg-white text-ink-black hover:bg-surface-tan'
                }`}
              >
                <ClipboardList className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent-vermilion text-white font-anton text-[9px] flex items-center justify-center rounded-full border border-white">
                  {reservations.length}
                </span>
              </button>
            )}

            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-accent-vermilion text-white hover:bg-ink-black transition-colors font-oswald text-xs uppercase tracking-[0.2em] font-black py-3 px-6 border-2 border-ink-black shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              {t.reserveSeats[lang]}
            </button>
          </div>

        </div>

        {showMyBookings && reservations.length > 0 && (
          <div className="border-t-2 border-ink-black bg-surface-tan p-6 font-oswald text-xs uppercase tracking-wider">
            <div className="max-w-xl mx-auto space-y-4">
              <div className="flex justify-between items-center border-b border-ink-black/20 pb-2">
                <span className="font-anton text-sm text-ink-black tracking-widest">{t.activePassports[lang]}</span>
                <button
                  onClick={() => setShowMyBookings(false)}
                  className="text-accent-vermilion hover:underline font-bold"
                >
                  {t.closeDrawer[lang]}
                </button>
              </div>

              <div className="space-y-3">
                {reservations.map((res) => (
                  <div key={res.id} className="bg-white border-2 border-ink-black p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
                    <div>
                      <span className="font-bold text-ink-black text-sm block">{res.name}</span>
                      <p className="text-secondary tracking-widest text-[10px] mt-1">
                        {res.guests} {res.guests === 1 ? t.person[lang] : t.people[lang]} • {res.date} at {res.time}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCancelReservation(res.id)}
                      className="px-3 py-1.5 bg-[#ba1a1a] text-white hover:bg-ink-black hover:text-white transition-colors uppercase font-bold text-[9px] tracking-widest"
                    >
                      {t.cancelSeat[lang]}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Navigation Rail */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-[40] bg-surface-cream border-t-3 border-ink-black py-3 flex justify-around font-oswald text-[10px] tracking-widest font-bold uppercase shadow-lg">
        {([
          { key: 'HOME', icon: Compass },
          { key: 'MENU', icon: Wine },
          { key: 'STORY', icon: ClipboardList },
          { key: 'LOCATION', icon: Info },
        ] as { key: TabType; icon: any }[]).map(({ key, icon: Icon }) => {
          const isSelected = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center gap-1.5 ${
                isSelected ? 'text-accent-vermilion' : 'text-on-surface opacity-60'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{navLabels[key][lang]}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Main Dynamic Content Frame */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 flex-grow w-full pb-28 md:pb-20">
        <div key={activeTab} className="animate-fade-in duration-300">
          {activeTab === 'HOME' && (
            <HomeView
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          )}
          {activeTab === 'MENU' && <MenuView />}
          {activeTab === 'STORY' && <StoryView />}
          {activeTab === 'LOCATION' && <LocationView />}
        </div>
      </main>

      {/* 4. Elegant Footer */}
      <footer className="bg-ink-black text-[#e6e2de] py-16 px-4 sm:px-8 border-t-3 border-ink-black mt-auto text-sm font-oswald tracking-widest uppercase pb-32 md:pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="space-y-4">
            <h5 className="font-anton text-xl tracking-wider text-white">CARLETTO</h5>
            <p className="text-[#a8a49f] lowercase text-xs">
              {t.footerDesc[lang]}
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-accent-vermilion text-xs block">{t.sisterLineage[lang]}</span>
            <ul className="space-y-1 text-xs text-[#a8a49f]">
              <li>BOSCO CHRONICLES</li>
              <li>PALAZZO SANTA CHIARA</li>
              <li>GENOA HARBOR PILOTS</li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-[#e6e2de] text-xs block">{t.visitChannels[lang]}</span>
            <ul className="space-y-1 text-xs text-[#a8a49f]">
              <li>Via Pia 118R, Savona</li>
              <li>{t.mondaySaturday[lang]}</li>
              <li>{t.capacity[lang]}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="font-bold text-[#e6e2de] text-xs block">{t.cloisterArchives[lang]}</span>
            <p className="text-xxs text-[#a8a49f] leading-relaxed">
              {t.footerArchiveText[lang]}
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xxs text-[#807a75] gap-4">
          <div>{t.footerCopyright[lang]}</div>
          <div className="flex gap-2 items-center text-white">
            <Sparkles className="w-3.5 h-3.5 text-accent-vermilion" />
            <span>{t.proudTradition[lang]}</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/393923114000?text=Buonasera%2C%20vorrei%20prenotare%20un%20tavolo%20al%20Carletto."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 right-6 z-[60] w-14 h-14 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 border-2 border-ink-black group"
        title="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 group-hover:scale-110 transition-transform">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <ReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onAddReservation={handleAddReservation}
      />
    </div>
  );
}
