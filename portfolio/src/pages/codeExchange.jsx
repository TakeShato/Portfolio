import "./CodeExchange.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stack = [
    { name: "TypeScript", icon: "🔷" },
    { name: "HTML",       icon: "🧱" },
    { name: "CSS",        icon: "🎨" },
    { name: "Node.js",    icon: "🟢" },
    { name: "Express",    icon: "⚡" },
    { name: "MySQL",      icon: "🗄"  },
    { name: "REST APIs",  icon: "🔗" },
    { name: "Vite",       icon: "🚀" },
];

const features = [
    { num: "01", title: "Question Feed",    desc: "Students post coding questions with code snippets, tags and context — searchable by language and topic." },
    { num: "02", title: "Answer System",    desc: "Peers answer questions and mark solutions as accepted — Stack Overflow-style threading for HvA ICT students." },
    { num: "03", title: "Code Formatting",  desc: "Inline code blocks rendered with syntax highlighting so answers actually read like code." },
    { num: "04", title: "User Profiles",    desc: "Each student has a profile showing their questions, answers and reputation within the community." },
];

const fade = (delay = 0) => ({
    initial:    { opacity: 0, y: 24 },
    animate:    { opacity: 1, y: 0  },
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function CodeExchange() {
    return (
        <motion.section
            className="ce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
        >
            <div className="ce-halftone" aria-hidden="true" />
            <span className="ce-sfx ce-sfx-1" aria-hidden="true">HACK!</span>
            <span className="ce-sfx ce-sfx-2" aria-hidden="true">CODE!!</span>
            <div className="corner ce-c-tl" /><div className="corner ce-c-tr" />
            <div className="corner ce-c-bl" /><div className="corner ce-c-br" />

            {/* nav */}
            <motion.div className="ce-nav" {...fade(0.15)}>
                <Link to="/" className="ce-back">
                    <span className="ce-back-arrow">◀</span> 
                    <span>BACK TO HOME </span>
                </Link>
                <div className="ce-breadcrumb">
                    <span>PROJECTS</span><span className="bc-sep">◆</span>
                    <span className="bc-active">CODE EXCHANGE</span>
                </div>
            </motion.div>

            {/* title */}
            <motion.div className="ce-hero-panel" {...fade(0.2)}>
                <div className="ce-chapter-tag">CHAPTER 04 — COMMUNITY PLATFORM</div>
                <div className="ce-title-block">
                    <h1 className="ce-title">
                        <span className="ce-t1">CODE</span>
                        <span className="ce-t2">EXCHANGE</span>
                    </h1>
                    <div className="ce-title-meta">
                        <span className="ce-status"><span className="ce-dot" />COMPLETED</span>
                        <span className="ce-lang">TS · NODE · MYSQL</span>
                    </div>
                </div>
            </motion.div>

            {/* image */}
            <motion.div className="ce-image-wrap" {...fade(0.28)}>
                <div className="ce-image-panel">
                    <div className="ce-image" />
                    <div className="ce-scan" aria-hidden="true" />
                    <div className="mp-hud mp-hud-tl" /><div className="mp-hud mp-hud-tr" />
                    <div className="mp-hud mp-hud-bl" /><div className="mp-hud mp-hud-br" />
                    <div className="ce-image-label">[ CODE EXCHANGE — QUESTION FEED ]</div>
                </div>
            </motion.div>

            {/* desc + features */}
            <div className="ce-body">
                <motion.div className="ce-desc-panel" {...fade(0.35)}>
                    <div className="ce-panel-label">— DESCRIPTION —</div>
                    <p className="ce-desc">
                        Code Exchange is a Stack Overflow-style Q&amp;A platform built specifically
                        for ICT students at the HvA. Students can post coding questions, share snippets,
                        receive answers from peers and mark solutions as accepted. The goal was
                        to create a focused community space where students help each other debug,
                        learn and grow — without the noise of a public platform.
                    </p>
                </motion.div>

                <motion.div className="ce-features" {...fade(0.42)}>
                    {features.map((f) => (
                        <div className="ce-feature-card" key={f.num}>
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
            <motion.div className="ce-stack" {...fade(0.5)}>
                <div className="ce-stack-label">— TECH STACK —</div>
                <div className="ce-tags">
                    {stack.map((s) => (
                        <span className="ce-tag" key={s.name}>
                            <span className="ce-tag-icon">{s.icon}</span>{s.name}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}