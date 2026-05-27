import "./Hero.css";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-content">

                <h1 className="hero-title">
                    Ramzi Chejjar
                </h1>

                <div className="hero-line"></div>

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

                </div>

                <div className="hero-navigation">

                    <a href="#about">
                        About Me
                    </a>

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#contact">
                        Contact
                    </a>



                </div>

            </div>

        </section>

    );

}

export default Hero;