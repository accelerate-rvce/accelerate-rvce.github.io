import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import logo from '../assets/logo.jpg';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
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

  const navLinks = [
    { label: 'About', action: () => handleNavClick('about'), type: 'button' },
    { label: 'Projects', action: () => handleNavClick('projects'), type: 'button' },
    { label: 'Events', action: () => handleNavClick('events'), type: 'button' },
    { label: 'Community', action: () => handleNavClick('community'), type: 'button' },
    { label: 'Resources', to: '/resources', type: 'link' },
    { label: 'Team', to: '/team', type: 'link' },
    { label: 'Contribute', to: '/contribute', type: 'link' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-brand-black/90 backdrop-blur-md border-brand-border py-2.5'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2.5 group"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded overflow-hidden bg-brand-surface border border-brand-border group-hover:border-brand-cyan transition-colors duration-200">
                <img src={logo} alt="Accelerate RVCE Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-sm tracking-widest text-brand-white">
                ACCELERATE
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = link.type === 'link' && link.to && location.pathname === link.to;
              if (link.type === 'button') {
                return (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className="px-3 py-1.5 rounded text-xs font-medium text-brand-muted hover:text-brand-white hover:bg-brand-surface transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              } else {
                return (
                  <Link
                    key={link.label}
                    to={link.to || '/'}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                      active
                        ? 'text-brand-cyan bg-brand-surface border border-brand-border'
                        : 'text-brand-muted hover:text-brand-white hover:bg-brand-surface'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('join-us')}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded border border-brand-border bg-brand-surface text-[10px] font-semibold text-brand-white tracking-wider hover:border-brand-cyan transition-colors cursor-pointer"
            >
              <span>BUILD WITH US</span>
              <ChevronRight className="w-3.5 h-3.5 text-brand-cyan" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button
                  className="inline-flex items-center justify-center p-2 rounded text-brand-muted hover:text-brand-white hover:bg-brand-surface focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-brand-black/60 backdrop-blur-sm" />
                <Dialog.Content className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-full bg-brand-surface border-l border-brand-border p-6 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-display font-bold text-xs tracking-widest text-brand-white">
                        MENU
                      </span>
                      <Dialog.Close asChild>
                        <button className="p-1 rounded text-brand-muted hover:text-brand-white hover:bg-brand-card">
                          <X className="h-5 w-5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <div className="flex flex-col space-y-2">
                      {navLinks.map((link) => {
                        const active = link.type === 'link' && link.to && location.pathname === link.to;
                        if (link.type === 'button') {
                          return (
                            <button
                              key={link.label}
                              onClick={link.action}
                              className="w-full text-left px-3 py-2.5 rounded text-sm font-medium text-brand-muted hover:text-brand-white hover:bg-brand-card transition-colors"
                            >
                              {link.label}
                            </button>
                          );
                        } else {
                          return (
                            <Link
                              key={link.label}
                              to={link.to || '/'}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`px-3 py-2.5 rounded text-sm font-medium transition-colors block ${
                                active
                                  ? 'text-brand-cyan bg-brand-card'
                                  : 'text-brand-muted hover:text-brand-white hover:bg-brand-card'
                              }`}
                            >
                              {link.label}
                            </Link>
                          );
                        }
                      })}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-border">
                    <button
                      onClick={() => handleNavClick('join-us')}
                      className="w-full inline-flex items-center justify-center space-x-1.5 py-3 rounded border border-brand-border bg-brand-black text-xs font-semibold text-brand-white tracking-wider hover:border-brand-cyan transition-colors"
                    >
                      <span>BUILD WITH US</span>
                      <ChevronRight className="w-3.5 h-3.5 text-brand-cyan" />
                    </button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
