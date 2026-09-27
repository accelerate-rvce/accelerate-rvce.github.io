import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Terminal,
  ArrowLeft,
  Calendar,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Presentation,
  Scale,
  PartyPopper,
} from 'lucide-react';
import { hack4sdgInfo, hack4sdgPhotos } from '../data/hack4sdg';

const highlights = [
  {
    title: 'PITCH',
    desc: 'Teams presented SDG-mapped ideas and working prototypes to the room.',
    icon: Presentation,
  },
  {
    title: 'JUDGE',
    desc: 'A judging panel scored demos live, followed by open audience Q&A.',
    icon: Scale,
  },
  {
    title: 'CELEBRATE',
    desc: 'Closed with a full-cohort group photo and standout team showcases.',
    icon: PartyPopper,
  },
];

export const Hack4SDG: React.FC = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIdx(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setLightboxIdx((idx) =>
        idx === null ? idx : (idx + dir + hack4sdgPhotos.length) % hack4sdgPhotos.length
      );
    },
    []
  );

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, close, step]);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back + badge */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-brand-muted hover:text-brand-cyan transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back Home</span>
          </Link>
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded border border-brand-border bg-brand-surface">
            <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-mono text-[9px] tracking-widest text-brand-muted uppercase font-semibold">
              EVENT RECAP
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-10">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-brand-white uppercase leading-none">
            {hack4sdgInfo.title}
          </h1>
          <p className="mt-3 font-mono text-xs text-brand-cyan tracking-widest uppercase">
            {hack4sdgInfo.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-[11px] font-mono text-brand-muted uppercase tracking-widest">
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded border border-brand-border bg-brand-surface">
              <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{hack4sdgInfo.date}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded border border-brand-border bg-brand-surface">
              <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{hack4sdgInfo.venue}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded border border-brand-border bg-brand-surface">
              <Camera className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{hack4sdgPhotos.length} photos</span>
            </span>
          </div>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded border border-brand-border overflow-hidden bg-brand-surface mb-12"
        >
          <button
            type="button"
            onClick={() => setLightboxIdx(0)}
            className="block w-full cursor-zoom-in"
          >
            <img
              src={hack4sdgPhotos[0].src}
              alt={hack4sdgPhotos[0].caption}
              className="w-full max-h-[70vh] object-cover"
            />
          </button>
          <p className="px-4 py-3 font-mono text-[10px] text-brand-muted uppercase tracking-widest border-t border-brand-border">
            {hack4sdgPhotos[0].caption} — click any photo to view fullscreen
          </p>
        </motion.div>

        {/* About + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-display font-extrabold text-2xl text-brand-white uppercase tracking-wide mb-4">
              About the event
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              {hack4sdgInfo.description}
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="p-4 rounded border border-brand-border bg-brand-surface flex items-start space-x-3"
              >
                <div className="p-2 rounded bg-brand-black border border-brand-border text-brand-cyan">
                  <h.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xs text-brand-white tracking-widest uppercase">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-xs text-brand-muted leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="flex items-center space-x-4 mb-8">
          <h2 className="font-display font-extrabold text-lg sm:text-xl text-brand-white uppercase tracking-wider">
            Gallery
          </h2>
          <div className="h-[1px] flex-grow bg-brand-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hack4sdgPhotos.map((photo, idx) => (
            <motion.button
              key={photo.src}
              type="button"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (idx % 3) * 0.05 }}
              onClick={() => setLightboxIdx(idx)}
              className="group text-left rounded border border-brand-border bg-brand-surface overflow-hidden hover:border-brand-cyan transition-colors cursor-zoom-in"
            >
              <div className="overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <p className="px-4 py-3 font-mono text-[10px] text-brand-muted uppercase tracking-widest group-hover:text-brand-white transition-colors">
                {String(idx + 1).padStart(2, '0')} // {photo.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4"
            onClick={close}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={hack4sdgPhotos[lightboxIdx].src}
                alt={hack4sdgPhotos[lightboxIdx].caption}
                className="w-full max-h-[80vh] object-contain rounded border border-brand-border"
              />
              <p className="mt-3 text-center font-mono text-[11px] text-brand-muted uppercase tracking-widest">
                {lightboxIdx + 1} / {hack4sdgPhotos.length} —{' '}
                {hack4sdgPhotos[lightboxIdx].caption}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute -top-3 -right-3 p-2 rounded-full bg-brand-surface border border-brand-border text-brand-white hover:border-brand-cyan transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-surface/90 border border-brand-border text-brand-white hover:border-brand-cyan transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-surface/90 border border-brand-border text-brand-white hover:border-brand-cyan transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hack4SDG;
