import React, { useState, useEffect, useRef } from 'react';
import { Globe, Users, Target, Bot, Zap, Database, ArrowRight, CheckCircle2 } from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  type: string;
  x: number; // percentage
  y: number; // percentage
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string>('website');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const nodes: NodeData[] = [
    {
      id: 'website',
      label: 'Website',
      type: 'Core Presentation',
      x: 18,
      y: 28,
      icon: Globe,
      description: 'High-speed authority storefront & conversion interface'
    },
    {
      id: 'leads',
      label: 'Leads',
      type: 'Capture Engine',
      x: 50,
      y: 18,
      icon: Target,
      description: 'Structured quote requests, calls & WhatsApp funnels'
    },
    {
      id: 'ai',
      label: 'AI Agents',
      type: 'Intelligence',
      x: 82,
      y: 28,
      icon: Bot,
      description: '24/7 Voice & Chat triage, qualification & scheduling'
    },
    {
      id: 'crm',
      label: 'CRM & Pipeline',
      type: 'Data Infrastructure',
      x: 24,
      y: 72,
      icon: Database,
      description: 'Real-time synchronization into customer database'
    },
    {
      id: 'automation',
      label: 'Automation',
      type: 'Operational Dispatch',
      x: 52,
      y: 82,
      icon: Zap,
      description: 'Instant SMS, team alerts, calendars & follow-up flows'
    },
    {
      id: 'customers',
      label: 'Customers',
      type: 'Commercial Outcome',
      x: 78,
      y: 70,
      icon: Users,
      description: 'Paying clients, booked appointments & verified revenue'
    },
  ];

  // Connections between nodes
  const connections = [
    { from: 'website', to: 'leads' },
    { from: 'leads', to: 'ai' },
    { from: 'leads', to: 'crm' },
    { from: 'ai', to: 'automation' },
    { from: 'crm', to: 'automation' },
    { from: 'automation', to: 'customers' },
    { from: 'website', to: 'crm' },
    { from: 'ai', to: 'customers' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const activeNodeInfo = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero-interactive-system"
      className="relative w-full max-w-2xl mx-auto h-[380px] sm:h-[440px] rounded-2xl bg-[#09090e]/80 border border-[#20202d] backdrop-blur-xl p-4 sm:p-6 overflow-hidden select-none transition-all duration-300 hover:border-[#d4af37]/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]"
      style={{
        transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)`
      }}
    >
      {/* Background technical grid and glowing concentric circles */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-[#d4af37]/5 via-transparent to-transparent pointer-events-none" />

      {/* Decorative HUD header */}
      <div className="flex items-center justify-between border-b border-[#1b1b24] pb-3 mb-2 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#d4af37]">
            Connected Digital Business Architecture
          </span>
        </div>
        <div className="text-[10px] font-mono text-[#8f9099] flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>REAL-TIME SYSTEM SYNC</span>
        </div>
      </div>

      {/* SVG Connecting Lines and animated data pulse */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {connections.map((conn, idx) => {
          const fromNode = nodes.find(n => n.id === conn.from)!;
          const toNode = nodes.find(n => n.id === conn.to)!;
          const isHighlighted = activeNode === conn.from || activeNode === conn.to;

          return (
            <g key={idx}>
              <line
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke={isHighlighted ? '#d4af37' : '#272736'}
                strokeWidth={isHighlighted ? 2 : 1}
                strokeDasharray={isHighlighted ? 'none' : '4 4'}
                filter={isHighlighted ? 'url(#glow)' : undefined}
                className="transition-all duration-300"
              />
              {/* Animated data packet traveling along active path */}
              {isHighlighted && (
                <circle
                  r="3"
                  fill="#f9e8a2"
                  filter="url(#glow)"
                  className="animate-pulse"
                >
                  <animateMotion
                    path={`M ${(fromNode.x / 100) * 580} ${(fromNode.y / 100) * 380} L ${(toNode.x / 100) * 580} ${(toNode.y / 100) * 380}`}
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Floating System Nodes */}
      <div className="relative w-full h-full z-10">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isActive = activeNode === node.id;

          return (
            <div
              key={node.id}
              id={`node-${node.id}`}
              onClick={() => setActiveNode(node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
            >
              <div
                className={`relative group flex flex-col items-center p-2 sm:p-2.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1b1b24] border-2 border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.35)] scale-110'
                    : 'bg-[#0f0f14]/90 border border-[#262636] hover:border-[#d4af37]/60 hover:bg-[#15151e]'
                }`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#d4af37] text-[#07070a]' : 'bg-[#181822] text-[#d4af37]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className={`mt-1 text-[10px] sm:text-xs font-semibold whitespace-nowrap tracking-wide transition-colors ${
                    isActive ? 'text-white' : 'text-[#a1a1aa]'
                  }`}
                >
                  {node.label}
                </span>

                {/* Status indicator dot */}
                <div
                  className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-[#09090e] ${
                    isActive ? 'bg-[#d4af37]' : 'bg-[#3b3b4d]'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Detail Card in Bottom Banner */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0d0d14]/95 border border-[#29293a] rounded-xl p-3 sm:p-3.5 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#181822] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
            <activeNodeInfo.icon className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h5 className="text-xs font-bold text-white tracking-wide">
                {activeNodeInfo.label}
              </h5>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#20202c] text-[#d4af37] font-mono">
                {activeNodeInfo.type}
              </span>
            </div>
            <p className="text-[11px] text-[#a1a1aa]">
              {activeNodeInfo.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-[#8f9099] font-mono self-end sm:self-center">
          <span>Click any node to inspect</span>
          <ArrowRight className="w-3 h-3 text-[#d4af37]" />
        </div>
      </div>
    </div>
  );
};
