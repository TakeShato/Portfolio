import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            {/* Speed lines background */}
            <div className="hero-speedlines" aria-hidden="true">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="speedline" style={{ '--i': i }} />
                ))}
            </div>

            {/* Halftone overlay */}
            <div className="hero-halftone" aria-hidden="true" />

            {/* Corner brackets — manga panel feel */}
            <div className="corner corner-tl" aria-hidden="true" />
            <div className="corner corner-tr" aria-hidden="true" />
            <div className="corner corner-bl" aria-hidden="true" />
            <div className="corner corner-br" aria-hidden="true" />

            {/* SFX text */}
            <span className="hero-sfx" aria-hidden="true">CODE!</span>

            <div className="hero-content">

                {/* Chapter label */}
                <div className="chapter-label">
                    <span>CHAPTER 01</span>
                </div>

                <h1 className="hero-title">
                    <span className="title-line-1">RAMZI</span>
                    <span className="title-line-2">CHEJJAR</span>
                </h1>

                <div className="hero-subtitle-wrap">
                    <div className="subtitle-line left" />
                    <p className="hero-subtitle">Software Engineering Student</p>
                    <div className="subtitle-line right" />
                </div>

                <div className="hero-socials">
                    <a href="https://github.com/TakeShato" className="manga-btn">
                        <span className="btn-bg" />
                        <span className="btn-text">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ramzi-chejjar-a76278337/" className="manga-btn">
                        <span className="btn-bg" />
                        <span className="btn-text">LinkedIn</span>
                    </a>
                </div>

                <div className="hero-navigation">
                    <a href="#about" className="nav-link">
                        <span className="nav-arrow">▶</span> 
                        <span>About Me</span>
                    </a>
                    <a href="#projects" className="nav-link">
                        <span className="nav-arrow">▶</span> 
                        <span>Projects</span>
                    </a>
                    <a href="#contact" className="nav-link">
                        <span className="nav-arrow">▶</span> 
                        <span>Contact</span>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;