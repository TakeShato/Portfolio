import "./Hero.css";

function Hero() {
    
    return (
        <section className="hero">

            <h1 className="hero-title">
                Ramzi Chejjar
            </h1>

            <p className="hero-subtitle">
                Software Engineering Student
            </p>

            <div className="hero-socials">
                <a href="#">
                    GitHub
                </a>

                <a href="#">
                    Linkedin 
                </a>

                <div className="hero-navigation">

                    <button>About Me</button>

                    <button>Projects</button>

                    <button>Contact</button>

                </div>
            </div>
        </section>
    );

}

export default Hero;