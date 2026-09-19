import React, { useState } from 'react';
import { MessageSquare, Target, Calendar, PhoneCall, Zap, Send, Bot, User, CheckCircle2, Play, Volume2, ArrowRight } from 'lucide-react';
import { AI_SOLUTIONS } from '../data/content';

export const InteractiveAIPlayground: React.FC<{ onStartAIProject: () => void }> = ({ onStartAIProject }) => {
  const [selectedTab, setSelectedTab] = useState<'chat' | 'qualification' | 'booking' | 'voice' | 'automation'>('chat');

  // Interactive Chat State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'user', text: 'Do you provide emergency AC repair?' },
    { sender: 'bot', text: 'Yes, we do. We have on-duty certified HVAC technicians available 24/7. May I get your location and preferred service time?' },
  ]);
  const [inputChat, setInputChat] = useState('');

  // Interactive Qualification State
  const [qualStep, setQualStep] = useState(1);
  const [qualData, setQualData] = useState({
    customerType: 'Commercial Business',
    service: 'Full System Replacement',
    urgency: 'Emergency / Immediate (<24h)',
    budget: '$5,000 - $15,000',
    contact: ''
  });
  const [isQualified, setIsQualified] = useState(false);

  // Interactive Voice Simulator State
  const [callActive, setCallActive] = useState(false);
  const [callTranscriptStep, setCallTranscriptStep] = useState(0);

  const voiceScript = [
    { speaker: 'AI Receptionist', text: 'Thank you for calling Apex Climate Systems. My name is Alex, your automated concierge. How can I help you today?' },
    { speaker: 'Caller', text: 'Hi Alex, our office cooling went out and the server room is overheating. We need someone ASAP.' },
    { speaker: 'AI Receptionist', text: 'I understand the urgency for server room cooling. I am paging our emergency on-call commercial technician right now. What is your office address and contact phone?' },
    { speaker: 'Caller', text: 'We are at 450 Commerce Blvd, Suite 200. Call me back on this number.' },
    { speaker: 'AI Receptionist', text: 'Confirmed. Lead dispatched to Technician Marcus via high-priority SMS. ETA confirmation is being texted to your device now.' },
  ];

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputChat.trim()) return;

    const userText = inputChat;
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputChat('');

    setTimeout(() => {
      let botResponse = "Thank you! I've noted that requirement. Would you like me to book an appointment or route this directly to our specialist?";
      if (userText.toLowerCase().includes('location') || userText.toLowerCase().includes('address') || userText.toLowerCase().includes('downtown')) {
        botResponse = "Great, our team covers that entire zone. I have an opening tomorrow at 10:00 AM or 2:30 PM. Would either work for you?";
      } else if (userText.toLowerCase().includes('quote') || userText.toLowerCase().includes('price') || userText.toLowerCase().includes('cost')) {
        botResponse = "Our basic diagnostic starts with transparent upfront pricing. Let me gather a few details so we can send an exact quote to your email.";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600);
  };

  const handleAdvanceCall = () => {
    if (!callActive) {
      setCallActive(true);
      setCallTranscriptStep(0);
    } else if (callTranscriptStep < voiceScript.length - 1) {
      setCallTranscriptStep(prev => prev + 1);
    } else {
      setCallActive(false);
      setCallTranscriptStep(0);
    }
  };

  return (
    <div id="ai-solutions-playground" className="space-y-8">
      {/* Tab Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#1f1f2b] pb-4">
        <button
          onClick={() => setSelectedTab('chat')}
          className={`p-3 rounded-xl text-left transition-all flex items-center gap-2.5 ${
            selectedTab === 'chat'
              ? 'bg-[#1a1a26] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
              : 'text-[#8e8e99] hover:text-white bg-[#0f0f15]'
          }`}
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <div>
            <p className="text-xs font-bold">AI Chat Agent</p>
            <p className="text-[10px] text-[#70707a] hidden sm:block">Conversational triage</p>
          </div>
        </button>

        <button
          onClick={() => setSelectedTab('qualification')}
          className={`p-3 rounded-xl text-left transition-all flex items-center gap-2.5 ${
            selectedTab === 'qualification'
              ? 'bg-[#1a1a26] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
              : 'text-[#8e8e99] hover:text-white bg-[#0f0f15]'
          }`}
        >
          <Target className="w-4 h-4 shrink-0" />
          <div>
            <p className="text-xs font-bold">Lead Qualifier</p>
            <p className="text-[10px] text-[#70707a] hidden sm:block">Intent & budget triage</p>
          </div>
        </button>

        <button
          onClick={() => setSelectedTab('booking')}
          className={`p-3 rounded-xl text-left transition-all flex items-center gap-2.5 ${
            selectedTab === 'booking'
              ? 'bg-[#1a1a26] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
              : 'text-[#8e8e99] hover:text-white bg-[#0f0f15]'
          }`}
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <div>
            <p className="text-xs font-bold">Booking Agent</p>
            <p className="text-[10px] text-[#70707a] hidden sm:block">Automated scheduling</p>
          </div>
        </button>

        <button
          onClick={() => setSelectedTab('voice')}
          className={`p-3 rounded-xl text-left transition-all flex items-center gap-2.5 ${
            selectedTab === 'voice'
              ? 'bg-[#1a1a26] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
              : 'text-[#8e8e99] hover:text-white bg-[#0f0f15]'
          }`}
        >
          <PhoneCall className="w-4 h-4 shrink-0" />
          <div>
            <p className="text-xs font-bold">AI Voice Agent</p>
            <p className="text-[10px] text-[#70707a] hidden sm:block">24/7 Receptionist</p>
          </div>
        </button>

        <button
          onClick={() => setSelectedTab('automation')}
          className={`p-3 rounded-xl text-left transition-all flex items-center gap-2.5 ${
            selectedTab === 'automation'
              ? 'bg-[#1a1a26] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
              : 'text-[#8e8e99] hover:text-white bg-[#0f0f15]'
          }`}
        >
          <Zap className="w-4 h-4 shrink-0" />
          <div>
            <p className="text-xs font-bold">AI Automation</p>
            <p className="text-[10px] text-[#70707a] hidden sm:block">Connected pipeline</p>
          </div>
        </button>
      </div>

      {/* 1. CHAT AGENT DEMO */}
      {selectedTab === 'chat' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
              Domain-Specific Interactive Assistant
            </span>
            <h3 className="text-2xl font-bold text-white">
              Engage Visitors, Answer Inquiries & Qualify Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
              An AI chat agent does not merely quote generic copy. It answers detailed service queries, verifies availability, and captures name, phone, and project urgency directly into your CRM.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Understands business-specific pricing parameters and service tiers</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Captures lead specifications and pushes them to your sales phone</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Transfers directly to human agents when complex needs arise</span>
              </div>
            </div>

            <button
              onClick={onStartAIProject}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46]"
            >
              Deploy AI Chat for Your Business
            </button>
          </div>

          <div className="lg:col-span-7 rounded-xl bg-[#0e0e14] border border-[#262638] overflow-hidden flex flex-col h-[400px]">
            <div className="p-3 bg-[#14141e] border-b border-[#222230] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-[#09090c]">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-white">Prime AI Assistant Demo</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">● LIVE AGENT ACTIVE</span>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 text-xs ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-[#1e1e2c] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                      <Bot className="w-3 h-3" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      msg.sender === 'user'
                        ? 'bg-[#d4af37] text-[#08080a] font-medium'
                        : 'bg-[#181824] text-[#e1e1e8] border border-[#28283a]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Chat Input */}
            <form onSubmit={handleSendChat} className="p-2.5 bg-[#12121c] border-t border-[#20202e] flex gap-2">
              <input
                type="text"
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
                placeholder="Type a question (e.g., 'What is your location?' or 'Do you have weekend slots?')"
                className="flex-1 px-3 py-1.5 text-xs bg-[#181824] border border-[#272738] rounded-lg text-white placeholder-[#70707a] focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#d4af37] text-[#09090c] rounded-lg text-xs font-bold hover:bg-[#e2bd46]"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. LEAD QUALIFIER DEMO */}
      {selectedTab === 'qualification' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
              Opportunity Triage Engine
            </span>
            <h3 className="text-2xl font-bold text-white">
              Filter High-Ticket Prospects Automatically
            </h3>
            <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
              Never let your sales staff spend hours calling unqualified inquiries. The AI Qualifier asks the critical budget, timeline, and scope questions upfront.
            </p>
            <div className="space-y-2 pt-2 text-xs text-[#d1d1d6]">
              <p>• Gathers customer type, project scale & geographic location</p>
              <p>• Validates budget suitability against your minimum engagement fee</p>
              <p>• Scores lead urgency (Emergency vs Planning Phase)</p>
            </div>
            <button
              onClick={onStartAIProject}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46]"
            >
              Add AI Lead Qualification
            </button>
          </div>

          <div className="lg:col-span-7 p-6 rounded-xl bg-[#0e0e14] border border-[#262638] space-y-4">
            <div className="flex items-center justify-between border-b border-[#212130] pb-3">
              <span className="text-xs font-bold text-white">Interactive Qualification Questionnaire</span>
              <span className="text-xs font-mono text-[#d4af37]">Step {qualStep} of 4</span>
            </div>

            {qualStep === 1 && (
              <div className="space-y-3">
                <label className="text-xs font-semibold text-white">What category of project do you need?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['Commercial Business', 'Residential Enterprise', 'Industrial Infrastructure', 'Government Agency'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => { setQualData(prev => ({ ...prev, customerType: type })); setQualStep(2); }}
                      className="p-3 text-left text-xs rounded-lg bg-[#161622] hover:bg-[#202030] border border-[#242434] hover:border-[#d4af37] text-white"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {qualStep === 2 && (
              <div className="space-y-3">
                <label className="text-xs font-semibold text-white">What is your expected timeline / urgency?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['Emergency (< 24 Hours)', 'Within 1-2 Weeks', 'Within 30-60 Days', 'Preliminary Budget Planning'].map(urg => (
                    <button
                      key={urg}
                      type="button"
                      onClick={() => { setQualData(prev => ({ ...prev, urgency: urg })); setQualStep(3); }}
                      className="p-3 text-left text-xs rounded-lg bg-[#161622] hover:bg-[#202030] border border-[#242434] hover:border-[#d4af37] text-white"
                    >
                      {urg}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {qualStep === 3 && (
              <div className="space-y-3">
                <label className="text-xs font-semibold text-white">Target Investment / Budget Range</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['$2,500 - $5,000', '$5,000 - $15,000', '$15,000 - $50,000', '$50,000+ Enterprise'].map(bud => (
                    <button
                      key={bud}
                      type="button"
                      onClick={() => { setQualData(prev => ({ ...prev, budget: bud })); setQualStep(4); }}
                      className="p-3 text-left text-xs rounded-lg bg-[#161622] hover:bg-[#202030] border border-[#242434] hover:border-[#d4af37] text-white"
                    >
                      {bud}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {qualStep === 4 && (
              <div className="p-4 rounded-lg bg-[#141b14] border border-emerald-500/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">Lead Qualified for Priority Routing!</span>
                </div>
                <div className="text-xs text-[#d1d1d6] space-y-1">
                  <p><strong>Category:</strong> {qualData.customerType}</p>
                  <p><strong>Urgency:</strong> {qualData.urgency}</p>
                  <p><strong>Budget Tier:</strong> {qualData.budget}</p>
                  <p className="text-[#a1a1aa] text-[11px] pt-1">
                    Structured lead packet generated and ready to dispatch to Account Executive.
                  </p>
                </div>
                <button
                  onClick={() => setQualStep(1)}
                  className="text-xs text-[#d4af37] hover:underline pt-2 block"
                >
                  ← Reset Qualification Test
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. BOOKING AGENT DEMO */}
      {selectedTab === 'booking' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
              Calendar AI Synchronization
            </span>
            <h3 className="text-2xl font-bold text-white">
              Conversational & Widget-Driven Appointment Booking
            </h3>
            <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
              Understands plain language requests like &quot;I need an emergency assessment next Tuesday afternoon&quot;, validates staff schedules, and books the slot automatically.
            </p>
            <div className="space-y-2 text-xs text-[#d1d1d6]">
              <p>• Multi-staff availability coordination</p>
              <p>• Automated deposit collection or card-on-file</p>
              <p>• Two-way sync with Google Calendar and Apple iCal</p>
            </div>
            <button
              onClick={onStartAIProject}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46]"
            >
              Add AI Booking Agent
            </button>
          </div>

          <div className="lg:col-span-7 p-6 rounded-xl bg-[#0e0e14] border border-[#262638] space-y-4">
            <div className="flex items-center justify-between border-b border-[#212130] pb-2">
              <span className="text-xs font-bold text-white">Conversational Booking Simulation</span>
              <span className="text-[10px] font-mono text-[#d4af37]">Live Slot Matching</span>
            </div>
            <div className="p-3 rounded-lg bg-[#14141e] border border-[#222232] text-xs text-[#d1d1d6] space-y-2">
              <p className="text-[#a1a1aa] font-mono text-[10px]">CUSTOMER PROMPT:</p>
              <p className="italic text-white">&quot;Do you have any time for an in-person site inspection this Thursday around 2pm?&quot;</p>
              <p className="text-[#d4af37] font-mono text-[10px] pt-2">AI AGENT EVALUATION:</p>
              <p className="text-xs text-emerald-400">✓ Thursday 2:00 PM is verified available on Senior Inspector Calendar.</p>
              <p className="text-xs text-[#b8b8c2]">Generated Slot: <strong>Thursday, Sep 24 @ 2:00 PM – 2:45 PM</strong></p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#a1a1aa]">Automated Calendar Invite (.ics) ready</span>
              <button
                onClick={onStartAIProject}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#09090c] hover:bg-[#e5c158]"
              >
                Confirm Booking Flow →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. VOICE AGENT / RECEPTIONIST DEMO */}
      {selectedTab === 'voice' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
              Your AI Receptionist
            </span>
            <h3 className="text-2xl font-bold text-white">
              Answer 100% of Calls. 24/7/365.
            </h3>
            <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
              Never let an after-hours emergency or high-ticket client get redirected to voicemail. Your AI Receptionist answers with a polished voice, answers routine FAQs, captures caller details, and schedules visits.
            </p>
            <div className="space-y-2 text-xs text-[#d1d1d6]">
              <p>• Zero missed calls during lunch breaks, weekends, or late nights</p>
              <p>• Instant call transcript and MP3 recording sent to your email</p>
              <p>• Urgent emergency caller transfer to on-duty staff phones</p>
            </div>
            <button
              onClick={onStartAIProject}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46]"
            >
              Configure AI Receptionist
            </button>
          </div>

          <div className="lg:col-span-7 p-6 rounded-xl bg-[#0e0e14] border border-[#262638] space-y-4">
            <div className="flex items-center justify-between border-b border-[#212130] pb-3">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs font-bold text-white">Live Call Scenario Simulation</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${callActive ? 'bg-red-500/20 text-red-400' : 'bg-[#1b1b26] text-[#8e8e99]'}`}>
                {callActive ? '● CALL IN PROGRESS' : 'READY TO SIMULATE'}
              </span>
            </div>

            {/* Simulated audio waveform visualizer */}
            <div className="h-14 bg-[#14141f] rounded-lg border border-[#222232] flex items-center justify-center gap-1 px-4">
              {[12, 28, 45, 18, 52, 34, 60, 42, 24, 50, 36, 18, 48, 30, 16].map((h, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 rounded-full transition-all duration-150 ${
                    callActive ? 'bg-[#d4af37] animate-pulse' : 'bg-[#29293a]'
                  }`}
                  style={{ height: callActive ? `${h}px` : '6px' }}
                />
              ))}
            </div>

            {/* Transcript Display */}
            <div className="min-h-[120px] p-4 rounded-lg bg-[#111119] border border-[#20202e] space-y-2">
              {callActive ? (
                <div>
                  <span className="text-[10px] font-mono text-[#d4af37] uppercase">
                    {voiceScript[callTranscriptStep].speaker}
                  </span>
                  <p className="text-xs text-white mt-1 leading-relaxed">
                    &quot;{voiceScript[callTranscriptStep].text}&quot;
                  </p>
                </div>
              ) : (
                <p className="text-xs text-[#70707a] text-center pt-8">
                  Click below to simulate an incoming emergency call conversation.
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-[#8e8e99]">
                {callActive ? `Dialogue turn ${callTranscriptStep + 1} of ${voiceScript.length}` : 'Simulate typical client scenario'}
              </span>
              <button
                onClick={handleAdvanceCall}
                className="px-4 py-2 text-xs font-semibold bg-[#d4af37] text-[#08080a] rounded-lg hover:bg-[#e2bd46] flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{callActive ? (callTranscriptStep < voiceScript.length - 1 ? 'Next Call Turn →' : 'End Call') : 'Start Call Simulation'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. CONNECTED AUTOMATION PIPELINE */}
      {selectedTab === 'automation' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
              End-to-End Operational Pipeline
            </span>
            <h3 className="text-2xl font-bold text-white">
              Website → AI → CRM → Email → SMS → Calendar → Sales Team
            </h3>
            <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
              We connect your website to your operational tools so no lead sits idle. Inquiries trigger automatic qualification, database logging, and immediate dispatch notifications.
            </p>
          </div>

          {/* Connected System Pipeline Graphic */}
          <div className="p-6 rounded-2xl bg-[#0d0d14] border border-[#242436] overflow-x-auto">
            <div className="flex items-center justify-between min-w-[700px] gap-2">
              {[
                { name: 'Website Form', role: 'Traffic Influx', icon: '01' },
                { name: 'AI Triage Agent', role: 'Qualification', icon: '02' },
                { name: 'CRM Database', role: 'Record Creation', icon: '03' },
                { name: 'Email Sequence', role: 'Confirmation', icon: '04' },
                { name: 'SMS Dispatch', role: 'Sales Team Ping', icon: '05' },
                { name: 'Calendar Sync', role: 'Appointment Set', icon: '06' },
                { name: 'Sales Closer', role: 'Revenue Close', icon: '07' },
              ].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="p-3 rounded-xl bg-[#14141e] border border-[#222232] text-center w-28 shrink-0">
                    <span className="text-[10px] font-mono text-[#d4af37] font-bold">{step.icon}</span>
                    <p className="text-xs font-bold text-white mt-1 line-clamp-1">{step.name}</p>
                    <p className="text-[9px] text-[#8e8e99] mt-0.5">{step.role}</p>
                  </div>
                  {idx < 6 && (
                    <ArrowRight className="w-4 h-4 text-[#d4af37] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
