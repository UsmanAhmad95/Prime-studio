import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle2, BellRing, Sparkles, ArrowRight } from 'lucide-react';

export const BookingSystemFlow: React.FC<{ onAddBooking: () => void }> = ({ onAddBooking }) => {
  // Live interactive simulator state
  const [simStep, setSimStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>('Comprehensive Consultation');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 10:30 AM');
  const [clientName, setClientName] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  const services = [
    { name: 'Comprehensive Consultation', duration: '45 mins', fee: '$150 / Deposit' },
    { name: 'On-Site Diagnostic Assessment', duration: '60 mins', fee: 'Free / Fixed' },
    { name: 'Executive Strategy Session', duration: '30 mins', fee: '$250 / Hour' },
  ];

  const slots = [
    'Tomorrow, 09:00 AM',
    'Tomorrow, 10:30 AM',
    'Tomorrow, 02:00 PM',
    'Thursday, 11:00 AM',
    'Thursday, 03:30 PM',
  ];

  const handleSimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName) return;
    setIsBooked(true);
  };

  const handleResetSim = () => {
    setIsBooked(false);
    setSimStep(1);
    setClientName('');
  };

  return (
    <div className="rounded-2xl bg-[#0b0b10] border border-[#20202e] p-6 sm:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>Integrated Booking Engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Frictionless Appointment & Calendar Synchronization
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-xl">
            Booking is not an isolated website — it is a core revenue engine integrated into clinics, law firms, consultants, salons, and contractors.
          </p>
        </div>
        <button
          onClick={onAddBooking}
          className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46] transition-all whitespace-nowrap self-start md:self-center"
        >
          Add Booking To My Website
        </button>
      </div>

      {/* 6-Stage Booking Flow Line */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {[
          { num: '01', title: 'Service', desc: 'Select treatment or project' },
          { num: '02', title: 'Live Date', desc: 'Real-time calendar availability' },
          { num: '03', title: 'Time Slot', desc: 'Buffer-controlled slots' },
          { num: '04', title: 'Client Info', desc: 'Intake questions & phone' },
          { num: '05', title: 'Confirmation', desc: 'Google / Apple Cal sync' },
          { num: '06', title: 'SMS Reminder', desc: 'Zero no-show alert' },
        ].map((f, i) => (
          <div key={i} className="p-3 rounded-xl bg-[#12121a] border border-[#1e1e2c]">
            <span className="text-[10px] font-mono text-[#d4af37]">{f.num}</span>
            <p className="text-xs font-bold text-white mt-1">{f.title}</p>
            <p className="text-[10px] text-[#8e8e99] mt-0.5">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Interactive Simulator Box */}
      <div className="p-5 rounded-xl bg-[#12121c] border border-[#262638] space-y-4">
        <div className="flex items-center justify-between border-b border-[#212130] pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Live Interactive Booking Simulator (Test Experience)
            </h4>
          </div>
          <span className="text-[10px] font-mono text-[#a1a1aa]">Client View Simulation</span>
        </div>

        {!isBooked ? (
          <div className="space-y-4">
            {/* Step 1: Pick service */}
            <div>
              <label className="text-[11px] font-medium text-[#d1d1d6] block mb-1.5">
                Step 1: Choose Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {services.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setSelectedService(s.name)}
                    className={`p-2.5 rounded-lg text-left text-xs transition-all ${
                      selectedService === s.name
                        ? 'bg-[#1e1e2d] border border-[#d4af37] text-white'
                        : 'bg-[#151520] border border-[#232332] text-[#a1a1aa] hover:border-[#d4af37]/40'
                    }`}
                  >
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-[10px] text-[#d4af37] mt-1">{s.duration} • {s.fee}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pick time */}
            <div>
              <label className="text-[11px] font-medium text-[#d1d1d6] block mb-1.5">
                Step 2: Select Live Slot
              </label>
              <div className="flex flex-wrap gap-2">
                {slots.map((sl) => (
                  <button
                    key={sl}
                    type="button"
                    onClick={() => setSelectedDate(sl)}
                    className={`px-3 py-1.5 rounded-md text-xs transition-all ${
                      selectedDate === sl
                        ? 'bg-[#d4af37] text-[#07070a] font-semibold'
                        : 'bg-[#171723] text-[#a1a1aa] border border-[#232332] hover:text-white'
                    }`}
                  >
                    {sl}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Enter name */}
            <form onSubmit={handleSimSubmit} className="flex flex-col sm:flex-row gap-2 pt-2">
              <input
                type="text"
                placeholder="Enter client name (e.g. John Smith)"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
                className="flex-1 px-3.5 py-2 text-xs bg-[#171722] border border-[#252535] rounded-lg text-white placeholder-[#686875] focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold bg-[#d4af37] text-[#08080a] rounded-lg hover:bg-[#e2bd46] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Simulate Instant Confirmation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        ) : (
          <div className="p-4 rounded-lg bg-[#161c16] border border-emerald-500/40 text-left space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Appointment Successfully Scheduled!
              </span>
            </div>
            <p className="text-xs text-[#d1d1d6]">
              Booked for <strong className="text-white">{clientName}</strong>: <span className="text-[#f3e5ab]">{selectedService}</span> on <span className="text-[#f3e5ab]">{selectedDate}</span>.
            </p>
            <p className="text-[11px] text-[#8e8e99]">
              Automated actions executed: Google Calendar invite dispatched (.ics) • SMS reminder queued for 2 hours prior • Technician notified.
            </p>
            <button
              onClick={handleResetSim}
              className="mt-2 text-xs text-[#d4af37] hover:underline"
            >
              ← Test another booking simulation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
