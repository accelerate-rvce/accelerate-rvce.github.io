import React from 'react';
import { motion } from 'framer-motion';
import { teamGroups } from '../data/team';
import { Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import * as Tooltip from '@radix-ui/react-tooltip';

export const Team: React.FC = () => {
  // Helper to extract initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Tooltip.Provider delayDuration={150}>
      <div className="pt-28 pb-20 min-h-screen bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header (Left-aligned & Asymmetric) */}
          <div className="max-w-3xl mb-20 text-left">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded border border-brand-border bg-brand-surface mb-6">
              <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="font-mono text-[9px] tracking-widest text-brand-muted uppercase font-semibold">
                CLUB NETWORK STRUCTURE
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-brand-white uppercase leading-none">
              THE TEAM
            </h1>
            <p className="mt-4 text-brand-muted text-xs sm:text-sm leading-relaxed max-w-xl">
              Accelerate is led by students, guided by academic mentors, and supported by a global network of alumni engineering collectives.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-20">
            {teamGroups.map((group) => (
              <div key={group.category} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <h2 className="font-display font-extrabold text-lg sm:text-xl text-brand-white uppercase tracking-wider">
                    {group.category}
                  </h2>
                  <div className="h-[1px] flex-grow bg-brand-border" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.members.map((member, memberIdx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: memberIdx * 0.05 }}
                      className="p-5 rounded border border-brand-border bg-brand-surface hover:-translate-y-0.5 transition-transform duration-200 flex flex-col justify-between"
                    >
                      <div>
                        {/* Technical Initials representation */}
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button 
                              type="button" 
                              className="w-12 h-12 rounded border border-brand-border bg-brand-black flex items-center justify-center font-mono text-xs text-brand-cyan tracking-wider mb-4 cursor-help hover:border-brand-cyan transition-colors"
                            >
                              {getInitials(member.name)}
                            </button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              side="top"
                              align="center"
                              className="z-50 bg-brand-card border border-brand-border text-brand-white text-[10px] font-mono px-2 py-1 rounded shadow-lg uppercase tracking-wider"
                            >
                              Member: {member.name}
                              <Tooltip.Arrow className="fill-brand-border" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>

                        <h3 className="font-display font-bold text-sm text-brand-white uppercase tracking-wide">
                          {member.name}
                        </h3>
                        <p className="font-mono text-[9px] text-brand-muted uppercase tracking-widest mt-1">
                          {member.role}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-brand-border">
                        {member.github && (
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name} GitHub`}
                                className="text-brand-muted hover:text-brand-white transition-colors"
                              >
                                <GithubIcon className="w-4 h-4" />
                              </a>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                side="bottom"
                                align="center"
                                className="z-50 bg-brand-card border border-brand-border text-brand-white text-[9px] font-mono px-2 py-1 rounded shadow-lg uppercase tracking-wider"
                              >
                                GitHub Profile
                                <Tooltip.Arrow className="fill-brand-border" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        )}
                        {member.linkedin && (
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name} LinkedIn`}
                                className="text-brand-muted hover:text-brand-white transition-colors"
                              >
                                <LinkedinIcon className="w-4 h-4" />
                              </a>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                side="bottom"
                                align="center"
                                className="z-50 bg-brand-card border border-brand-border text-brand-white text-[9px] font-mono px-2 py-1 rounded shadow-lg uppercase tracking-wider"
                              >
                                LinkedIn Profile
                                <Tooltip.Arrow className="fill-brand-border" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        )}
                        {!member.github && !member.linkedin && (
                          <span className="text-[9px] font-mono text-brand-muted uppercase tracking-widest">
                            OFFICIAL
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
};
export default Team;
