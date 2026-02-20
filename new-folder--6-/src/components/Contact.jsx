import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, LayoutTemplate } from 'lucide-react';

const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, rotate: 5 },
        visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 120 } }
    };

    const socialLinks = [
        {
            name: "LINKEDIN",
            icon: <Linkedin size={40} strokeWidth={2.5} />,
            url: "https://linkedin.com/in/sajithkumar160905",
            color: "var(--accent-cyan)",
            handle: "sajithkumar160905"
        },
        {
            name: "INSTAGRAM",
            icon: <Instagram size={40} strokeWidth={2.5} />,
            url: "https://instagram.com/_sajiithh_",
            color: "var(--accent-pink)",
            handle: "_sajiithh_"
        },
        {
            name: "PINTEREST",
            icon: <LayoutTemplate size={40} strokeWidth={2.5} />,
            url: "https://pinterest.com/sajithhh",
            color: "var(--accent-orange)",
            handle: "sajithhh"
        },
        {
            name: "EMAIL",
            icon: <Mail size={40} strokeWidth={2.5} />,
            url: "mailto:kumarsajith173@gmail.com",
            color: "var(--accent-yellow)",
            handle: "kumarsajith173@gmail.com"
        }
    ];

    return (
        <section id="contact" style={{ padding: '120px 0', position: 'relative' }}>

            {/* Background massive letters */}
            <div style={{
                position: 'absolute', top: '10%', left: '5%',
                fontSize: '20rem', fontWeight: 900, color: 'transparent',
                WebkitTextStroke: '4px var(--border-hard)', opacity: 0.1,
                zIndex: 0, pointerEvents: 'none', transform: 'rotate(-10deg)'
            }}>
                S/K
            </div>

            <div className="container" style={{ maxWidth: '1000px', textAlign: 'center', position: 'relative', zIndex: 1 }}>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 900, marginBottom: '1rem', color: 'white', WebkitTextStroke: '2px var(--border-hard)', textShadow: '6px 6px 0 var(--accent-pink)' }}>
                            LET'S <span style={{ color: 'var(--accent-yellow)' }}>CONNECT</span>
                        </h2>
                        <p className="funky-panel" style={{
                            fontSize: '1.3rem',
                            background: 'white',
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            transform: 'rotate(2deg)'
                        }}>
                            Ready to create something amazing? Let's talk about your next project or just say hello!
                        </p>
                    </motion.div>

                    {/* Solid Social Grid */}
                    <motion.div
                        variants={containerVariants}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '2.5rem',
                            marginBottom: '6rem'
                        }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="funky-panel funky-hover"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '3rem 1rem',
                                        gap: '1rem',
                                        background: social.color,
                                        color: 'var(--border-hard)',
                                        transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`,
                                        textDecoration: 'none'
                                    }}
                                >
                                    <div style={{
                                        background: 'white',
                                        padding: '1rem',
                                        borderRadius: '50%',
                                        border: '4px solid var(--border-hard)',
                                        boxShadow: '4px 4px 0 var(--border-hard)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1rem'
                                    }}>
                                        {social.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>{social.name}</h3>
                                    <div style={{
                                        background: 'var(--bg-secondary)',
                                        padding: '0.5rem 1rem',
                                        border: '2px solid var(--border-hard)',
                                        fontSize: '0.9rem',
                                        fontWeight: 700
                                    }}>
                                        @{social.handle.split('@')[0]}
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Footer */}
                    <motion.footer
                        variants={itemVariants}
                        style={{
                            paddingTop: '3rem',
                            borderTop: '6px solid var(--border-hard)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem'
                        }}
                    >
                        <div style={{
                            fontWeight: 900,
                            fontSize: '3rem',
                            color: 'var(--accent-purple)',
                            WebkitTextStroke: '2px var(--border-hard)',
                            textShadow: '3px 3px 0 var(--border-hard)',
                            transform: 'rotate(-3deg)'
                        }}>
                            S/K.
                        </div>
                        <p style={{ fontWeight: 700, fontSize: '1rem', background: 'var(--accent-yellow)', padding: '0.5rem 1rem', border: '3px solid var(--border-hard)', boxShadow: '4px 4px 0 var(--border-hard)' }}>
                            &copy; {new Date().getFullYear()} SAJITH KUMAR. ALL RIGHTS RESERVED.
                        </p>
                    </motion.footer>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
