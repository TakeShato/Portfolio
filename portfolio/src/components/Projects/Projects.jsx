import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {

    return (

        <section id="projects" className="projects">

            <div className="projects-grid">

                <Link to="/bodytracker" className="projects-panel panel-1">
                    <h3>Body Tracker</h3>
                </Link>

                <Link to="/gamewebshop" className="projects-panel panel-2">
                    <h3>Game Webshop</h3>
                </Link>

                <Link to="/codeexchange" className="projects-panel panel-3">
                    <h3>Code Exchange</h3>
                </Link>

                <Link to="/elections" className="projects-panel panel-4">
                    <h3>Elections</h3>
                </Link>

            </div>

        </section>
    )
}

export default Projects;