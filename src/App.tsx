import React, { useState, useEffect } from 'react';
import { Calendar, Compass, ListTodo, ClipboardList, Info, Flame, Wine, ChevronRight, Sparkles } from 'lucide-react';
import { TabType, Reservation } from './types';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import StoryView from './components/StoryView';
import LocationView from './components/LocationView';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('HOME');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [showMyBookings, setShowMyBookings] = useState(false);

  // Load existing reservations on mount
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

  // Add a new reservation and save it to localStorage
  const handleAddReservation = (newRes: Reservation) => {
    const updated = [newRes, ...reservations];
    setReservations(updated);
    localStorage.setItem('carletto_reservations', JSON.stringify(updated));
  };

  // Remove a reservation
  const handleCancelReservation = (id: string) => {
    if (confirm('Are you sure you want to cancel this reservation?')) {
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
          <span className="font-bold">STATUS: SEATS AVAILABLE NIGHTLY</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>PALAZZO SANTA CHIARA // SAVONA</span>
          <span>•</span>
          <span>MAX 12 COVERS</span>
        </div>
      </div>

      {/* 2. Primary Navigation Bar */}
      <header className="sticky top-0 z-50 bg-surface-cream/90 backdrop-blur-md border-b-2 border-ink-black/20 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
          
          {/* Logo Brand Title */}
          <button 
            onClick={() => setActiveTab('HOME')}
            className="flex items-center gap-2 text-left focus:outline-none group"
          >
            <div className="font-anton text-2xl font-black tracking-tighter text-ink-black block leading-none uppercase">
              STUDIO.CARLETTO
            </div>
            <div className="w-2 h-2 bg-accent-vermilion rounded-full group-hover:scale-150 transition-transform"></div>
          </button>

          {/* Navigation Links */}
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
                  {tab}
                </button>
              );
            })}
          </nav>

          {/* Booking & Personal Reservation Tracker Actions */}
          <div className="flex items-center gap-3">
            
            {/* My Bookings Trigger Button (Only show badge if active reservation exists) */}
            {reservations.length > 0 && (
              <button
                onClick={() => setShowMyBookings(!showMyBookings)}
                className={`relative p-2.5 border-2 border-ink-black transition-colors ${
                  showMyBookings ? 'bg-ink-black text-white' : 'bg-white text-ink-black hover:bg-surface-tan'
                }`}
                title="View your pending table confirmations"
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
              Reserve Seats
            </button>
          </div>

        </div>

        {/* Dynamic My Bookings Dropdown list drawer */}
        {showMyBookings && reservations.length > 0 && (
          <div className="border-t-2 border-ink-black bg-surface-tan p-6 font-oswald text-xs uppercase tracking-wider">
            <div className="max-w-xl mx-auto space-y-4">
              <div className="flex justify-between items-center border-b border-ink-black/20 pb-2">
                <span className="font-anton text-sm text-ink-black tracking-widest">Active Dinner Passports</span>
                <button 
                  onClick={() => setShowMyBookings(false)}
                  className="text-accent-vermilion hover:underline font-bold"
                >
                  Close Drawer
                </button>
              </div>

              <div className="space-y-3">
                {reservations.map((res) => (
                  <div key={res.id} className="bg-white border-2 border-ink-black p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
                    <div>
                      <span className="font-bold text-ink-black text-sm block">{res.name}</span>
                      <p className="text-secondary tracking-widest text-[10px] mt-1">
                        {res.guests} {res.guests === 1 ? 'Person' : 'People'} • {res.date} at {res.time}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCancelReservation(res.id)}
                      className="px-3 py-1.5 bg-[#ba1a1a] text-white hover:bg-ink-black hover:text-white transition-colors uppercase font-bold text-[9px] tracking-widest"
                    >
                      Cancel Seat
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
              <span>{key}</span>
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

      {/* 4. Elegant Footer coordinates */}
      <footer className="bg-ink-black text-[#e6e2de] py-16 px-4 sm:px-8 border-t-3 border-ink-black mt-auto text-sm font-oswald tracking-widest uppercase pb-32 md:pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h5 className="font-anton text-xl tracking-wider text-white">CARLETTO</h5>
            <p className="text-[#a8a49f] lowercase text-xs">
              An exclusive culinary journey hidden within the historic walls of a 16th-century convent in Savona.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-accent-vermilion text-xs block">SISTER LINEAGE</span>
            <ul className="space-y-1 text-xs text-[#a8a49f]">
              <li>BOSCO CHRONICLES</li>
              <li>PALAZZO SANTA CHIARA</li>
              <li>GENOA HARBOR PILOTS</li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-[#e6e2de] text-xs block">VISIT CHANNELS</span>
            <ul className="space-y-1 text-xs text-[#a8a49f]">
              <li>Via dei Battuti 14, Savona</li>
              <li>Thursday - Saturday</li>
              <li>Covers limits: 12 daily</li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="font-bold text-[#e6e2de] text-xs block">CLOISTER ARCHIVES</span>
            <p className="text-xxs text-[#a8a49f] leading-relaxed">
              All concepts, recipes and handwritten leather journal codes are trademarked under Carlo Astengo's Savona Guild (2018-2026).
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xxs text-[#807a75] gap-4">
          <div>© CARLETTO PRIVATE RESTAURANT. ALL SANCTUARY PRIVILEGES DECLARED.</div>
          <div className="flex gap-2 items-center text-white">
            <Sparkles className="w-3.5 h-3.5 text-accent-vermilion" /> 
            <span>PROUD LIGURIAN TRADITION</span>
          </div>
        </div>
      </footer>

      {/* Table Reservation Dialog Modal */}
      <ReservationModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onAddReservation={handleAddReservation}
      />
    </div>
  );
}
