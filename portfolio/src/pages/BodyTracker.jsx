import "./BodyTracker.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BodyTracker() {

    return (

        <motion.section
            className="bodytracker"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            transition={{ duration: 0.6 }}
        >

            <Link to="/" className="back-button">
                ← Back to Home
            </Link>

            <div className="bodytracker-hero">

                <h1>
                    BodyTracker
                </h1>

                <div className="bodytracker-image"></div>

                <div className="project-info">

                    <h3>
                        Description
                    </h3>

                    <p>
                        BodyTracker is a real-time computer vision application
                        designed to detect and track human movement through a webcam feed.
                        The project combines body tracking, facial detection,
                        privacy-focused blurring and snapshot functionality into
                        a single interactive experience. Built around modern AI and
                        computer vision principles, the application explores how
                        technology can interpret movement while maintaining user privacy.
                    </p>

                </div>

                <div className="stack-tags">

                    <span>Python</span>
                    <span>OpenCV</span>
                    <span>MediaPipe</span>
                    <span>Computer Vision</span>
                    <span>AI</span>
                    <span>Face Detection</span>
                    <span>Body Tracking</span>
                    <span>Image Processing</span>

                </div>

            </div>

        </motion.section>

    );

}

export default BodyTracker;