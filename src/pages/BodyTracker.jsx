import "./BodyTracker.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- image imports (adjust paths to match your project structure) ---
import proto1   from "../assets/projects/proto_1.jpg";
import proto2   from "../assets/projects/proto_2.jpg";
import faceBlur from "../assets/projects/faceplusblur.jpg";
import endProto from "../assets/projects/endproto.jpg";
import expo     from "../assets/projects/expo.jpg";
import gallery  from "../assets/projects/snapshotgallery.jpg";

// ── data ──────────────────────────────────────────────────────
const stack = [
    { name: "Python",            icon: "🐍" },
    { name: "OpenCV",            icon: "👁"  },
    { name: "MediaPipe",         icon: "🤖" },
    { name: "DeepFace",          icon: "🧬" },
    { name: "Computer Vision",   icon: "📷" },
    { name: "AI",                icon: "⚡" },
    { name: "Raspberry Pi 5",    icon: "🖥"  },
    { name: "Image Processing",  icon: "🖼"  },
];

const learned = [
    "AI Engineering", "Computer Vision", "MediaPipe", "OpenCV",
    "DeepFace", "Real-time Processing", "AI Optimisation", "Privacy-focused AI",
    "Threading", "Frame Skipping", "Raspberry Pi", "Backend Dev",
];

// ── component ─────────────────────────────────────────────────
export default function BodyTracker() {

    const fade = (delay = 0) => ({
        initial:    { opacity: 0, y: 28 },
        animate:    { opacity: 1, y: 0  },
        transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    });

    return (
        <motion.section
            className="bt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
        >
            {/* decorative */}
            <div className="bt-halftone" aria-hidden="true" />
            <span className="bt-sfx bt-sfx-1" aria-hidden="true">DETECT!</span>
            <span className="bt-sfx bt-sfx-2" aria-hidden="true">TRACK!!</span>
            <div className="corner bt-c-tl" /><div className="corner bt-c-tr" />
            <div className="corner bt-c-bl" /><div className="corner bt-c-br" />

            {/* ── nav ── */}
            <motion.div className="bt-nav" {...fade(0.15)}>
                <Link to="/" className="bt-back">
                    <span className="bt-back-arrow">◀</span> 
                    <span>BACK TO HOME </span>
                </Link>
                <div className="bt-breadcrumb">
                    <span>PROJECTS</span>
                    <span className="bc-sep">◆</span>
                    <span className="bc-active">BODY TRACKER</span>
                </div>
            </motion.div>

            {/* ════════════════════════════════════════
                TITLE PANEL
            ════════════════════════════════════════ */}
            <motion.div className="bt-hero-panel" {...fade(0.2)}>
                <div className="bt-chapter-tag">CHAPTER 02 — COMPUTER VISION</div>
                <div className="bt-title-block">
                    <h1 className="bt-title">
                        <span className="bt-t1">BODY</span>
                        <span className="bt-t2">TRACKER</span>
                    </h1>
                    <div className="bt-title-meta">
                        <span className="bt-status"><span className="bt-dot" />ACTIVE PROJECT</span>
                        <span className="bt-lang">PYTHON · CV · AI · DEEPFACE</span>
                    </div>
                </div>
            </motion.div>

            {/* ════════════════════════════════════════
                ROLE BANNER
            ════════════════════════════════════════ */}
            <motion.div className="bt-role-banner" {...fade(0.28)}>
                <div className="role-left">
                    <span className="role-tag">MY ROLE</span>
                    <span className="role-title">AI ENGINEER</span>
                </div>
                <p className="role-desc">
                    I was responsible for almost the full AI backbone of this project body tracking,
                    face recognition, privacy blur and the automated snapshot system.
                    Everything from the first webcam prototype to the live expo deployment.
                </p>
            </motion.div>

            {/* ════════════════════════════════════════
                SECTION 1 — THE BEGINNING
                proto_1 (first camera prototype)
                proto_2 (first face tracker)
            ════════════════════════════════════════ */}
            <motion.div className="bt-chapter-divider" {...fade(0.3)}>
                <span className="chap-num">01</span>
                <span className="chap-title">THE BEGINNING — FROM HAARCASCADE TO MEDIAPIPE</span>
                <div className="chap-line" />
            </motion.div>

            <motion.div className="bt-spread bt-spread-left" {...fade(0.35)}>

                {/* image block — two stacked panels */}
                <div className="spread-images spread-images-stack">
                    <div className="manga-panel mp-tall">
                        <img src={proto1} alt="First camera prototype — Logitech webcam on cardboard mount" />
                        <div className="mp-hud mp-hud-tl" /><div className="mp-hud mp-hud-tr" />
                        <div className="mp-hud mp-hud-bl" /><div className="mp-hud mp-hud-br" />
                        <div className="mp-label">[ PROTO v0.1 — CAMERA MOUNT ]</div>
                    </div>
                    <div className="manga-panel mp-short">
                        <img src={proto2} alt="First face tracker prototype in browser" />
                        <div className="mp-hud mp-hud-tl" /><div className="mp-hud mp-hud-tr" />
                        <div className="mp-hud mp-hud-bl" /><div className="mp-hud mp-hud-br" />
                        <div className="mp-label">[ PROTO v0.2 — FACE TRACKER ]</div>
                        <span className="mp-sfx">FOUND!</span>
                    </div>
                </div>

                {/* text block */}
                <div className="spread-text">
                    <div className="st-tag">ITERATION 01 — 02</div>
                    <h2 className="st-heading">The First<br />Prototype</h2>
                    <div className="st-rule" />
                    <p className="st-body">
                        We started by building the physical camera setup. A Logitech webcam mounted
                        on a handmade cardboard rig connected to a Raspberry Pi 5. Simple, raw, but it worked.
                    </p>
                    <p className="st-body">
                        For detection I initially implemented <strong>Haarcascade inside OpenCV</strong>.
                        It detected faces, but it was jittery, inaccurate and couldn't handle movement
                        reliably. I knew we needed something better for real-time tracking.
                    </p>
                    <p className="st-body">
                        After researching alternatives I switched to <strong>MediaPipe Pose</strong> for
                        body tracking — giving us smooth skeletal landmark detection directly from
                        the live webcam feed.
                    </p>
                    <div className="st-tags">
                        <span>Haarcascade</span>
                        <span>OpenCV</span>
                        <span>MediaPipe</span>
                        <span>Raspberry Pi 5</span>
                    </div>
                </div>

            </motion.div>

            {/* ════════════════════════════════════════
                SECTION 2 — FACE RECOGNITION + BLUR
                faceplusblur.jpg + endproto.jpg
            ════════════════════════════════════════ */}
            <motion.div className="bt-chapter-divider" {...fade(0.38)}>
                <span className="chap-num">02</span>
                <span className="chap-title">FACE RECOGNITION & PRIVACY BLUR</span>
                <div className="chap-line" />
            </motion.div>

            <motion.div className="bt-spread bt-spread-right" {...fade(0.42)}>

                {/* text block */}
                <div className="spread-text">
                    <div className="st-tag">ITERATION 03 — 04</div>
                    <h2 className="st-heading">DeepFace<br />Embeddings</h2>
                    <div className="st-rule" />
                    <p className="st-body">
                        Beyond tracking, I built a <strong>visitor recognition system using DeepFace</strong>.
                        The system generates facial embeddings for each detected person and compares
                        them against stored visitors so the same person is never logged twice.
                    </p>
                    <p className="st-body">
                        Privacy was a core requirement. Before any snapshot was saved,
                        I applied <strong>OpenCV Gaussian Blur</strong> to blur the detected face
                        ensuring visitors couldn't be directly identified from stored images.
                    </p>
                    <p className="st-body">
                        The development shot (right) shows both systems live: the face bounding box,
                        the blurred snapshot saved to disk, and the backend logs confirming the
                        blurred visitor was stored.
                    </p>
                    <div className="st-tags">
                        <span>DeepFace</span>
                        <span>Facial Embeddings</span>
                        <span>Gaussian Blur</span>
                        <span>Privacy AI</span>
                    </div>
                </div>

                {/* image block — side by side */}
                <div className="spread-images spread-images-side">
                    <div className="manga-panel mp-tall">
                        <img src={faceBlur} alt="Face recognition and blur prototype in VS Code" />
                        <div className="mp-hud mp-hud-tl" /><div className="mp-hud mp-hud-tr" />
                        <div className="mp-hud mp-hud-bl" /><div className="mp-hud mp-hud-br" />
                        <div className="mp-label">[ DEV — FACE + BLUR LIVE ]</div>
                        <span className="mp-sfx">BLUR!!</span>
                    </div>
                    <div className="manga-panel mp-tall">
                        <img src={endProto} alt="Final prototype — laser-cut housing with webcam" />
                        <div className="mp-hud mp-hud-tl" /><div className="mp-hud mp-hud-tr" />
                        <div className="mp-hud mp-hud-bl" /><div className="mp-hud mp-hud-br" />
                        <div className="mp-label">[ FINAL HARDWARE ]</div>
                    </div>
                </div>

            </motion.div>

            {/* ════════════════════════════════════════
                SECTION 3 — EXPO + GALLERY
                expo.jpg  (full width hero)
                snapshotgallery.jpg
            ════════════════════════════════════════ */}
            <motion.div className="bt-chapter-divider" {...fade(0.45)}>
                <span className="chap-num">03</span>
                <span className="chap-title">EXPO — LIVE DEPLOYMENT</span>
                <div className="chap-line" />
            </motion.div>

            <motion.div className="bt-expo-block" {...fade(0.5)}>

                {/* wide expo panel */}
                <div className="manga-panel mp-expo">
                    <img src={expo} alt="Expo setup with two monitors showing live body tracker feed" />
                    <div className="mp-scan" aria-hidden="true" />
                    <div className="mp-hud mp-hud-tl" /><div className="mp-hud mp-hud-tr" />
                    <div className="mp-hud mp-hud-bl" /><div className="mp-hud mp-hud-br" />
                    <div className="mp-label">[ EXPO DEPLOYMENT — LIVE FEED ACTIVE ]</div>
                    <span className="mp-sfx mp-sfx-expo">LIVE!!</span>
                </div>

                {/* gallery panel + text side by side */}
                <div className="bt-gallery-row">
                    <div className="manga-panel mp-gallery">
                        <img src={gallery} alt="Snapshot gallery showing all captured visitors with timestamps" />
                        <div className="mp-hud mp-hud-tl" /><div className="mp-hud mp-hud-tr" />
                        <div className="mp-hud mp-hud-bl" /><div className="mp-hud mp-hud-br" />
                        <div className="mp-label">[ SNAPSHOT GALLERY — AUTO-CAPTURED ]</div>
                        <span className="mp-sfx">SAVED!</span>
                    </div>

                    <div className="spread-text">
                        <div className="st-tag">FINAL PRODUCT</div>
                        <h2 className="st-heading">Snapshot<br />Gallery</h2>
                        <div className="st-rule" />
                        <p className="st-body">
                            At the expo, visitors walked in front of the camera.
                            The system detected each new unique person, automatically
                            captured a blurred snapshot and stored it inside the gallery —
                            fully autonomous, no manual input needed.
                        </p>
                        <p className="st-body">
                            The gallery page (hosted on the Raspberry Pi) displayed every
                            captured visitor with a timestamp, giving the installation
                            a live surveillance-art feel.
                        </p>
                        <p className="st-body">
                            To keep it running smoothly on the Pi 5 under real expo conditions
                            I implemented <strong>threading, frame skipping</strong> and
                            <strong> resolution scaling</strong> balancing accuracy against hardware limits.
                        </p>
                        <div className="st-tags">
                            <span>Auto-snapshot</span>
                            <span>Gallery</span>
                            <span>Threading</span>
                            <span>Frame Skipping</span>
                        </div>
                    </div>
                </div>

            </motion.div>

            {/* ════════════════════════════════════════
                LEARNINGS
            ════════════════════════════════════════ */}
            <motion.div className="bt-learned" {...fade(0.55)}>
                <div className="bt-chapter-divider">
                    <span className="chap-num">04</span>
                    <span className="chap-title">WHAT I LEARNED</span>
                    <div className="chap-line" />
                </div>
                <div className="learned-grid">
                    {learned.map((l, i) => (
                        <div className="learned-card" key={l}>
                            <span className="lc-num">{String(i + 1).padStart(2, "0")}</span>
                            <span className="lc-name">{l}</span>
                        </div>
                    ))}
                </div>
                <p className="learned-outro">
                    This project taught me how to combine AI models, tracking systems,
                    image processing and backend development into one complete working application
                    and how to make it survive real-world expo conditions on limited hardware.
                </p>
            </motion.div>

            {/* ════════════════════════════════════════
                TECH STACK
            ════════════════════════════════════════ */}
            <motion.div className="bt-stack" {...fade(0.6)}>
                <div className="bt-stack-label">— TECH STACK —</div>
                <div className="bt-tags">
                    {stack.map((s) => (
                        <span className="bt-tag" key={s.name}>
                            <span className="bt-tag-icon">{s.icon}</span>
                            {s.name}
                        </span>
                    ))}
                </div>
            </motion.div>

        </motion.section>
    );
}