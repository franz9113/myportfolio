'use client';

import { useState } from 'react';
import { Code, Server, PenToolIcon as Tool, Heart } from 'lucide-react';
import { skills } from '@/data/portfolio-data';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  // Map category to icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code className='w-5 h-5 mr-2' />;
      case 'Backend':
        return <Server className='w-5 h-5 mr-2' />;
      case 'Tools & Others':
        return <Tool className='w-5 h-5 mr-2' />;
      case 'Soft Skills':
        return <Heart className='w-5 h-5 mr-2' />;
      default:
        return <Code className='w-5 h-5 mr-2' />;
    }
  };

  return (
    <section id='skills' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          My Skills
        </h2>

        {/* Category Pills */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {skills.map((skillGroup) => (
            <button
              key={skillGroup.category}
              onClick={() => setActiveCategory(skillGroup.category)}
              className={`
                flex items-center px-4 py-2 rounded-full transition-all
                ${
                  activeCategory === skillGroup.category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-[#1e1e1e] hover:bg-[#2a2a2a] text-white/80'
                }
              `}
            >
              {getCategoryIcon(skillGroup.category)}
              {skillGroup.category}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className='max-w-3xl mx-auto'>
          <h3 className='text-2xl font-bold mb-6 flex items-center'>
            {getCategoryIcon(activeCategory)}
            {activeCategory}
          </h3>

          <div className='space-y-6'>
            {skills
              .find((s) => s.category === activeCategory)
              ?.items.map((skill, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-lg'>{skill.name}</span>
                    <span className='text-primary font-medium'>
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className='h-2 w-full bg-[#2a2a2a] rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-primary/80 to-primary rounded-full'
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
