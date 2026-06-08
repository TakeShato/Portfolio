import "./Elections.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stack = [
    { name: "Vue",        icon: "💚" },
    { name: "Java",       icon: "☕" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Spring Boot",icon: "🌱" },
    { name: "Vite",       icon: "🚀" },
    { name: "Docker",     icon: "🐳" },
    { name: "REST APIs",  icon: "🔗" },
    { name: "MySQL",      icon: "🗄"  },
];

const features = [
    { num: "01", title: "Party Profiles",    desc: "Clear, unbiased breakdowns of every tweede kamer party — focused on what actually matters to young voters." },
    { num: "02", title: "Interactive Quiz",  desc: "Quiz system that matched users to parties based on their personal opinions and priorities." },
    { num: "03", title: "Spring Boot API",   desc: "Java backend serving party data, quiz results and user sessions via a RESTful API." },
    { num: "04", title: "Docker Deployment", desc: "Containerised full-stack setup so the entire application could be spun up consistently anywhere." },
];

const fade = (delay = 0) => ({
    initial:    { opacity: 0, y: 24 },
    animate:    { opacity: 1, y: 0  },
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function Elections() {
    return (
        <motion.section
            className="el"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
        >
            <div className="el-halftone" aria-hidden="true" />
            <span className="el-sfx el-sfx-1" aria-hidden="true">VOTE!!</span>
            <span className="el-sfx el-sfx-2" aria-hidden="true">KIES!</span>
            <div className="corner el-c-tl" /><div className="corner el-c-tr" />
            <div className="corner el-c-bl" /><div className="corner el-c-br" />

            {/* nav */}
            <motion.div className="el-nav" {...fade(0.15)}>
                <Link to="/" className="el-back">
                    <span className="el-back-arrow">◀</span>
                    <span>BACK TO HOME </span>
                </Link>
                <div className="el-breadcrumb">
                    <span>PROJECTS</span><span className="bc-sep">◆</span>
                    <span className="bc-active">ELECTIONS</span>
                </div>
            </motion.div>

            {/* title */}
            <motion.div className="el-hero-panel" {...fade(0.2)}>
                <div className="el-chapter-tag">CHAPTER 05 — CIVIC TECH</div>
                <div className="el-title-block">
                    <h1 className="el-title">
                        <span className="el-t1">ELECTIONS</span>
                    </h1>
                    <div className="el-title-meta">
                        <span className="el-status"><span className="el-dot" />COMPLETED</span>
                        <span className="el-lang">VUE · JAVA · SPRINGBOOT · DOCKER</span>
                    </div>
                </div>
            </motion.div>

            {/* image panel */}
            <motion.div className="el-image-wrap" {...fade(0.28)}>
                <div className="el-image-panel">
                    <div className="el-image" />
                    <div className="el-scan" aria-hidden="true" />
                    <div className="mp-hud mp-hud-tl" /><div className="mp-hud mp-hud-tr" />
                    <div className="mp-hud mp-hud-bl" /><div className="mp-hud mp-hud-br" />
                    <div className="el-image-label">[ ELECTIONS — PARTY OVERVIEW PAGE ]</div>
                </div>
            </motion.div>

            {/* desc + features */}
            <div className="el-body">
                <motion.div className="el-desc-panel" {...fade(0.35)}>
                    <div className="el-panel-label">— DESCRIPTION —</div>
                    <p className="el-desc">
                        Elections is a civic tech platform built to make young people more aware
                        of the parties they can vote for in the Tweede Kamer. The project presents
                        political parties in a clear, accessible way — cutting through noise so
                        first-time voters can make an informed choice. Built with Vue on the
                        frontend, a Java Spring Boot backend and deployed via Docker.
                    </p>
                </motion.div>

                <motion.div className="el-features" {...fade(0.42)}>
                    {features.map((f) => (
                        <div className="el-feature-card" key={f.num}>
                            <span className="fc-num">{f.num}</span>
                            <div className="fc-body">
                                <h3 className="fc-title">{f.title}</h3>
                                <p className="fc-desc">{f.desc}</p>
                            </div>
                            <div className="fc-accent" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* stack */}
            <motion.div className="el-stack" {...fade(0.5)}>
                <div className="el-stack-label">— TECH STACK —</div>
                <div className="el-tags">
                    {stack.map((s) => (
                        <span className="el-tag" key={s.name}>
                            <span className="el-tag-icon">{s.icon}</span>{s.name}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}