import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowUpRight, Copy, Check } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

export const Contribute: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const gitSteps = [
    {
      id: "01",
      title: "Find a repository",
      desc: "Browse our active projects on the Accelerate GitHub organization and pick an open issue or feature request that matches your stack.",
      cmd: null
    },
    {
      id: "02",
      title: "Fork and clone",
      desc: "Fork the project to your GitHub account, then clone it locally to set up your staging workspace.",
      cmd: "git clone https://github.com/YOUR_USERNAME/example-repo.git"
    },
    {
      id: "03",
      title: "Create branch",
      desc: "Check out a new, descriptively named branch for your modifications (e.g. 'feature/navbar-a11y' or 'fix/resource-filtering').",
      cmd: "git checkout -b feature/your-feature-name"
    },
    {
      id: "04",
      title: "Build and test",
      desc: "Make your edits, check for TypeScript validation errors, run local tests, and ensure compilation runs error-free.",
      cmd: "npm run build"
    },
    {
      id: "05",
      title: "Push changes",
      desc: "Commit your code following precise commits criteria and push your branch to your personal fork.",
      cmd: "git push origin feature/your-feature-name"
    },
    {
      id: "06",
      title: "Open pull request",
      desc: "Navigate to the base repository, select your branch, and launch a Pull Request. Provide a concise technical review of your edits.",
      cmd: null
    },
    {
      id: "07",
      title: "Review and merge",
      desc: "Once a Core Team member reviews and approves your PR, the changes are merged into the main branch and automatically deployed.",
      cmd: null
    }
  ];

  const guidelines = [
    { title: "Commit standard", rule: "Write imperative commits: 'feat: add radix tabs' instead of 'Added radix tabs' or 'more commits'." },
    { title: "Typographic discipline", rule: "Ensure proper responsive headers scale and consistent margins. Do not introduce arbitrary absolute positioning." },
    { title: "Clean Compilation", rule: "The repository compiles under strict TypeScript compiler rules. Clean up unused imports, dead variables, or console statements before pushing." },
    { title: "No inline gradients", rule: "Adhere to color tokens defined in index.css. Avoid styling elements with random background gradient flows." }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-brand-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded border border-brand-border bg-brand-surface mb-6">
            <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-mono text-[9px] tracking-widest text-brand-muted uppercase font-semibold">
              CONTRIBUTOR WORKSPACE
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-brand-white uppercase leading-none">
            HOW TO CONTRIBUTE
          </h1>
          <p className="mt-4 text-brand-muted text-xs sm:text-sm leading-relaxed max-w-xl">
            Accelerate is driven by student contributors. Follow our technical pipeline to review open repositories, write code, and ship features.
          </p>
        </div>

        {/* Radix Tabs Implementation */}
        <Tabs.Root defaultValue="workflow" className="w-full">
          <Tabs.List className="flex border-b border-brand-border mb-8">
            <Tabs.Trigger
              value="workflow"
              className="px-4 py-2.5 border-b-2 border-transparent data-[state=active]:border-brand-cyan data-[state=active]:text-brand-white text-xs font-mono text-brand-muted uppercase tracking-widest cursor-pointer"
            >
              Git Workflow
            </Tabs.Trigger>
            <Tabs.Trigger
              value="guidelines"
              className="px-4 py-2.5 border-b-2 border-transparent data-[state=active]:border-brand-cyan data-[state=active]:text-brand-white text-xs font-mono text-brand-muted uppercase tracking-widest cursor-pointer"
            >
              Coding Guidelines
            </Tabs.Trigger>
          </Tabs.List>

          {/* Workflow Tab Content */}
          <Tabs.Content value="workflow" className="space-y-6 outline-none">
            {gitSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-5 rounded border border-brand-border bg-brand-surface flex items-start space-x-5"
              >
                <span className="font-mono text-xs text-brand-cyan font-bold pt-0.5">{step.id}</span>
                <div className="flex-grow space-y-3">
                  <div>
                    <h3 className="font-display font-bold text-sm text-brand-white uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs text-brand-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {step.cmd && (
                    <div className="relative flex items-center justify-between p-3 rounded bg-brand-black border border-brand-border font-mono text-[11px] text-brand-offwhite">
                      <span className="overflow-x-auto whitespace-nowrap scrollbar-none pr-12">{step.cmd}</span>
                      <button
                        onClick={() => copyToClipboard(step.cmd || '', step.id)}
                        className="absolute right-3 p-1.5 rounded hover:bg-brand-card text-brand-muted hover:text-brand-white transition-colors cursor-pointer"
                        aria-label="Copy code command"
                      >
                        {copiedId === step.id ? (
                          <Check className="w-3.5 h-3.5 text-brand-cyan" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </Tabs.Content>

          {/* Guidelines Tab Content */}
          <Tabs.Content value="guidelines" className="space-y-6 outline-none">
            <div className="rounded border border-brand-border divide-y divide-brand-border overflow-hidden">
              {guidelines.map((item, idx) => (
                <div key={item.title} className="p-5 bg-brand-surface space-y-2">
                  <span className="font-mono text-[9px] text-brand-cyan uppercase tracking-widest font-semibold">
                    0{idx + 1} // {item.title}
                  </span>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.rule}
                  </p>
                </div>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>

        {/* Resources Section */}
        <div className="mt-16 pt-8 border-t border-brand-border space-y-6">
          <div>
            <h2 className="font-display font-bold text-lg text-brand-white uppercase tracking-wide">
              Guidelines & Discussions
            </h2>
            <p className="text-brand-muted text-xs leading-relaxed mt-1">
              Read our organization-wide standard operating procedures before making submissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "CONTRIBUTING.md", link: "https://github.com/accelerate-rvce" },
              { title: "CODE_OF_CONDUCT.md", link: "https://github.com/accelerate-rvce" },
              { title: "Discussions", link: "https://github.com/accelerate-rvce" },
              { title: "Open Issues", link: "https://github.com/accelerate-rvce" }
            ].map(item => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded border border-brand-border bg-brand-surface hover:border-brand-cyan transition-colors"
              >
                <span className="font-mono text-xs text-brand-muted group-hover:text-brand-white transition-colors">
                  {item.title}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contribute;
