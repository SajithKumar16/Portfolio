import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50, rotate: -5 },
        visible: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring", stiffness: 100 } }
    };

    const educationData = [
        {
            period: "2023 - 2027",
            degree: "B.E IN COMPUTER SCIENCE",
            institution: "EXCEL INSTITUTION",
            description: "Pursuing Bachelor of Engineering with a focus on core computer science subjects, programming, and software development methodologies.",
            icon: <GraduationCap size={32} color="var(--bg-primary)" />,
            color: "var(--accent-purple)"
        },
        {
            period: "2011 - 2023",
            degree: "HIGHER SECONDARY",
            institution: "MOUNT MARY MATRIC HIGHER SECONDARY SCHOOL",
            description: "Completed secondary and higher secondary education with strong foundational knowledge.",
            icon: <Briefcase size={32} color="var(--bg-primary)" />,
            color: "var(--accent-orange)"
        }
    ];

    return (
        <section id="education" style={{ padding: '100px 0', position: 'relative' }}>
            {/* Decorative BG element */}
            <div style={{
                position: 'absolute', top: '20%', right: '-10%', width: '400px', height: '100px',
                background: 'var(--border-hard)', transform: 'rotate(-45deg)', zIndex: 0
            }}></div>

            <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900, textShadow: '4px 4px 0 var(--border-hard)', color: 'white', WebkitTextStroke: '2px var(--border-hard)' }}>
                            MY <span style={{ color: 'var(--accent-cyan)' }}>JOURNEY</span>
                        </h2>
                    </div>

                    <div style={{ position: 'relative' }}>
                        {/* Massive Timeline Line */}
                        <div style={{
                            position: 'absolute',
                            left: '46px',
                            top: 0,
                            bottom: 0,
                            width: '8px',
                            background: 'var(--border-hard)',
                            zIndex: 0
                        }} />

                        {/* Timeline Items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '2rem' }}
                                >
                                    {/* Chunky Icon Node */}
                                    <div className="funky-panel" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: item.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        marginTop: '0.5rem',
                                        zIndex: 2
                                    }}>
                                        {item.icon}
                                    </div>

                                    {/* Neobrutalist Content Card */}
                                    <div className="funky-panel funky-hover" style={{ padding: '2.5rem', flex: 1, background: 'var(--bg-secondary)', transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)` }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '0.5rem 1rem',
                                            background: 'var(--border-hard)',
                                            color: 'var(--accent-yellow)',
                                            fontWeight: 900,
                                            fontSize: '1rem',
                                            marginBottom: '1rem',
                                            border: '3px solid var(--border-hard)',
                                            boxShadow: '4px 4px 0 var(--accent-pink)'
                                        }}>
                                            {item.period}
                                        </div>
                                        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                            {item.degree}
                                        </h3>
                                        <h4 style={{ fontSize: '1.3rem', color: 'var(--accent-purple)', fontWeight: 900, marginBottom: '1rem', textShadow: '1px 1px 0 var(--border-hard)' }}>
                                            {item.institution}
                                        </h4>
                                        <p style={{ fontWeight: 700, fontSize: '1.1rem', background: 'var(--bg-primary)', padding: '1rem', border: '3px solid var(--border-hard)' }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>

            <style>{`
        @media (max-width: 600px) {
          section#education > .container > div > div:nth-of-type(2) > div:first-child {
            left: 26px !important;
          }
          section#education .funky-panel {
            padding: 1.5rem !important;
          }
          section#education > .container > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div:first-child {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Education;
