'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Section, SectionTitle, ScrollObserver } from './Layout';

/**
 * PoliciesPage Component
 * 
 * Restored to original UI design with standard Accordion styling.
 */

const policies = [
  {
    title: "Code of Conduct",
    content: "We are committed to providing a friendly, safe, and welcoming environment for all, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality."
  },
  {
    title: "Participation Rules",
    content: "All projects built during the event must be new. Use of open-source frameworks and libraries is encouraged. All participants must be present (physically or virtually) for the duration of the build day."
  },
  {
    title: "Intellectual Property",
    content: "Participants own the intellectual property of the projects they build during Zero to Agent Manila. We encourage sharing and open-sourcing projects to benefit the global developer community."
  },
  {
    title: "Support & Mentorship",
    content: "Technical mentors will be available throughout the day. However, participants are expected to have a baseline understanding of development and AI tools."
  }
];

export function PoliciesPage() {
  return (
    <Section id="policies" className="border-b border-border/50">
      <ScrollObserver>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>Rules & Policies</SectionTitle>
            <p className="text-foreground/60">
              The essential guidelines for all Manila chapter participants.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {policies.map((policy, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  {policy.title}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/60 leading-relaxed">
                  {policy.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollObserver>
    </Section>
  );
}
