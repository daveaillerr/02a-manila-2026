'use client';

import { Avatar, AvatarFallback } from './ui/avatar';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Section, SectionTitle, ScrollObserver } from './Layout';

/**
 * TeamPage Component
 * 
 * Updated to match the "Organizing Team" reference image.
 * Features a horizontal card layout with initials-based avatars 
 * and left-aligned social links.
 */

const team = [
  {
    name: "Alex Chen",
    role: "Event Lead",
    initials: "AC",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Maria Santos",
    role: "Tech Organizer",
    initials: "MS",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "David Park",
    role: "Operations",
    initials: "DP",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Jessica Wong",
    role: "Community",
    initials: "JW",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Miguel Rodriguez",
    role: "Mentorship",
    initials: "MR",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Sophie Laurent",
    role: "Partnerships",
    initials: "SL",
    social: { twitter: "#", linkedin: "#", github: "#" }
  }
];

export function TeamPage() {
  return (
    <Section id="team" className="border-b border-border/50">
      <ScrollObserver>
        <div className="mb-12">
          <SectionTitle className="text-4xl md:text-5xl font-bold text-white mb-2">
            Organizing Team
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="p-8 bg-[#0a0a0a] border border-white/5 rounded-xl transition-all hover:bg-white/[0.02]"
            >
              {/* Top Row: Avatar and Info */}
              <div className="flex items-center gap-5 mb-8">
                <Avatar className="w-14 h-14 bg-white/10 border border-white/10">
                  <AvatarFallback className="text-white font-bold text-base">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white/40">
                    {member.role}
                  </p>
                </div>
              </div>
              
              {/* Bottom Row: Social Links */}
              <div className="flex items-center gap-4">
                <a href={member.social.twitter} className="text-white/40 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={member.social.linkedin} className="text-white/40 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.social.github} className="text-white/40 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </ScrollObserver>
    </Section>
  );
}
