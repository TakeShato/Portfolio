import "./Elections.css";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

function Elections() {

    return (
        <motion.section
    className="elections"

    initial={{ opacity: 0 }}

    animate={{ opacity: 1 }}

    exit={{ opacity: 0 }}

    transition={{ duration: 0.6 }}
>

            <Link to="/" className="back-button">
            ← Back to Home
            </Link>

            <div className="elections-hero">
            <h1>Elections</h1>

            <div className="elections-image"></div>

            <div className="project-info">

            <h3>Description</h3>

            <p>
                     LucaStars was built as an immersive digital storefront
    focused on creating a playful and interactive shopping experience
    for student-created games. The project combined frontend design,
    dynamic product systems and API integration into a full-stack
    platform that felt visually engaging while remaining functional
    and scalable. From responsive layouts to shopping cart flows,
    every part of the experience was designed to make browsing and
    discovering games feel intuitive, cinematic and alive.
            </p>

            </div>

            <div className="stack-tags">

    <span>TypeScript</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>Node.js</span>
    <span>Express</span>
    <span>MySQL</span>
    <span>REST APIs</span>
    <span>Vite</span>

            </div>

            </div>
        </motion.section>
    );
}

export default Elections;