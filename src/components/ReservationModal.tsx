import React, { useState } from 'react';
import { X, Calendar, User, Clock, MessageSquare, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReservation: (res: Reservation) => void;
}

export default function ReservationModal({ isOpen, onClose, onAddReservation }: ReservationModalProps) {
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    time: '20:00',
    specialRequests: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('All marked fields (*) are required.');
      return;
    }

    const newRes: Reservation = {
      id: `res-${Math.random().toString(36).substr(2, 9)}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      guests: Number(formData.guests),
      date: formData.date,
      time: formData.time,
      specialRequests: formData.specialRequests,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    onAddReservation(newRes);
    setErrorMsg('');
    setSuccess(true);
  };

  const handleReset = () => {
    setSuccess(false);
    setErrorMsg('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: 2,
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: '20:00',
      specialRequests: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink-black/80 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="relative w-full max-w-lg bg-surface-cream border-2 border-ink-black shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] text-on-surface p-8 max-h-[90vh] overflow-y-auto"
        id="reservation-dialog"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ink-black hover:text-accent-vermilion transition-colors focus:ring-1 focus:ring-accent-vermilion outline-none cursor-pointer"
          title="Close Reservation Tab"
        >
          <X className="w-6 h-6" />
        </button>

        {!success ? (
          <div>
            <div className="mb-6 border-b-2 border-ink-black pb-4">
              <span className="font-oswald text-xs uppercase tracking-[0.2em] text-accent-vermilion block mb-1">
                Palazzo Santa Chiara
              </span>
              <h2 className="font-anton text-3xl uppercase tracking-wider text-ink-black">
                RESERVE A TABLE
              </h2>
            </div>

            {errorMsg && (
              <div className="bg-red-50 border-2 border-red-500 text-red-800 p-3 font-oswald text-xxs tracking-widest uppercase font-bold mb-4">
                ERROR: {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 font-oswald text-[11px] uppercase tracking-wider font-extrabold text-ink-black">
              {/* Guests Selector */}
              <div>
                <label className="block mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-accent-vermilion shrink-0" /> Number of Guests *
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: num })}
                      className={`py-2 px-1 text-center border-2 border-ink-black font-anton text-xs transition-colors cursor-pointer ${
                        formData.guests === num 
                          ? 'bg-ink-black text-white' 
                          : 'bg-white text-ink-black hover:bg-surface-tan'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                  <select
                    value={formData.guests > 5 ? formData.guests : 6}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="col-span-2 py-2 px-3 bg-white border-2 border-ink-black outline-none font-bold text-ink-black font-oswald h-full focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none"
                  >
                    <option value={6}>6 Guests</option>
                    <option value={8}>8 Guests</option>
                    <option value={10}>10 Guests</option>
                    <option value={12}>12 Guests</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent-vermilion shrink-0" /> Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full py-2.5 px-3 bg-white border-2 border-ink-black outline-none font-bold text-ink-black font-oswald text-xs focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-vermilion shrink-0" /> Preferred Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full py-2.5 px-3 bg-white border-2 border-ink-black outline-none font-bold text-ink-black font-oswald text-xs focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none"
                  >
                    <option value="12:30">12:30 (Fri/Sat Lunch)</option>
                    <option value="13:00">13:00 (Fri/Sat Lunch)</option>
                    <option value="13:30">13:30 (Fri/Sat Lunch)</option>
                    <option value="20:00">20:00 (Mon-Sat Dinner)</option>
                    <option value="20:30">20:30 (Mon-Sat Dinner)</option>
                    <option value="21:00">21:00 (Mon-Sat Dinner)</option>
                    <option value="21:30">21:30 (Mon-Sat Dinner)</option>
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 flex items-center gap-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Stefano Rossini"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3 bg-white border-2 border-ink-black outline-none font-bold text-ink-black font-oswald text-xs focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none placeholder:text-secondary/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent-vermilion shrink-0" /> Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="stefano@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full py-2.5 px-3 bg-white border-2 border-ink-black outline-none font-bold text-ink-black font-oswald text-xs focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none placeholder:text-secondary/50"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent-vermilion shrink-0" /> Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+39 333 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full py-2.5 px-3 bg-white border-2 border-ink-black outline-none font-bold text-ink-black font-oswald text-xs focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none placeholder:text-secondary/50"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block mb-1 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-accent-vermilion shrink-0" /> Allergies or Special Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us if you have any dietary restrictions or are celebrating a special occasion"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full py-2.5 px-3 bg-white border-2 border-ink-black outline-none font-bold text-ink-black font-oswald text-xs focus:ring-1 focus:ring-accent-vermilion focus:border-accent-vermilion rounded-none resize-none placeholder:text-secondary/50"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#FF4D00] text-white font-anton text-lg tracking-[0.2em] py-4 uppercase hover:bg-ink-black transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  CONFIRM DETAILS
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <CheckCircle2 className="w-20 h-20 text-accent-vermilion mx-auto mb-6 stroke-[1.5px]" />
            <h2 className="font-anton text-3xl uppercase tracking-tight text-ink-black mb-2">
              RESERVATION SECURED
            </h2>
            <div className="inline-block bg-surface-tan border border-ink-black/25 px-4 py-1 font-oswald uppercase tracking-widest text-xs font-black mb-6">
              Palazzo Santa Chiara, Savona
            </div>

            <div className="bg-white border-2 border-ink-black p-6 text-left max-w-sm mx-auto font-oswald space-y-3 mb-8 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
              <div className="flex justify-between border-b border-ink-black/10 pb-1.5 text-xs">
                <span className="text-secondary font-black">GUEST:</span>
                <span className="font-anton text-sm text-ink-black uppercase">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-ink-black/10 pb-1.5 text-xs">
                <span className="text-secondary font-black">COVERS:</span>
                <span className="font-bold">{formData.guests} {formData.guests === 1 ? 'Person' : 'People'}</span>
              </div>
              <div className="flex justify-between border-b border-ink-black/10 pb-1.5 text-xs">
                <span className="text-secondary font-black">DATE / TIME:</span>
                <span className="font-bold">{formData.date} at {formData.time}</span>
              </div>
              {formData.specialRequests && (
                <div className="text-xs pt-1">
                  <span className="text-secondary font-black block mb-1">NOTES:</span>
                  <p className="font-serif italic text-ink-black">"{formData.specialRequests}"</p>
                </div>
              )}
            </div>

            <p className="font-serif text-secondary max-w-xs mx-auto mb-8 text-sm text-center leading-relaxed">
              We have sent a digital confirmation card with directions to Palazzo Santa Chiara to <span className="text-ink-black font-semibold">{formData.email}</span>.
            </p>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-ink-black text-white font-oswald font-black text-xs uppercase tracking-widest hover:bg-accent-vermilion transition-colors cursor-pointer"
            >
              Back to Restaurant
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
