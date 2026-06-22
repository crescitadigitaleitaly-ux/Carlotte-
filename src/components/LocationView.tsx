import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Star, MessageSquare, Send } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  content: string;
  date: string;
}

export default function LocationView() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 'rev1',
      author: 'Alessandro B.',
      location: 'Milan, Italy',
      rating: 5,
      content: 'Eating here is like stepping into a silent monastic ritual. The savory Risotto Carnaroli with black truffles served under 500-year-old convent vaults was a sublime sensory experience. Only twenty seats across seven tables, making it truly personal.',
      date: 'June 2026'
    },
    {
      id: 'rev2',
      author: 'Clara M.',
      location: 'Nice, France',
      rating: 5,
      content: 'Chef Carlo guided us through three chapters of pure Ligurian terroir. The nettle ravioloni melted like mountain snow. A masterpiece tucked away in the back lanes of Savona.',
      date: 'May 2026'
    }
  ]);

  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newContent) return;

    const newRev: Review = {
      id: `rev-${Math.random().toString(36).substr(2, 9)}`,
      author: newAuthor,
      location: newLocation || 'Guest Traveler',
      rating: newRating,
      content: newContent,
      date: 'Just now'
    };

    setReviews([newRev, ...reviews]);
    setNewAuthor('');
    setNewLocation('');
    setNewContent('');
    setNewRating(5);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="space-y-16">
      {/* 1. Header block */}
      <section className="border-b-2 border-ink-black pb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="font-oswald text-[10px] uppercase tracking-[0.25em] text-accent-vermilion font-bold">
            SANCTUARY ADDRESS
          </span>
          <span className="text-xs font-bold font-serif italic text-ink-black">16th-Century Vaults</span>
        </div>
        <h1 className="font-anton text-5xl sm:text-7xl uppercase text-ink-black leading-[0.85] tracking-tighter mb-4">
          PALAZZO SANTA<br />
          <span className="text-accent-vermilion font-serif font-bold italic tracking-tight lowercase block mt-1 sm:mt-2">chiara</span>
        </h1>
        <p className="font-serif text-secondary text-base max-w-2xl leading-relaxed">
          Nested in the medieval grid of old Savona, our doors are accessible solely to reservation holders possessing confirmation keys. 
        </p>
      </section>

      {/* 2. Location Information Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact and schedule Details */}
        <div className="lg:col-span-12 xl:col-span-5 bg-surface-cream border-2 border-ink-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] space-y-8">
          <div className="space-y-6 font-oswald text-sm">
            
            <div className="border-b border-ink-black/10 pb-4">
              <span className="text-accent-vermilion uppercase tracking-widest text-xs font-black block mb-1">
                Entrance Coordinates
              </span>
              <p className="text-lg font-bold text-ink-black uppercase flex items-start gap-2 pt-1">
                <MapPin className="w-5 h-5 text-accent-vermilion shrink-0 mt-0.5" />
                <span className="tracking-tight">
                  Via Pia 118R<br />
                  17100 Savona SV<br />
                  Liguria, Italy
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="text-secondary uppercase tracking-widest text-xs font-extrabold block mb-1">
                  Private Phone
                </span>
                <p className="font-bold flex items-center gap-1.5 text-black">
                  <Phone className="w-4 h-4 text-accent-vermilion" /> +39 392 311 4000
                </p>
              </div>
              <div>
                <span className="text-secondary uppercase tracking-widest text-xs font-extrabold block mb-1">
                  Direct Line
                </span>
                <p className="font-bold flex items-center gap-1.5 text-black">
                  <Mail className="w-4 h-4 text-accent-vermilion" /> carlettoprivaterestaurant@gmail.com
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-ink-black/10">
              <span className="text-secondary uppercase tracking-widest text-xs font-extrabold block mb-2">
                Convent Guest Hours
              </span>
              <div className="space-y-1.5 uppercase font-black text-xs">
                <div className="flex justify-between">
                  <span>MON - SAT DINNER</span>
                  <span className="font-black text-ink-black">20:00 - 23:30</span>
                </div>
                <div className="flex justify-between">
                  <span>FRI & SAT LUNCH</span>
                  <span className="font-black text-ink-black">12:30 - 15:30</span>
                </div>
                <div className="flex justify-between text-[#FF4D00]">
                  <span>SUNDAYS</span>
                  <span className="font-black font-anton uppercase tracking-widest text-sm">CLOISTER CLOSED</span>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-surface-tan border border-ink-black/25 p-4 flex gap-3 text-xs font-serif text-ink-black leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-accent-vermilion shrink-0 mt-0.5 animate-pulse" />
            <p>
              <strong className="font-bold">Secret Enclosure Warning:</strong> Palazzo Santa Chiara is closed to the public. Casual pedestrians will find the wooden cathedral gate locked. Keys are strictly valid for confirmed dinner guests.
            </p>
          </div>

        </div>

        {/* Access Map Instructions Visual */}
        <div className="lg:col-span-12 xl:col-span-7 bg-surface-cream border-2 border-ink-black p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="font-anton text-2xl uppercase tracking-tight text-ink-black leading-none">
              HOW TO UNLOCK PALAZZO SANTA CHIARA
            </h3>
            <p className="font-serif text-secondary text-sm leading-relaxed">
              Our 16th-century convent cloister is hidden behind high limestone barrier walls in old Savona’s cordwainer district. Follow these instructions:
            </p>
            
            {/* Visual Vector map frame simulating steps */}
            <div className="bg-white border-2 border-ink-black p-6 font-serif text-xs space-y-4 uppercase">
              <div className="flex gap-4 items-center">
                <span className="w-6 h-6 rounded-full bg-ink-black text-white flex items-center justify-center font-anton shrink-0 text-[10px]">1</span>
                <div>
                  <strong className="text-ink-black font-bold">Via Pia Portal</strong>
                  <p className="text-secondary text-[10px] lowercase leading-tight">Locate the portal at Via Pia 118R in Savona's historic center, just two steps from the scenic tourist port.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-6 h-6 rounded-full bg-accent-vermilion text-white flex items-center justify-center font-anton shrink-0 text-[10px]">2</span>
                <div>
                  <strong className="text-ink-black font-bold">The Oak Gate</strong>
                  <p className="text-secondary text-[10px] lowercase leading-tight">Tap the bronze lion knocker thrice. The desk clerk will unlock the small sidebar door.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-6 h-6 rounded-full bg-ink-black text-white flex items-center justify-center font-anton shrink-0 text-[10px]">3</span>
                <div>
                  <strong className="text-ink-black font-bold">The Boudoir Cloister</strong>
                  <p className="text-secondary text-[10px] lowercase leading-tight">Walk through the dark corridor past the wells into Carletto's candle-lit dining room filled with art.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-ink-black/10 font-oswald text-[9px] text-[#5e5e5e] tracking-widest text-center font-black">
            COORD: 44°18'29.8"N 8°28'53.4"E • ALTITUDE : 12 METERS
          </div>
        </div>

      </section>

      {/* 3. Interactive Guest Reviews Board Section */}
      <section className="space-y-8 bg-surface-cream border-2 border-ink-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        <div>
          <span className="font-oswald text-xs uppercase tracking-[0.2em] text-accent-vermilion font-bold block mb-1">
            GUESTBOOK CHRONICLES
          </span>
          <h2 className="font-anton text-4xl uppercase tracking-tight text-ink-black leading-none mb-2">
            EXPERIENCES FROM THE MONOLITH BOARD
          </h2>
          <p className="font-serif text-secondary text-sm max-w-2xl leading-relaxed">
            At the close of each service, diners are invited to leave a hand-written note in the convent's record book. Read previous notes below or record your own digital memory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* List of Reviews (Left 7-columns) */}
          <div className="lg:col-span-7 space-y-6">
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-white border-2 border-ink-black p-6 space-y-3 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none transition-shadow">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-anton text-[15px] text-ink-black uppercase tracking-wide">{rev.author}</h4>
                    <span className="text-accent-vermilion font-oswald text-[10px] uppercase tracking-widest font-black block">{rev.location}</span>
                  </div>
                  <span className="text-secondary font-serif text-xs italic shrink-0">{rev.date}</span>
                </div>

                {/* Rating Stars render */}
                <div className="flex gap-1 text-[#FF4D00]">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-serif text-secondary text-sm leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>
            ))}
          </div>

          {/* Leave a review form (Right 5-columns) */}
          <div className="lg:col-span-5 bg-surface-tan border-2 border-ink-black p-6 space-y-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
            <h4 className="font-anton text-xl uppercase tracking-tight text-ink-black flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent-vermilion shrink-0" /> ADD JOURNAL NOTE
            </h4>

            {submitted && (
              <div className="bg-white border-2 border-emerald-500 text-emerald-800 p-3 font-oswald text-[10px] uppercase tracking-widest font-black text-center">
                ✓ Journal Note Persisted on Board
              </div>
            )}

            <form onSubmit={handleAddReview} className="space-y-4 font-oswald text-[11px] uppercase tracking-wider font-extrabold text-ink-black">
              <div>
                <label className="block mb-1.5">Your Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Matteo Rossini"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full bg-white border-2 border-ink-black py-2.5 px-3 outline-none text-ink-black font-oswald text-xs uppercase tracking-wider focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none placeholder:text-secondary/50"
                />
              </div>

              <div>
                <label className="block mb-1.5">Your Location</label>
                <input 
                  type="text" 
                  placeholder="e.g. Savona, Italy"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full bg-white border-2 border-ink-black py-2.5 px-3 outline-none text-ink-black font-oswald text-xs uppercase tracking-wider focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none placeholder:text-secondary/50"
                />
              </div>

              <div>
                <label className="block mb-1.5">Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setNewRating(val)}
                      className={`w-8 h-8 border-2 border-ink-black flex items-center justify-center font-anton text-sm cursor-pointer transition-colors ${
                        newRating >= val ? 'bg-[#FF4D00] text-white border-[#FF4D00]' : 'bg-white text-ink-black hover:bg-surface-cream'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-1.5">Your Experience *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Record your thoughts on the three acts, the pine smoke tartare, or the convent atmosphere..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full bg-white border-2 border-ink-black py-2.5 px-3 outline-none text-ink-black font-oswald text-xs uppercase tracking-wider focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none resize-none placeholder:text-secondary/50"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ink-black text-white hover:bg-accent-vermilion transition-colors py-3 font-anton uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 cursor-pointer shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none"
              >
                Submit to Guestbook <Send className="w-3.5 h-3.5" />
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
