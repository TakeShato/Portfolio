import "./About.css";

function About() {
    const skills = [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 78 },
        { name: "Java", level: 72 },
        { name: "Python", level: 68 },
    ];

    return (
        <section id="about" className="about">

            {/* Halftone bg */}
            <div className="about-halftone" aria-hidden="true" />

            {/* Corner brackets */}
            <div className="corner corner-tl" aria-hidden="true" />
            <div className="corner corner-tr" aria-hidden="true" />
            <div className="corner corner-bl" aria-hidden="true" />
            <div className="corner corner-br" aria-hidden="true" />

            {/* SFX */}
            <span className="about-sfx" aria-hidden="true">THINK!</span>

            <div className="about-inner">

                {/* Left — text block */}
                <div className="about-left">

                    <div className="about-chapter-label">CHAPTER 01 — ORIGIN</div>

                    <p className="about-tag">About Me</p>

                    <h2 className="about-title">
                        <span className="title-black">Building</span>
                        <span className="title-red">Creative</span>
                        <span className="title-black">Digital</span>
                        <span className="title-outline">Experiences.</span>
                    </h2>

                    <div className="about-rule" />

                    <p className="about-description">
                        I'm a software engineering student with an obsession for building things that
                        <em> feel alive</em>.
                    </p>

                    <p className="about-description">
                        Creativity isn't a hobby for me, it's a method. I channel it into every interface,
                        every system, every brainstorm session. If there's a more interesting way to solve
                        a problem, I'll find it — and build it.
                    </p>

                    <div className="about-traits">
                        <span className="trait">Creative Problem Solver</span>
                        <span className="trait">Detail-Oriented</span>
                        <span className="trait">Team Player</span>
                    </div>

                </div>

                {/* Right — skills / stat panel */}
                <div className="about-right">

                    <div className="stat-panel">

                        <div className="stat-panel-header">
                            <span className="stat-panel-title">— SKILL STATS —</span>
                        </div>

                        <div className="skill-bars">
                            {skills.map((s) => (
                                <div className="skill-row" key={s.name}>
                                    <div className="skill-meta">
                                        <span className="skill-name">{s.name}</span>
                                        <span className="skill-val">{s.level}</span>
                                    </div>
                                    <div className="skill-track">
                                        <div
                                            className="skill-fill"
                                            style={{ '--fill': `${s.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="stat-divider" />

                        <div className="stat-grid">
                            <div className="stat-item">
                                <span className="stat-num">2</span>
                                <span className="stat-label">Years Coding</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">4</span>
                                <span className="stat-label">Projects Built</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">4</span>
                                <span className="stat-label">Languages</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">∞</span>
                                <span className="stat-label">Ideas / Day</span>
                            </div>
                        </div>

                        <div className="stat-panel-footer">
                            STATUS: <span className="status-active">ACTIVE &amp; LEARNING</span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;