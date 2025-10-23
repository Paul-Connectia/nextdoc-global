import logoImage from "@/assets/logo/NGD_logo-white.jpg";

const GlobalPresenceSection = () => {

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-medical-blue/5 via-background to-medical-teal/5 relative overflow-hidden">
      {/* Subtle circuit pattern background */}
      <div className="absolute inset-0 bg-pattern-circuits opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            One Ecosystem. <span className="text-gradient-medical">Infinite Medical Journeys.</span>
          </h2>
          
          {/* Custom SVG Infographic */}
          <div className="relative py-12">
            <svg 
              viewBox="0 0 800 500" 
              className="w-full max-w-4xl mx-auto"
              aria-labelledby="global-network-title"
            >
              <title id="global-network-title">NextDoc Global Network connecting India, Education, and UK</title>
              
              {/* Connection Lines with Animation */}
              <g className="connection-lines">
                <line x1="200" y1="250" x2="400" y2="180" stroke="url(#gradient1)" strokeWidth="3" strokeDasharray="5,5" className="animate-pulse-slow" />
                <line x1="400" y1="180" x2="600" y2="250" stroke="url(#gradient1)" strokeWidth="3" strokeDasharray="5,5" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                <line x1="200" y1="250" x2="600" y2="250" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="3,3" opacity="0.5" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
              </g>

              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(200, 95%, 48%)" />
                  <stop offset="100%" stopColor="hsl(180, 95%, 45%)" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(180, 95%, 45%)" />
                  <stop offset="100%" stopColor="hsl(142, 95%, 45%)" />
                </linearGradient>
                <radialGradient id="glowGradient">
                  <stop offset="0%" stopColor="hsl(200, 95%, 48%)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(200, 95%, 48%)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* NGD Logo (Center) - Animated */}
              <g className="animate-float">
                <circle cx="400" cy="180" r="45" fill="url(#gradient1)" opacity="0.1" />
                <circle cx="400" cy="180" r="40" fill="white" stroke="url(#gradient1)" strokeWidth="3" />
                <image 
                  href={logoImage} 
                  x="360" 
                  y="140" 
                  width="80" 
                  height="80" 
                  className="opacity-90"
                />
              </g>

              {/* India Node (Left) */}
              <g>
                <circle cx="200" cy="250" r="60" fill="url(#glowGradient)" className="animate-pulse-slow" />
                <circle cx="200" cy="250" r="50" fill="white" stroke="url(#gradient1)" strokeWidth="3" />
                <text x="200" y="260" textAnchor="middle" fontSize="40">🇮🇳</text>
                <text x="200" y="330" textAnchor="middle" fill="hsl(215, 25%, 27%)" fontSize="20" fontWeight="bold">India</text>
                <text x="200" y="355" textAnchor="middle" fill="hsl(215, 16%, 47%)" fontSize="14">Exam Prep</text>
              </g>

              {/* UK Node (Right) */}
              <g>
                <circle cx="600" cy="250" r="60" fill="url(#glowGradient)" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <circle cx="600" cy="250" r="50" fill="white" stroke="url(#gradient1)" strokeWidth="3" />
                <text x="600" y="260" textAnchor="middle" fontSize="40">🇬🇧</text>
                <text x="600" y="330" textAnchor="middle" fill="hsl(215, 25%, 27%)" fontSize="20" fontWeight="bold">UK</text>
                <text x="600" y="355" textAnchor="middle" fill="hsl(215, 16%, 47%)" fontSize="14">NHS Integration</text>
              </g>

              {/* Medical Icon (Bottom Center) */}
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <circle cx="400" cy="400" r="35" fill="white" stroke="url(#gradient2)" strokeWidth="3" />
                <text x="400" y="415" textAnchor="middle" fontSize="32">🩺</text>
                <text x="400" y="460" textAnchor="middle" fill="hsl(215, 16%, 47%)" fontSize="12" fontStyle="italic">Powered by AI</text>
              </g>

              {/* Pulsing Journey Dots */}
              <circle cx="300" cy="215" r="6" fill="hsl(200, 95%, 48%)" className="animate-pulse-slow" />
              <circle cx="500" cy="215" r="6" fill="hsl(180, 95%, 45%)" className="animate-pulse-slow" style={{ animationDelay: '0.7s' }} />
              <circle cx="400" cy="250" r="6" fill="hsl(142, 95%, 45%)" className="animate-pulse-slow" style={{ animationDelay: '1.4s' }} />
            </svg>
          </div>

          {/* Three Key Messages */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-medical-blue">India • UK • Global</div>
              <p className="text-lg text-muted-foreground">Connecting continents</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-lg font-medium text-foreground">
                <span className="text-2xl">✓</span> Exam pathways in India & UK
              </div>
              <div className="flex items-center justify-center gap-2 text-lg font-medium text-foreground">
                <span className="text-2xl">✓</span> Career bridges across continents
              </div>
              <div className="flex items-center justify-center gap-2 text-lg font-medium text-foreground">
                <span className="text-2xl">✓</span> Talent connecting worldwide
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-medical-teal">Future-Ready</div>
              <p className="text-lg text-muted-foreground">AI-powered pathways</p>
            </div>
          </div>

          {/* Mission Statement */}
          <p className="text-2xl font-semibold text-medical-blue max-w-3xl mx-auto pt-8">
            We're building a world where every doctor's career has a clear path.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
