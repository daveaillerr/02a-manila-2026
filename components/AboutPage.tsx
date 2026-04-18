'use client';

import { Section, SectionTitle, SectionDescription, ScrollObserver } from './Layout';

/**
 * AboutPage Component
 * 
 * Restored to original UI design with exact spacing and typography.
 */

export function AboutPage() {
  return (
    <Section id="about" className="bg-card/50 border-b border-border/50">
      <ScrollObserver>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle>About Zero to Agent</SectionTitle>
            <SectionDescription className="mb-8">
              Zero to Agent is a global build week bringing together developers, founders, and builders to create AI agents from scratch using modern tools and frameworks. This event focuses on shipping real products in a high-intensity environment.
            </SectionDescription>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Global Impact</h4>
                <p className="text-foreground/60">Happening across 20+ countries worldwide simultaneously.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Technical Focus</h4>
                <p className="text-foreground/60">Deep dive into AI agentic workflows and LLM orchestration.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Ship Culture</h4>
                <p className="text-foreground/60">Go from zero to a deployed agent product by the end of the day.</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg border border-border/50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-foreground/20 mb-4">20+</div>
              <p className="text-foreground/60 uppercase tracking-widest text-sm font-mono">Countries</p>
            </div>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
