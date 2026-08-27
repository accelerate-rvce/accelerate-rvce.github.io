import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resources } from '../data/resources';
import { Terminal, ExternalLink } from 'lucide-react';

type CategoryType = 'All' | 'Beginner' | 'Web Development' | 'AI / ML' | 'Cybersecurity' | 'Competitive Programming' | 'GitHub & Open Source' | 'Hackathons';

export const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const categories: CategoryType[] = [
    'All',
    'Beginner',
    'Web Development',
    'AI / ML',
    'Cybersecurity',
    'Competitive Programming',
    'GitHub & Open Source',
    'Hackathons'
  ];

  const filteredResources = activeCategory === 'All'
    ? resources
    : resources.filter(r => r.category === activeCategory || (activeCategory === 'Beginner' && r.level === 'Beginner'));

  const getDifficultyStyles = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-emerald-950/20 text-emerald-400 border-emerald-900/30';
      case 'Intermediate':
        return 'bg-cyan-950/20 text-brand-cyan border-cyan-900/30';
      case 'Advanced':
        return 'bg-purple-950/20 text-brand-purple border-purple-900/30';
      default:
        return 'bg-brand-surface text-brand-muted border-brand-border';
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded border border-brand-border bg-brand-surface mb-6">
            <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-mono text-[9px] tracking-widest text-brand-muted uppercase font-semibold">
              CURATED LEARNING INDEX
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-brand-white uppercase leading-none">
            LEARNING LIBRARY
          </h1>
          <p className="mt-4 text-brand-muted text-xs sm:text-sm leading-relaxed max-w-xl">
            A directory of learning pathways, documentation sites, and roadmaps curated by technical leads to support active engineering exploration.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-start gap-1.5 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded border text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-white text-brand-black border-brand-white'
                  : 'bg-brand-surface text-brand-muted border-brand-border hover:text-brand-white hover:border-brand-cyan'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredResources.map((res) => (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                key={res.title}
                className="p-5 rounded border border-brand-border bg-brand-surface flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <span className="font-mono text-[8px] px-2 py-0.5 rounded border text-brand-cyan border-brand-cyan/20 uppercase tracking-widest">
                      {res.category}
                    </span>
                    <span className={`font-mono text-[8px] px-2 py-0.5 rounded border uppercase tracking-widest ${getDifficultyStyles(res.level)}`}>
                      {res.level}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-brand-white mb-2 leading-snug uppercase tracking-wide">
                    {res.title}
                  </h3>
                  <p className="text-brand-muted text-xs leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-brand-cyan hover:text-brand-white transition-colors mt-auto group"
                >
                  <span>ACCESS RESOURCE</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-20 font-mono text-xs text-brand-muted uppercase tracking-widest">
            No resources match this selection.
          </div>
        )}
      </div>
    </div>
  );
};
export default Resources;
