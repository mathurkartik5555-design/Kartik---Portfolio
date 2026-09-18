import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, ArrowUpRight, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import { ParallaxDataLayer } from './ParallaxDataLayer';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-32 sm:py-40 bg-gradient-to-b from-finance-base via-finance-indigo/90 to-finance-base relative border-t border-finance-teal/25 overflow-hidden">
      {/* Background ambient lighting & parallax data */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-finance-petrol/25 blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-finance-jade/5 blur-3xl pointer-events-none" />
      <ParallaxDataLayer speed={0.1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 sm:mb-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-finance-petrol/70 border border-finance-teal/30 text-xs font-mono uppercase tracking-[0.2em] text-finance-jade mb-5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-finance-jade animate-pulse" />
              <span>Direct Professional Outreach</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
              Let’s discuss research, markets, and opportunities.
            </h2>

            <p className="text-base sm:text-xl text-finance-mist/90 max-w-2xl mx-auto leading-relaxed font-sans">
              Open to entry-level equity research, associate, and internship opportunities, as well as meaningful finance and research-tech conversations.
            </p>
          </div>

          {/* Contact Methods Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            
            {/* Email Card */}
            <SpotlightCard
              enableTilt
              maxTilt={4}
              glassLevel="2"
              spotlightColor="rgba(101, 184, 155, 0.16)"
              className="rounded-3xl"
            >
              <div className="p-7 sm:p-8 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-finance-petrol/80 border border-finance-teal/30 flex items-center justify-center text-finance-jade shrink-0 group-hover:scale-105 group-hover:border-finance-jade transition-all shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-finance-lavender font-semibold">Official Email</div>
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
            </SpotlightCard>

            {/* Phone Card */}
            <SpotlightCard
              enableTilt
              maxTilt={4}
              glassLevel="2"
              spotlightColor="rgba(57, 124, 120, 0.16)"
              className="rounded-3xl"
            >
              <div className="p-7 sm:p-8 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-finance-petrol/80 border border-finance-teal/30 flex items-center justify-center text-finance-teal shrink-0 group-hover:scale-105 group-hover:border-finance-teal transition-all shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-finance-lavender font-semibold">Direct Telephone</div>
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-finance-jade transition-colors tabular-nums"
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
            </SpotlightCard>

            {/* LinkedIn Card */}
            <SpotlightCard
              enableTilt
              maxTilt={4}
              glassLevel="2"
              spotlightColor="rgba(197, 164, 109, 0.16)"
              className="rounded-3xl"
            >
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-7 sm:p-8 flex items-center justify-between group min-h-[44px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-finance-petrol/80 border border-finance-teal/30 flex items-center justify-center text-finance-brass shrink-0 group-hover:scale-105 group-hover:border-finance-brass transition-all shadow-sm">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-finance-lavender font-semibold">Professional Network</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-finance-jade transition-colors">
                      in/kartik-mathur-finance
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-finance-mist/60 group-hover:text-white transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all" />
              </a>
            </SpotlightCard>

            {/* GitHub Card */}
            <SpotlightCard
              enableTilt
              maxTilt={4}
              glassLevel="2"
              spotlightColor="rgba(183, 185, 214, 0.16)"
              className="rounded-3xl"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-7 sm:p-8 flex items-center justify-between group min-h-[44px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-finance-petrol/80 border border-finance-teal/30 flex items-center justify-center text-finance-mist shrink-0 group-hover:scale-105 group-hover:border-white transition-all shadow-sm">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-finance-lavender font-semibold">Code & Repositories</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-finance-jade transition-colors">
                      github.com/mathurkartik5555-design
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-finance-mist/60 group-hover:text-white transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all" />
              </a>
            </SpotlightCard>

          </div>

          {/* Quick Direct Email Launcher Banner */}
          <SpotlightCard
            glassLevel="3"
            spotlightColor="rgba(101, 184, 155, 0.22)"
            className="rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="max-w-xl mx-auto relative z-10">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Have an equity research opening or project discussion?
              </h3>
              <p className="text-sm text-finance-mist/85 mb-8 font-sans leading-relaxed">
                Connect directly with Kartik Mathur with pre-configured research context and role discussion notes.
              </p>

              <MagneticButton
                href={`mailto:${personal.email}?subject=Equity%20Research%20Opportunity%20-%20Kartik%20Mathur&body=Hi%20Kartik,%0D%0A%0D%0AI%20reviewed%20your%20equity%20research%20portfolio%20and%20VRL%20Logistics%20initiating%20coverage%20report.%20I%20would%20like%20to%20connect%20with%20you%20regarding...`}
                variant="primary"
                className="w-full sm:w-auto !py-4 !px-8"
              >
                <div className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email to Kartik Mathur</span>
                </div>
              </MagneticButton>
            </div>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
};
