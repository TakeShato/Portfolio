import "./Projects.css";
import { Link } from "react-router-dom";

const projects = [
    {
        to: "/bodytracker",
        className: "panel-1",
        label: "Body Tracker",
        sfx: "LIFT!!",
        chapter: "02",
        desc: "Fitness tracking app",
    },
    {
        to: "/gamewebshop",
        className: "panel-2",
        label: "Game Webshop",
        sfx: "BUY!!",
        chapter: "03",
        desc: "E-commerce platform",
    },
    {
        to: "/codeexchange",
        className: "panel-3",
        label: "Code Exchange",
        sfx: "HACK!",
        chapter: "04",
        desc: "Developer community",
    },
    {
        to: "/elections",
        className: "panel-4",
        label: "Elections",
        sfx: "VOTE!",
        chapter: "05",
        desc: "Data visualisation",
    },
];

function Projects() {
    return (
        <section id="projects" className="projects">

            {/* Section title — speech bubble style */}
            <div className="projects-header">
                <div className="projects-tag">Arc 01</div>
                <h2 className="projects-heading">MY WORK</h2>
                <div className="projects-rule" />
            </div>

            <div className="projects-grid">
                {projects.map((p) => (
                    <Link
                        key={p.to}
                        to={p.to}
                        className={`projects-panel ${p.className}`}
                    >
                        {/* Halftone dots inside panel */}
                        <div className="panel-halftone" aria-hidden="true" />

                        {/* Speed lines on hover */}
                        <div className="panel-lines" aria-hidden="true">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="pline" style={{ '--i': i }} />
                            ))}
                        </div>

                        {/* Chapter number */}
                        <span className="panel-chapter">CH.{p.chapter}</span>

                        {/* SFX text */}
                        <span className="panel-sfx" aria-hidden="true">{p.sfx}</span>

                        {/* Content */}
                        <div className="panel-content">
                            <p className="panel-desc">{p.desc}</p>
                            <h3 className="panel-title">{p.label}</h3>
                            <span className="panel-cta">READ MORE ▶</span>
                        </div>

                        {/* Thick ink border accent */}
                        <div className="panel-border-accent" aria-hidden="true" />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Projects;
