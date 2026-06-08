import "./GameWebshop.css";
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
    { num: "01", title: "Storefront Design",   desc: "Immersive product pages with cinematic layouts built to make student games feel premium." },
    { num: "02", title: "Shopping Cart Flow",  desc: "Full cart system with add, remove and checkout logic wired to a MySQL backend via REST." },
    { num: "03", title: "Dynamic Products",    desc: "Games loaded dynamically from the database — no hardcoded content, fully scalable." },
    { num: "04", title: "Full-Stack Platform", desc: "Node.js + Express backend serving a Vite/TypeScript frontend with responsive layouts." },
];

const fade = (delay = 0) => ({
    initial:    { opacity: 0, y: 24 },
    animate:    { opacity: 1, y: 0  },
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function GameWebshop() {
    return (
        <motion.section
            className="gw"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
        >
            <div className="gw-halftone" aria-hidden="true" />
            <span className="gw-sfx gw-sfx-1" aria-hidden="true">BUY!!</span>
            <span className="gw-sfx gw-sfx-2" aria-hidden="true">PLAY!</span>
            <div className="corner gw-c-tl" /><div className="corner gw-c-tr" />
            <div className="corner gw-c-bl" /><div className="corner gw-c-br" />

            {/* nav */}
            <motion.div className="gw-nav" {...fade(0.15)}>
                <Link to="/" className="gw-back">
                    <span className="gw-back-arrow">◀</span> BACK TO HOME
                </Link>
                <div className="gw-breadcrumb">
                    <span>PROJECTS</span><span className="bc-sep">◆</span>
                    <span className="bc-active">GAME WEBSHOP</span>
                </div>
            </motion.div>

            {/* title */}
            <motion.div className="gw-hero-panel" {...fade(0.2)}>
                <div className="gw-chapter-tag">CHAPTER 03 — FULL-STACK</div>
                <div className="gw-title-block">
                    <h1 className="gw-title">
                        <span className="gw-t1">LUCA</span>
                        <span className="gw-t2">STARS</span>
                    </h1>
                    <div className="gw-title-meta">
                        <span className="gw-status"><span className="gw-dot" />COMPLETED</span>
                        <span className="gw-lang">TS · NODE · MYSQL</span>
                    </div>
                </div>
            </motion.div>

            {/* image panel */}
            <motion.div className="gw-image-wrap" {...fade(0.28)}>
                <div className="gw-image-panel">
                    <div className="gw-image" />
                    <div className="gw-scan" aria-hidden="true" />
                    <div className="mp-hud mp-hud-tl" /><div className="mp-hud mp-hud-tr" />
                    <div className="mp-hud mp-hud-bl" /><div className="mp-hud mp-hud-br" />
                    <div className="gw-image-label">[ LUCASTAR WEBSHOP — PRODUCT PAGE ]</div>
                </div>
            </motion.div>

            {/* desc + features */}
            <div className="gw-body">
                <motion.div className="gw-desc-panel" {...fade(0.35)}>
                    <div className="gw-panel-label">— DESCRIPTION —</div>
                    <p className="gw-desc">
                        LucaStars is an immersive digital storefront built for student-created games.
                        The goal was to combine playful frontend design with a solid full-stack backbone —
                        dynamic product systems, shopping cart flows and REST API integration
                        all working together to create a platform that felt both visually alive
                        and functionally scalable.
                    </p>
                </motion.div>

                <motion.div className="gw-features" {...fade(0.42)}>
                    {features.map((f) => (
                        <div className="gw-feature-card" key={f.num}>
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
            <motion.div className="gw-stack" {...fade(0.5)}>
                <div className="gw-stack-label">— TECH STACK —</div>
                <div className="gw-tags">
                    {stack.map((s) => (
                        <span className="gw-tag" key={s.name}>
                            <span className="gw-tag-icon">{s.icon}</span>{s.name}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}