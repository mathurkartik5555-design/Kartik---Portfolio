import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, ArrowUpRight, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-gradient-to-b from-finance-base via-finance-indigo/90 to-finance-base relative border-t border-finance-teal/25 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-finance-petrol/25 blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-finance-jade/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-finance-petrol/70 border border-finance-teal/30 text-xs font-mono uppercase tracking-widest text-finance-jade mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-finance-jade animate-pulse" />
              <span>Direct Professional Outreach</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Let’s discuss research, markets, and opportunities.
            </h2>

            <p className="text-base sm:text-xl text-finance-mist/90 max-w-2xl mx-auto leading-relaxed font-sans">
              Open to entry-level equity research, associate, and internship opportunities, as well as meaningful finance and research-tech conversations.
            </p>
          </div>

          {/* Contact Methods Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-12">
            
            {/* Email Card */}
            <TiltCard maxTilt={5} glareColor="rgba(101, 184, 155, 0.12)">
              <div className="h-full bg-gradient-to-br from-finance-indigo/90 via-finance-petrol/50 to-finance-base/90 p-6 sm:p-7 rounded-2xl border border-finance-teal/30 flex items-center justify-between group hover:border-finance-jade/50 transition-all duration-300 shadow-institutional">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-finance-petrol/80 border border-finance-teal/30 flex items-center justify-center text-finance-jade shrink-0 group-hover:scale-105 group-hover:border-finance-jade transition-all shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-finance-lavender">Official Email</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-finance-jade transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-3 rounded-xl bg-finance-petrol/80 hover:bg-finance-teal/40 border border-finance-teal/30 text-finance-mist hover:text-white transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-finance-jade ml-2"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-finance-jade" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </TiltCard>

            {/* Phone Card */}
            <TiltCard maxTilt={5} glareColor="rgba(57, 124, 120, 0.12)">
              <div className="h-full bg-gradient-to-br from-finance-indigo/90 via-finance-petrol/50 to-finance-base/90 p-6 sm:p-7 rounded-2xl border border-finance-teal/30 flex items-center justify-between group hover:border-finance-jade/50 transition-all duration-300 shadow-institutional">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-finance-petrol/80 border border-finance-teal/30 flex items-center justify-center text-finance-teal shrink-0 group-hover:scale-105 group-hover:border-finance-teal transition-all shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-finance-lavender">Direct Telephone</div>
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-finance-jade transition-colors"
                    >
                      {personal.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="p-3 rounded-xl bg-finance-petrol/80 hover:bg-finance-teal/40 border border-finance-teal/30 text-finance-mist hover:text-white transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-finance-jade ml-2"
                  title="Copy telephone number"
                  aria-label="Copy telephone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-finance-jade" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </TiltCard>

            {/* LinkedIn Card */}
            <TiltCard maxTilt={5} glareColor="rgba(197, 164, 109, 0.12)">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full bg-gradient-to-br from-finance-indigo/90 via-finance-petrol/50 to-finance-base/90 p-6 sm:p-7 rounded-2xl border border-finance-teal/30 flex items-center justify-between group hover:border-finance-brass/50 transition-all duration-300 min-h-[44px] shadow-institutional"
              >
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-finance-petrol/80 border border-finance-teal/30 flex items-center justify-center text-finance-brass shrink-0 group-hover:scale-105 group-hover:border-finance-brass transition-all shadow-sm">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-finance-lavender">Professional Network</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-finance-jade transition-colors">
                      in/kartik-mathur-finance
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-finance-mist/60 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </TiltCard>

            {/* GitHub Card */}
            <TiltCard maxTilt={5} glareColor="rgba(183, 185, 214, 0.12)">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full bg-gradient-to-br from-finance-indigo/90 via-finance-petrol/50 to-finance-base/90 p-6 sm:p-7 rounded-2xl border border-finance-teal/30 flex items-center justify-between group hover:border-finance-mist/50 transition-all duration-300 min-h-[44px] shadow-institutional"
              >
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-finance-petrol/80 border border-finance-teal/30 flex items-center justify-center text-finance-mist shrink-0 group-hover:scale-105 group-hover:border-white transition-all shadow-sm">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-finance-lavender">Code & Repositories</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-finance-jade transition-colors">
                      github.com/mathurkartik5555-design
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-finance-mist/60 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </TiltCard>

          </div>

          {/* Quick Direct Email Launcher Banner */}
          <div className="bg-gradient-to-r from-finance-indigo/90 via-finance-petrol/80 to-finance-base/90 rounded-2xl p-8 sm:p-10 border border-finance-teal/35 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-finance-jade/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-xl mx-auto relative z-10">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                Have an equity research opening or project discussion?
              </h3>
              <p className="text-sm text-finance-mist/85 mb-8 font-sans leading-relaxed">
                Connect directly with Kartik Mathur with pre-configured research context and role discussion notes.
              </p>

              <MagneticButton
                href={`mailto:${personal.email}?subject=Equity%20Research%20Opportunity%20-%20Kartik%20Mathur&body=Hi%20Kartik,%0D%0A%0D%0AI%20reviewed%20your%20equity%20research%20portfolio%20and%20VRL%20Logistics%20initiating%20coverage%20report.%20I%20would%20like%20to%20connect%20with%20you%20regarding...`}
                variant="primary"
                className="w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email to Kartik Mathur</span>
                </div>
              </MagneticButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
