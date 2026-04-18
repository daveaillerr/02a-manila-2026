'use client';

import { Users, Code, Trophy, Zap } from 'lucide-react';
import { Section, SectionTitle, ScrollObserver } from './Layout';

/**
 * EventPage Component
 * 
 * Redesigned to match the "Event Details" reference image.
 * Features a 4-column breakdown of participation, activities, rewards, and format.
 */

const eventHighlights = [
  {
    icon: <Users className="w-8 h-8 text-white/40" />,
    title: "Who Should Join",
    items: [
      "Software engineers",
      "Data engineers",
      "Indie hackers",
      "Startup founders"
    ]
  },
  {
    icon: <Code className="w-8 h-8 text-white/40" />,
    title: "What You'll Do",
    items: [
      "Build AI agents using v0 + Vercel",
      "Deploy a working product",
      "Collaborate with developers globally",
      "Learn cutting-edge AI tools"
    ]
  },
  {
    icon: <Trophy className="w-8 h-8 text-white/40" />,
    title: "Rewards",
    items: [
      "Global prizes worth $6,000+",
      "Networking opportunities",
      "Mentorship from Vercel team",
      "Showcase your work globally"
    ]
  },
  {
    icon: <Zap className="w-8 h-8 text-white/40" />,
    title: "Format",
    items: [
      "Solo participation (no teams)",
      "One-day intensive build",
      "Live event in Metro Manila",
      "Online participation available"
    ]
  }
];

export function EventPage() {
  return (
    <Section id="event-details" className="border-b border-border/50">
      <ScrollObserver>
        <div className="mb-16">
          <SectionTitle className="text-4xl md:text-5xl font-bold text-white text-left mb-2">
            Event Details
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventHighlights.map((highlight) => (
            <div 
              key={highlight.title} 
              className="p-8 bg-[#0a0a0a] border border-white/5 rounded-xl transition-all hover:bg-white/[0.02] flex flex-col items-start"
            >
              <div className="mb-6">
                {highlight.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">
                {highlight.title}
              </h3>
              
              <ul className="space-y-4">
                {highlight.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-white/50 leading-relaxed font-mono tracking-tight">
                    <span className="mr-2 opacity-50">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollObserver>
    </Section>
  );
}
