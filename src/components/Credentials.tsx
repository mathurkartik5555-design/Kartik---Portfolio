import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Eye, Calendar, Download, Sparkles, ExternalLink, FileCheck2 } from 'lucide-react';
import { PORTFOLIO_DATA, CertificateItem } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { SpotlightCard } from './SpotlightCard';
import { ParallaxDataLayer } from './ParallaxDataLayer';

export const Credentials: React.FC = () => {
  const { credentials } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="credentials" className="py-32 sm:py-40 bg-finance-base/95 relative border-t border-finance-teal/25 overflow-hidden">
      {/* Ambient background glows & parallax data */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-finance-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-finance-brass/5 blur-3xl pointer-events-none" />
      <ParallaxDataLayer speed={0.1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Generous Typography */}
        <div className="max-w-3xl mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-finance-petrol/60 border border-finance-teal/30 text-xs font-mono uppercase tracking-[0.2em] text-finance-jade mb-4 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-finance-jade" />
            <span>Official Accreditations & Regulatory Licenses</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.08] mb-6">
            Verified Credentials & Regulatory Qualifications
          </h2>

          <p className="text-base sm:text-lg text-finance-mist/85 leading-relaxed font-sans max-w-2xl">
            Formal SEBI-mandated certifications, institutional equity research cohort accreditations, and specialized wealth-management training.
          </p>
        </div>

        {/* Archival Document Cards Grid with Cursor-Tracking Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {credentials.map((cert) => (
            <SpotlightCard
              key={cert.id}
              enableTilt
              maxTilt={4}
              glassLevel="2"
              spotlightColor="rgba(197, 164, 109, 0.16)"
              className="rounded-3xl h-full"
            >
              <div
                onClick={() => setSelectedCert(cert)}
                className="h-full p-7 sm:p-9 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                aria-label={`Inspect official credential: ${cert.title}`}
              >
                {/* Archival Watermark Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-finance-brass/10 to-transparent pointer-events-none border-t border-r border-finance-brass/20 rounded-tr-3xl" />
                <div className="absolute top-5 right-5 opacity-30 group-hover:opacity-90 transition-opacity">
                  <Award className="w-6 h-6 text-finance-brass" />
                </div>

                <div>
                  {/* Issuer & Authority Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-finance-lavender px-3 py-0.5 rounded bg-finance-petrol/70 border border-finance-teal/30">
                      {cert.issuer}
                    </span>
                    {cert.id.startsWith('nism') && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-finance-brass px-2.5 py-0.5 rounded bg-finance-brass/10 border border-finance-brass/30 font-semibold">
                        SEBI Mandated
                      </span>
                    )}
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-finance-jade transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>

                  {/* Mentor or Subtitle if available */}
                  {cert.mentor && (
                    <div className="text-xs font-mono text-finance-brass mb-3.5 flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Cohort Mentor: {cert.mentor}</span>
                    </div>
                  )}

                  {/* Status, Score & Validity Metadata Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-finance-jade bg-finance-petrol/90 px-3 py-1 rounded-full border border-finance-jade/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{cert.status}</span>
                    </span>

                    {cert.score && (
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-finance-brass bg-finance-navy/80 px-3 py-1 rounded-full border border-finance-brass/40 shadow-sm tabular-nums">
                        <span>Score:</span>
                        <span>{cert.score}</span>
                      </span>
                    )}

                    <span className="text-[11px] font-mono text-finance-mist/75 px-3 py-1 rounded bg-finance-base/60 border border-finance-teal/20 tabular-nums">
                      {cert.validUntil ? `Valid: ${cert.validUntil}` : `Issued: ${cert.issueDate}`}
                    </span>
                  </div>

                  {/* High-fidelity Document Vignette Preview */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-finance-base border border-finance-teal/25 mb-6 group-hover:border-finance-jade/50 transition-all duration-300 shadow-inner">
                    <img
                      src={cert.imagePreview}
                      alt={`${cert.title} preview`}
                      className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:brightness-105 group-hover:scale-102 transition-all duration-500"
                      loading="lazy"
                    />
                    
                    {/* Archival inspection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-finance-base via-finance-base/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity flex items-end p-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs font-mono text-finance-mist flex items-center gap-2 group-hover:text-white">
                          <Eye className="w-4 h-4 text-finance-jade" />
                          <span>Inspect Archival Credential</span>
                        </span>
                        <span className="text-[10px] font-mono text-finance-lavender/80 uppercase tracking-wider">
                          Click to expand
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Credential Scope Description */}
                  <p className="text-xs sm:text-sm text-finance-mist/85 leading-relaxed mb-5">
                    {cert.credentialDescription}
                  </p>

                  {/* Core Topics Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cert.topics.slice(0, 3).map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-3 py-1 rounded-md bg-finance-petrol/60 text-finance-mist/80 border border-finance-teal/20"
                      >
                        {topic}
                      </span>
                    ))}
                    {cert.topics.length > 3 && (
                      <span className="text-[11px] font-mono px-2 py-1 rounded-md text-finance-lavender">
                        +{cert.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 mt-5 border-t border-finance-teal/20 flex items-center justify-between text-xs font-semibold text-finance-jade group-hover:text-white transition-colors">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-finance-brass" />
                    <span>View Verified Document & Syllabus</span>
                  </div>
                  <Eye className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-finance-jade" />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>

      {/* Accessible Full-Screen Certificate Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
