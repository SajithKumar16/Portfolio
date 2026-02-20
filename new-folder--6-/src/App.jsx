import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app-container" style={{ position: 'relative', minHeight: '100vh' }}>

            {/* Funky decorative background elements */}
            <div style={{
                position: 'fixed', top: '10%', left: '-5%', width: '300px', height: '300px',
                backgroundColor: 'var(--accent-pink)', borderRadius: '50%',
                border: '4px solid var(--border-hard)', zIndex: -1,
                boxShadow: '8px 8px 0 var(--border-hard)'
            }}></div>
            <div style={{
                position: 'fixed', bottom: '5%', right: '-5%', width: '400px', height: '400px',
                backgroundColor: 'var(--accent-cyan)',
                border: '4px solid var(--border-hard)', zIndex: -1,
                boxShadow: '-8px -8px 0 var(--border-hard)', transform: 'rotate(15deg)'
            }}></div>

            {/* Header / Nav - Neobrutalist Block */}
            <nav style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                height: 'var(--nav-height)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 24px',
                zIndex: 100,
                background: 'var(--bg-secondary)',
                borderBottom: '4px solid var(--border-hard)',
                boxShadow: '0 8px 0 var(--border-hard)'
            }}>
                <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <div style={{
                        fontWeight: 900,
                        fontSize: '2rem',
                        letterSpacing: '0.05em',
                        color: 'var(--accent-yellow)',
                        WebkitTextStroke: '2px var(--border-hard)',
                        textShadow: '3px 3px 0 var(--border-hard)',
                        transform: 'rotate(-2deg)'
                    }}>
                        S/K.
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.1rem', fontWeight: 700 }}>
                        {['About', 'Skills', 'Education', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="funky-hover"
                                style={{
                                    color: 'var(--text-primary)',
                                    padding: '0.4rem 0.8rem',
                                    border: '3px solid transparent',
                                    borderRadius: '0px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'var(--accent-green)';
                                    e.target.style.border = '3px solid var(--border-hard)';
                                    e.target.style.boxShadow = '4px 4px 0 var(--border-hard)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.border = '3px solid transparent';
                                    e.target.style.boxShadow = 'none';
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main style={{ paddingTop: 'var(--nav-height)' }}>
                <Hero />
                <About />
                <Skills />
                <Education />
                <Contact />
            </main>
        </div>
    );
}

export default App;
