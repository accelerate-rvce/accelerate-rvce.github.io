import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import logo from '../assets/logo.jpg';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-brand-black border-t border-brand-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-brand-border">
          {/* Main Info column */}
          <div className="space-y-4 md:col-span-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 flex items-center justify-center rounded overflow-hidden bg-brand-surface border border-brand-border">
                <img src={logo} alt="Accelerate RVCE Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-sm tracking-wider text-brand-white">
                ACCELERATE
              </span>
            </div>
            <p className="font-mono text-[10px] text-brand-muted tracking-widest uppercase">
              INNOVATE · CONNECT · INSPIRE
            </p>
            <div className="pt-2 text-xs text-brand-muted space-y-1.5 leading-relaxed">
              <p>RV College of Engineering</p>
              <p>Mysore Road, RV Vidyaniketan Post</p>
              <p>Bengaluru, Karnataka 560059</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-8 md:col-span-8">
            {/* Explore column */}
            <div>
              <h3 className="font-display text-[10px] font-bold text-brand-white uppercase tracking-widest mb-4">
                Explore
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="text-xs text-brand-muted hover:text-brand-white transition-colors cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('projects')}
                    className="text-xs text-brand-muted hover:text-brand-white transition-colors cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('events')}
                    className="text-xs text-brand-muted hover:text-brand-white transition-colors cursor-pointer"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('community')}
                    className="text-xs text-brand-muted hover:text-brand-white transition-colors cursor-pointer"
                  >
                    Community
                  </button>
                </li>
              </ul>
            </div>

            {/* Build column */}
            <div>
              <h3 className="font-display text-[10px] font-bold text-brand-white uppercase tracking-widest mb-4">
                Build
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://github.com/accelerate-rvce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-xs text-brand-muted hover:text-brand-white transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <Link
                    to="/contribute"
                    className="text-xs text-brand-muted hover:text-brand-white transition-colors"
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-xs text-brand-muted hover:text-brand-white transition-colors"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect column */}
            <div>
              <h3 className="font-display text-[10px] font-bold text-brand-white uppercase tracking-widest mb-4">
                Connect
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://www.linkedin.com/company/accelerate-rvce/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-xs text-brand-muted hover:text-brand-white transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/accelerate_rvce/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-xs text-brand-muted hover:text-brand-white transition-colors"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-xs text-brand-muted hover:text-brand-white transition-colors"
                  >
                    Team Members
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-muted">
          <div>
            <p>© {new Date().getFullYear()} Accelerate RVCE. All rights reserved.</p>
            <p className="mt-1 text-[10px]">
              Affiliated to RV College of Engineering, Bengaluru.
            </p>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="https://github.com/accelerate-rvce"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-brand-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/accelerate-rvce/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-brand-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/accelerate_rvce/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-brand-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
