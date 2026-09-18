import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CertificateItem } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!certificate) return;

    // Handle Escape key & trap keyboard focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 60);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [certificate, onClose]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100) {
      onClose();
    }
  };

  return (
    <AnimatePresence mode="wait">
      {certificate && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-finance-base/90 backdrop-blur-2xl"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={modalRef}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={handleDragEnd}
            initial={{ scale: 0.94, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 26,
              mass: 0.5,
            }}
            className="relative w-full max-w-4xl max-h-[90vh] sm:max-h-[92vh] bg-gradient-to-b from-finance-petrol/95 via-finance-indigo/95 to-finance-base/98 border-t sm:border border-finance-teal/40 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Mobile Drag Handle Indicator */}
            <div className="w-12 h-1.5 bg-finance-teal/50 rounded-full mx-auto my-2.5 sm:hidden" />

            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-finance-teal/30 bg-finance-base/80">
              <div className="pr-4">
                <div className="text-[11px] font-mono text-finance-jade uppercase tracking-[0.16em] flex items-center gap-1.5 mb-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-finance-jade" />
                  <span>Archival Credential Record · {certificate.issuer}</span>
                </div>
                <h3 id="cert-modal-title" className="font-display font-bold text-base sm:text-xl text-white truncate">
                  {certificate.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {certificate.pdfDownload && (
                  <a
                    href={certificate.pdfDownload}
                    download
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-finance-mist hover:text-white bg-finance-petrol/70 hover:bg-finance-teal/35 border border-finance-teal/35 rounded-xl transition-all"
                    title="Download Official Certificate Document (PDF)"
                  >
                    <Download className="w-3.5 h-3.5 text-finance-jade" />
                    <span className="hidden sm:inline">PDF</span>
                  </a>
                )}

                <button
                  ref={closeBtnRef}
                  onClick={onClose}
                  className="p-2.5 text-finance-mist hover:text-white bg-finance-petrol/70 hover:bg-finance-teal/35 border border-finance-teal/35 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-finance-jade min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close modal (Escape or Swipe Down)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
              
              {/* Metadata Highlights Bar with Tabular Figures */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 bg-finance-base/80 p-4 rounded-2xl border border-finance-teal/25 text-xs tabular-nums">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-finance-lavender">Issuing Authority</span>
                  <div className="font-semibold text-white truncate mt-1">{certificate.issuer}</div>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-finance-lavender">Status</span>
                  <div className="font-semibold text-finance-jade mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{certificate.status}</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-finance-lavender">Official Score</span>
                  <div className="font-semibold text-finance-brass mt-1 font-mono">
                    {certificate.score ? certificate.score : 'Certified'}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-finance-lavender">Issue / Validity</span>
                  <div className="font-semibold text-white mt-1 truncate font-mono">
                    {certificate.validUntil ? `Valid to ${certificate.validUntil}` : certificate.issueDate}
                  </div>
                </div>
              </div>

              {/* High-Resolution Certificate Archival View */}
              <div className="relative rounded-2xl overflow-hidden border border-finance-teal/35 bg-finance-base/95 flex items-center justify-center p-3 sm:p-5 shadow-inner">
                <img
                  src={certificate.imagePreview}
                  alt={`${certificate.title} issued to Kartik Mathur`}
                  className="max-h-[45vh] sm:max-h-[52vh] w-auto object-contain rounded-xl shadow-lg border border-finance-teal/25"
                  loading="lazy"
                />
              </div>

              {/* Description & Competencies Covered */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-finance-lavender mb-1.5 font-semibold">
                    Curriculum & Credential Scope
                  </h4>
                  <p className="text-sm text-finance-mist/90 leading-relaxed font-sans">
                    {certificate.credentialDescription}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.16em] text-finance-lavender mb-2 font-semibold">
                    Core Evaluated Competencies & Modules:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {certificate.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-3 py-1 rounded-lg bg-finance-petrol/70 text-finance-mist border border-finance-teal/30 font-mono"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Regulatory Privacy Note */}
              <div className="text-[11px] font-mono text-finance-lavender/70 border-t border-finance-teal/25 pt-4 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-finance-jade shrink-0" />
                <span>
                  Regulatory Privacy Notice: In accordance with Indian securities compliance guidelines, personal identifiers (PAN and full registration serial numbers) are masked from public display.
                </span>
              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
