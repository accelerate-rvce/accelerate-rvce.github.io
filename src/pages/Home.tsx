import React from 'react';
import { LogoBackground } from '../components/LogoBackground';
import { projects } from '../data/projects';
import { events } from '../data/events';
import { 
  Code2, 
  BookOpen, 
  Trophy, 
  Users, 
  ArrowUpRight, 
  ArrowRight, 
  Terminal, 
  Shield, 
  Flame, 
  Sparkles,
  Cpu as CpuIcon
} from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter(p => p.featured);
  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const pastEvents = events.filter(e => e.status === 'completed');

  const disciplines = [
    {
      id: "01",
      title: "BUILD",
      desc: "Turn ideas into working software, prototypes and production experiments.",
      icon: Code2,
      color: "text-brand-cyan",
      meta: "SHIPPING // PRODUCTION"
    },
    {
      id: "02",
      title: "LEARN",
      desc: "Weekly workshops and tech bootcamps that turn curiosity into practical skills.",
      icon: BookOpen,
      color: "text-brand-blue",
      meta: "LECTURE // WORKSHOP"
    },
    {
      id: "03",
      title: "COMPETE",
      desc: "Hackathons, CTFs, coding challenges and technical representation.",
      icon: Trophy,
      color: "text-brand-purple",
      meta: "HACK // CAPTURE_THE_FLAG"
    },
    {
      id: "04",
      title: "CONNECT",
      desc: "Meet technically curious peers who are building, learning and collaborating.",
      icon: Users,
      color: "text-brand-white",
      meta: "COMMUNITY // NETWORK"
    }
  ];

  const communityNiches = [
    { title: "DEVELOPERS", desc: "Core systems engineering, systems software, and web applications.", icon: Code2 },
    { title: "AI / ML", desc: "Researching neural networks, fine-tunes, and shipping intelligence.", icon: CpuIcon },
    { title: "CYBERSECURITY", desc: "Pioneering web exploits, binary analysis, CTFs, and digital defense.", icon: Shield },
    { title: "COMPETITIVE PROG.", desc: "Advanced algorithm design, data structures, and optimization.", icon: Flame },
    { title: "DESIGN", desc: "Crafting layouts, interaction design, assets, and visual systems.", icon: Sparkles },
    { title: "RESEARCH", desc: "Drafting technical studies, documentation, and novel prototypes.", icon: Terminal }
  ];

  return (
    <div className="relative min-h-screen bg-brand-black">
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-brand-border pt-20">
        {/* Logo floating particles background */}
        <LogoBackground />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10 flex flex-col items-center justify-center text-center">
          <div className="space-y-8 flex flex-col items-center justify-center">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-widest text-brand-cyan uppercase font-semibold block text-center">
                RV College of Engineering · Bengaluru
              </span>
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-brand-white uppercase text-center">
                WE BUILD.<br />
                WE CONNECT.<br />
                <span className="whitespace-nowrap">WE ACCELERATE.</span>
              </h1>
            </div>

            <p className="max-w-xl mx-auto text-sm sm:text-base text-brand-muted leading-relaxed text-center">
              Accelerate is the computing community at RVCE where students learn, experiment, collaborate, and ship production-ready tools.
            </p>

            <div className="flex flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded bg-brand-white text-brand-black text-xs font-semibold hover:bg-brand-offwhite transition-colors cursor-pointer group"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded bg-brand-surface border border-brand-border text-xs font-semibold text-brand-white hover:border-brand-cyan transition-colors cursor-pointer"
              >
                <span>JOIN COLLECTIVE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Status Strip */}
      <section className="border-b border-brand-border bg-brand-surface py-3.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left text-[11px] font-mono text-brand-muted tracking-widest uppercase">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-brand-cyan">01 //</span>
              <span>LEARN DEEP</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-brand-blue">02 //</span>
              <span>BUILD FAST</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-brand-purple">03 //</span>
              <span>CONNECT GLOBAL</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-brand-white">04 //</span>
              <span>SHIP PRODUCTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section id="about" className="py-16 md:py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-white leading-tight uppercase">
                A community of builders, not coordinators.
              </h2>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                Accelerate represents a departure from traditional college student chapters. We operate like a young technology team—focusing on open-source contributions, real-world development pipelines, and deep technical experimentation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded border border-brand-border bg-brand-surface">
                  <h3 className="font-display text-brand-white font-bold text-xs tracking-wider uppercase mb-1.5">Student Autonomy</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">Self-governing teams driving technical projects, workshop curriculum, and event management.</p>
                </div>
                <div className="p-5 rounded border border-brand-border bg-brand-surface">
                  <h3 className="font-display text-brand-white font-bold text-xs tracking-wider uppercase mb-1.5">Shipping-first</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">We measure output in running applications, code reviews, and merged contributions, not certificates.</p>
                </div>
              </div>
            </div>

            {/* Geometric Diagram */}
            <div className="lg:col-span-5 flex items-center justify-center rounded-lg border border-brand-border bg-brand-surface/20 p-4">
              <svg className="w-full max-w-[340px] h-[300px] text-brand-border" viewBox="0 0 400 350" fill="none">
                <line x1="200" y1="175" x2="100" y2="75" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="200" y1="175" x2="300" y2="75" stroke="currentColor" strokeWidth="1.2" />
                <line x1="200" y1="175" x2="320" y2="230" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="200" y1="175" x2="80" y2="230" stroke="currentColor" strokeWidth="1.2" />
                <line x1="200" y1="175" x2="200" y2="50" stroke="currentColor" strokeWidth="1.2" />
                <line x1="200" y1="175" x2="200" y2="300" stroke="currentColor" strokeWidth="1.2" />

                <circle cx="200" cy="175" r="28" className="fill-brand-surface stroke-brand-cyan" strokeWidth="1.5" />
                <text x="200" y="178" textAnchor="middle" className="fill-brand-white font-mono text-[8px] tracking-wider font-semibold">CORE</text>

                <circle cx="100" cy="75" r="20" className="fill-brand-surface stroke-brand-blue" strokeWidth="1.2" />
                <text x="100" y="78" textAnchor="middle" className="fill-brand-muted font-mono text-[8px]">CODE</text>

                <circle cx="300" cy="75" r="20" className="fill-brand-surface stroke-brand-purple" strokeWidth="1.2" />
                <text x="300" y="78" textAnchor="middle" className="fill-brand-muted font-mono text-[8px]">PEOPLE</text>

                <circle cx="320" cy="230" r="20" className="fill-brand-surface stroke-brand-blue" strokeWidth="1.2" />
                <text x="320" y="233" textAnchor="middle" className="fill-brand-muted font-mono text-[8px]">PROJ</text>

                <circle cx="80" cy="230" r="20" className="fill-brand-surface stroke-brand-cyan" strokeWidth="1.2" />
                <text x="80" y="233" textAnchor="middle" className="fill-brand-muted font-mono text-[8px]">IDEAS</text>

                <circle cx="200" cy="50" r="18" className="fill-brand-surface stroke-brand-white" strokeWidth="1" />
                <text x="200" y="53" textAnchor="middle" className="fill-brand-muted font-mono text-[7px]">RESEARCH</text>

                <circle cx="200" cy="300" r="20" className="fill-brand-surface stroke-brand-purple" strokeWidth="1.2" />
                <text x="200" y="303" textAnchor="middle" className="fill-brand-muted font-mono text-[8px]">COMM</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Do Section - Editorial List */}
      <section className="py-16 md:py-24 border-b border-brand-border bg-brand-surface/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Title column */}
            <div className="lg:col-span-4 text-left">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brand-white uppercase tracking-wider">
                OUR DISCIPLINES
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Empowering computing students to expand their technical capabilities and participate in active engineering.
              </p>
            </div>

            {/* List column */}
            <div className="lg:col-span-8 divide-y divide-brand-border">
              {disciplines.map((d) => (
                <div key={d.title} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <span className="font-mono text-xs text-brand-cyan font-bold pt-1">{d.id}</span>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-brand-white uppercase tracking-wider flex items-center gap-2">
                        {d.title}
                        <d.icon className="w-3.5 h-3.5 text-brand-muted" />
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed max-w-xl">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                  <span className="self-start sm:self-center font-mono text-[9px] text-brand-muted border border-brand-border px-2 py-0.5 rounded uppercase tracking-wider">
                    {d.meta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="py-16 md:py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brand-white uppercase tracking-wider">
                BUILT BY ACCELERATE
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-brand-muted">
                Production utilities, developer applications, and tools built by our members.
              </p>
            </div>
            <button
              onClick={() => navigate('/contribute')}
              className="inline-flex items-center space-x-1 px-4 py-2 rounded border border-brand-border hover:border-brand-cyan text-[10px] font-semibold text-brand-white tracking-wider transition-colors cursor-pointer"
            >
              <span>SUBMIT PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.title}
                className="p-5 rounded border border-brand-border bg-brand-surface hover:-translate-y-0.5 transition-transform duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-base text-brand-white mb-2 uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-brand-muted text-xs leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map(t => (
                      <span key={t} className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-brand-black border border-brand-border text-brand-muted uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-brand-white hover:text-brand-cyan transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB REPOSITORY →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Open Source Section */}
      <section className="py-16 md:py-24 bg-brand-surface/20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-white leading-tight uppercase">
                Open source is our foundation.
              </h2>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                Accelerate operates entirely in the open. Any student can inspect our codebases, submit bugs, refine features, open PRs, and gain exposure to production coding methodologies.
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com/accelerate-rvce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded border border-brand-border bg-brand-surface text-xs font-semibold text-brand-white hover:border-brand-cyan transition-colors cursor-pointer group"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>EXPLORE GITHUB ORG</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Counters Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { label: "REPOSITORIES", count: "12" },
                { label: "CONTRIBUTORS", count: "45" },
                { label: "PULL REQUESTS", count: "150" },
                { label: "COMMITS", count: "800" }
              ].map(stat => (
                <div key={stat.label} className="p-5 rounded border border-brand-border bg-brand-surface text-center">
                  <div className="font-display font-extrabold text-3xl text-brand-white">
                    {stat.count}
                  </div>
                  <div className="mt-1.5 font-mono text-[9px] tracking-widest text-brand-muted uppercase font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Events Section */}
      <section id="events" className="py-16 md:py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brand-white uppercase tracking-wider">
              LEARN BY DOING
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-brand-muted">
              Timeline of technical workshops, bootcamps, and hackathons.
            </p>
          </div>

          <div className="relative border-l border-brand-border max-w-2xl mx-auto pl-6 sm:pl-8 space-y-10">
            {upcomingEvents.length > 0 && (
              <div className="space-y-6">
                <span className="font-mono text-[9px] tracking-widest bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded border border-brand-cyan/20 uppercase font-semibold">
                  UPCOMING CAMPAIGNS
                </span>
                <div className="space-y-6">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="relative">
                      {/* Circle indicator */}
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-cyan border-2 border-brand-black" />
                      <div className="font-mono text-xs text-brand-cyan font-semibold">{event.date}</div>
                      <h3 className="font-display text-base font-bold text-brand-white mt-1 uppercase tracking-wide">
                        {event.title}
                      </h3>
                      <p className="text-brand-muted text-xs mt-1.5 leading-relaxed">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6 pt-2">
              <span className="font-mono text-[9px] tracking-widest bg-brand-surface text-brand-muted px-2 py-0.5 rounded border border-brand-border uppercase font-semibold">
                ARCHIVE / COMPLETED
              </span>
              <div className="space-y-6">
                {pastEvents.map(event => (
                  <div key={event.id} className="relative">
                    {/* Circle indicator */}
                    <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-2 h-2 rounded-full bg-brand-border border border-brand-black" />
                    <div className="font-mono text-xs text-brand-muted">{event.date}</div>
                    <h3 className="font-display text-base font-bold text-brand-white mt-0.5 uppercase tracking-wide">
                      {event.title}
                    </h3>
                    <p className="text-brand-muted text-xs mt-1.5 leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Community Section - Directory Index */}
      <section id="community" className="py-16 md:py-24 bg-brand-surface/20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brand-white uppercase tracking-wider">
              THE PEOPLE ARE THE NETWORK
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-brand-muted">
              Find your technical domain and build with peers sharing your interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border">
            {communityNiches.map((n) => (
              <div
                key={n.title}
                className="p-6 bg-brand-surface flex items-start space-x-4"
              >
                <div className="p-2 rounded bg-brand-black border border-brand-border text-brand-cyan">
                  <n.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xs text-brand-white tracking-widest uppercase">{n.title}</h3>
                  <p className="mt-1.5 text-xs text-brand-muted leading-relaxed">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Join Us / Conversion Section */}
      <section id="join-us" className="py-20 lg:py-28 relative overflow-hidden bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-brand-white uppercase tracking-tight">
            GOT AN IDEA?<br />
            BUILD IT WITH US.
          </h2>
          <p className="mt-6 max-w-lg mx-auto text-brand-muted text-xs sm:text-sm leading-relaxed">
            You don't need to be an expert. You just need to be curious enough to start. Attend workshops, join coding labs, and ship code.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded bg-brand-white text-brand-black text-xs font-semibold hover:bg-brand-offwhite transition-colors cursor-pointer"
            >
              JOIN ACCELERATE
            </a>
            <a
              href="https://github.com/accelerate-rvce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-6 py-3 rounded bg-brand-surface border border-brand-border text-xs font-semibold text-brand-white hover:border-brand-cyan transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-brand-cyan" />
              <span>EXPLORE GITHUB</span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-brand-border text-left">
            <div>
              <div className="font-mono text-xs text-brand-cyan font-semibold">01 // LEARN</div>
              <p className="mt-1.5 text-xs text-brand-muted leading-relaxed">Join weekly bootcamps and core architecture lectures.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-brand-blue font-semibold">02 // BUILD</div>
              <p className="mt-1.5 text-xs text-brand-muted leading-relaxed">Collaborate on placement engines and community platforms.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-brand-purple font-semibold">03 // CONTRIBUTE</div>
              <p className="mt-1.5 text-xs text-brand-muted leading-relaxed">Contribute features, tests, and documentation to club codebases.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
