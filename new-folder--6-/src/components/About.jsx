import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin, Mail, Sparkles } from 'lucide-react';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
    };

    const infoList = [
        { icon: <User size={24} />, label: "GENDER", value: "MALE" },
        { icon: <Calendar size={24} />, label: "DOB", value: "09/16/2005" },
        { icon: <MapPin size={24} />, label: "NATION", value: "INDIAN" },
        { icon: <Mail size={24} />, label: "EMAIL", value: "KUMARSAJITH173@GMAIL.COM" }
    ];

    return (
        <section id="about" style={{ padding: '120px 0', position: 'relative' }}>
            <div className="container">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    style={{
                        maxWidth: '1100px',
                        margin: '0 auto',
                    }}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <div className="funky-panel" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'var(--accent-purple)',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            marginBottom: '1.5rem',
                            transform: 'rotate(-2deg)'
                        }}>
                            <Sparkles size={20} /> INSIGHT
                        </div>
                        <h2 style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900, WebkitTextStroke: '2px var(--border-hard)', color: 'var(--bg-primary)', textShadow: '4px 4px 0 var(--border-hard)' }}>
                            ABOUT <span style={{ color: 'var(--accent-cyan)' }}>ME</span>
                        </h2>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)',
                        gap: '3rem',
                        alignItems: 'start'
                    }}>

                        {/* Left: Bio Block */}
                        <motion.div variants={itemVariants} className="funky-panel funky-hover" style={{ padding: '3rem', background: 'var(--accent-pink)', color: 'white' }}>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 900, textTransform: 'uppercase', textShadow: '2px 2px 0 var(--border-hard)' }}>
                                Visual Storyteller
                            </h3>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                marginBottom: '1.5rem',
                                fontWeight: 700,
                                backgroundColor: 'var(--border-hard)',
                                color: 'var(--bg-primary)',
                                padding: '1rem',
                                border: '3px solid var(--border-hard)'
                            }}>
                                I am a passionate <span style={{ color: 'var(--accent-yellow)' }}>Frontend Developer & UI/UX Designer</span> with a strong foundation in Graphic Design and Video Editing. My unique blend of skills allows me to approach development from a highly visual perspective.
                            </p>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                fontWeight: 700,
                                border: '3px solid var(--border-hard)',
                                padding: '1rem',
                                background: 'var(--bg-primary)',
                                color: 'var(--text-primary)',
                                boxShadow: '4px 4px 0 var(--border-hard)'
                            }}>
                                I don't just write code; I craft high-performance interfaces and visual stories that engage users and deliver premium digital experiences.
                            </p>
                        </motion.div>

                        {/* Right: Personal Info Grid */}
                        <motion.div variants={itemVariants}>
                            <div className="funky-panel" style={{ padding: '2rem', height: '100%', background: 'var(--accent-green)' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 900, borderBottom: '4px solid var(--border-hard)', paddingBottom: '1rem', textShadow: '1px 1px 0 white' }}>
                                    DATA HUB
                                </h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {infoList.map((info, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.05, rotate: 1 }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1rem',
                                                background: 'var(--bg-secondary)',
                                                padding: '1rem',
                                                border: '3px solid var(--border-hard)',
                                                boxShadow: '4px 4px 0 var(--border-hard)',
                                                transform: idx % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'
                                            }}
                                        >
                                            <div style={{
                                                color: 'var(--accent-purple)'
                                            }}>
                                                {info.icon}
                                            </div>
                                            <div style={{ wordBreak: 'break-all' }}>
                                                <p style={{ fontSize: '0.85rem', fontWeight: 900, marginBottom: '0.2rem', color: 'var(--accent-orange)' }}>{info.label}</p>
                                                <p style={{ fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{info.value}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Languages Block */}
                                <div style={{ marginTop: '2.5rem', background: 'var(--bg-secondary)', padding: '1.5rem', border: '3px solid var(--border-hard)', boxShadow: '4px 4px 0 var(--border-hard)', transform: 'rotate(-2deg)' }}>
                                    <p style={{ fontSize: '1rem', fontWeight: 900, marginBottom: '1rem' }}>SPOKEN LANGUAGES</p>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {['TAMIL', 'ENGLISH'].map((lang, idx) => (
                                            <span key={idx} className="funky-panel" style={{
                                                padding: '0.5rem 1rem',
                                                background: idx === 0 ? 'var(--accent-cyan)' : 'var(--accent-yellow)',
                                                fontSize: '1.1rem',
                                                fontWeight: 900,
                                                transform: `rotate(${idx === 0 ? -3 : 3}deg)`
                                            }}>
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          section#about > .container > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
