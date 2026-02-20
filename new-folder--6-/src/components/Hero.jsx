import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, SquareAsterisk } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section" style={{
            minHeight: 'calc(100vh - var(--nav-height))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '2rem',
                alignItems: 'center'
            }}>

                {/* Left Content - Giant Text */}
                <div style={{ zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    >
                        <div style={{
                            display: 'inline-block',
                            background: 'var(--accent-orange)',
                            color: 'var(--text-primary)',
                            border: '3px solid var(--border-hard)',
                            padding: '0.5rem 1rem',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            transform: 'rotate(-3deg)',
                            boxShadow: '4px 4px 0 var(--border-hard)',
                            marginBottom: '2rem'
                        }}>
                            HELLO, WORLD! I'M
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(4rem, 8vw, 7rem)',
                            fontWeight: 900,
                            lineHeight: 0.9,
                            marginBottom: '1rem',
                            letterSpacing: '-2px',
                        }}>
                            <span className="text-stroke" style={{ color: 'var(--accent-yellow)' }}>SAJITH</span><br />
                            KUMAR
                        </h1>

                        <p className="funky-panel" style={{
                            fontSize: '1.2rem',
                            maxWidth: '600px',
                            padding: '1.5rem',
                            background: 'var(--accent-green)',
                            margin: '2rem 0',
                            transform: 'rotate(1deg)'
                        }}>
                            Frontend Developer & <span style={{ color: 'var(--accent-pink)', textDecoration: 'underline wavy var(--border-hard) 3px' }}>UI/UX Designer</span> with a core in Graphic Design. Building high-octane interfaces and visual stories.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '3rem' }}>
                            <a href="#contact" className="funky-btn">
                                LET'S TALK <ArrowDownRight size={24} strokeWidth={3} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content - Funky Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotate: -10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}
                >
                    {/* Decorative Star */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        style={{ position: 'absolute', top: '-10%', right: '10%', zIndex: 20 }}
                    >
                        <SquareAsterisk size={80} color="var(--accent-pink)" strokeWidth={2} style={{ filter: 'drop-shadow(4px 4px 0 var(--border-hard))' }} />
                    </motion.div>

                    {/* The main picture block */}
                    <div className="funky-panel" style={{
                        width: '100%',
                        maxWidth: '450px',
                        aspectRatio: '3/4',
                        background: 'var(--accent-cyan)',
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'rotate(3deg)'
                    }}>

                        <div style={{
                            textAlign: 'center',
                            background: 'var(--bg-secondary)',
                            border: '3px dashed var(--border-hard)',
                            padding: '2rem',
                            transform: 'rotate(-3deg)',
                            boxShadow: '4px 4px 0 var(--accent-pink)'
                        }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📸</div>
                            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--accent-pink)' }}>
                                DROP YOUR<br />FUNKY PNG<br />HERE
                            </p>
                        </div>

                        {/* Floating Badge */}
                        <div className="funky-panel funky-hover" style={{
                            position: 'absolute',
                            bottom: '-20px',
                            left: '-40px',
                            background: 'var(--accent-yellow)',
                            padding: '1rem',
                            transform: 'rotate(-10deg)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 900 }}>✦</span>
                            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>UI/UX DESIGN</span>
                        </div>

                    </div>
                </motion.div>

            </div>

            <style>{`
        @media (max-width: 968px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .funky-panel { margin: 2rem auto !important; }
          .funky-btn { justify-content: center; }
          
          .hero-section > .container > div:last-child {
            margin-top: 4rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
