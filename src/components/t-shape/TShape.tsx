import { useState, useCallback } from 'react';
import { HorizontalBar } from './HorizontalBar';
import { VerticalStem } from './VerticalStem';
import { SkillDetailPanel } from './SkillDetailPanel';
import { Section } from '../layout/Section';
import type { TechnologyDomain } from '../../types';

export function TShape() {
  const [selected, setSelected] = useState<TechnologyDomain | null>(null);
  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <Section id="t-shape" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            The <span className="text-android">T</span>-Shape
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Deep expertise in native Android engineering, with broad mastery spanning
            Flutter, .NET, React, Python, DevOps, and more.
          </p>
          <p className="text-xs text-text-dim mt-3 font-mono">
            Hover to preview &middot; Click to explore
          </p>
        </div>

        <HorizontalBar onSelect={setSelected} />
        <VerticalStem onSelect={setSelected} />
      </div>

      <SkillDetailPanel domain={selected} onClose={handleClose} />
    </Section>
  );
}
