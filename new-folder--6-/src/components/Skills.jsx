import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, Layout, MonitorPlay, Zap } from 'lucide-react';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 10 } }
    };

    const devSkills = [
        { name: "HTML", color: "var(--accent-orange)" },
        { name: "CSS", color: "var(--accent-cyan)" },
        { name: "JAVASCRIPT", color: "var(--accent-yellow)" },
        { name: "REACT", color: "var(--accent-cyan)" },
        { name: "NODE.JS", color: "var(--accent-green)" },
        { name: "PYTHON", color: "var(--accent-purple)" }
    ];

    const designSkills = [
        { icon: <PenTool size={32} />, name: "GRAPHIC DESIGN", color: "var(--accent-pink)" },
        { icon: <Layout size={32} />, name: "UI/UX DESIGN", color: "var(--accent-orange)" },
        { icon: <MonitorPlay size={32} />, name: "VIDEO EDITING", color: "var(--accent-cyan)" }
    ];

    const softwareSkills = [
        "ADOBE PHOTOSHOP",
        "DAVINCI RESOLVE",
        "FIGMA",
        "ADOBE LIGHTROOM",
        "CAPCUT",
        "ALIGHT MOTION"
    ];

    return (
        <section id="skills" style={{ padding: '100px 0', position: 'relative', background: 'var(--border-hard)', color: 'white' }}>

            {/* Background Pattern */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'linear-gradient(45deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222), linear-gradient(45deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222)',
                backgroundPosition: '0 0, 20px 20px',
                backgroundSize: '40px 40px',
                opacity: 0.3,
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="funky-panel" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'var(--accent-yellow)',
                            color: 'var(--border-hard)',
                            fontWeight: 900,
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            transform: 'rotate(2deg)'
                        }}>
                            <Zap size={20} /> EXPERTISE
                        </div>
                        <h2 style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900, color: 'var(--accent-pink)', textShadow: '4px 4px 0 white' }}>
                            SKILLS & TOOLS
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '3rem'
                    }}>

                        {/* Development Skills */}
                        <motion.div variants={itemVariants} className="funky-panel" style={{ padding: '2.5rem', background: 'var(--bg-secondary)', color: 'var(--border-hard)', transform: 'rotate(-1deg)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '4px solid var(--border-hard)', paddingBottom: '1rem' }}>
                                <Code2 size={40} color="var(--accent-cyan)" style={{ filter: 'drop-shadow(2px 2px 0 var(--border-hard))' }} />
                                <h3 style={{ fontSize: '2rem', fontWeight: 900 }}>DEVELOPMENT</h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {devSkills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                                        className="funky-panel funky-hover"
                                        style={{
                                            background: skill.color,
                                            padding: '1rem 1.5rem',
                                            fontSize: '1.2rem',
                                            fontWeight: 900,
                                            color: index === 3 || index === 5 || index === 4 || index === 2 || index === 1 ? 'var(--border-hard)' : 'white' // ensuring contrast
                                        }}
                                    >
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                            {/* Core Disciplines */}
                            <motion.div variants={itemVariants} className="funky-panel" style={{ padding: '2.5rem', background: 'var(--accent-green)', color: 'var(--border-hard)', transform: 'rotate(1deg)' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem', textShadow: '2px 2px 0 white' }}>CORE DISCIPLINES</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {designSkills.map((skill, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ x: 10, backgroundColor: 'white' }}
                                            className="funky-panel"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1.5rem',
                                                padding: '1.5rem',
                                                background: skill.color,
                                                color: 'var(--border-hard)'
                                            }}
                                        >
                                            <div style={{ background: 'white', border: '3px solid var(--border-hard)', padding: '0.5rem', boxShadow: '2px 2px 0 var(--border-hard)' }}>{skill.icon}</div>
                                            <span style={{ fontWeight: 900, fontSize: '1.5rem' }}>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Software Tools */}
                            <motion.div variants={itemVariants} className="funky-panel" style={{ padding: '2.5rem', background: 'var(--accent-pink)', color: 'white', transform: 'rotate(-2deg)' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem', textShadow: '2px 2px 0 var(--border-hard)' }}>SOFTWARE</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {softwareSkills.map((software, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.1 }}
                                            className="funky-panel funky-hover"
                                            style={{
                                                padding: '0.8rem 1.2rem',
                                                background: 'white',
                                                color: 'var(--border-hard)',
                                                fontSize: '1.1rem',
                                                fontWeight: 900,
                                                transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)`
                                            }}
                                        >
                                            {software}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
