import "./Contact.css";
import { useState } from "react";

function Contact() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <section id="contact" className="contact">

            {/* Halftone */}
            <div className="contact-halftone" aria-hidden="true" />

            {/* Corner brackets */}
            <div className="corner corner-tl" aria-hidden="true" />
            <div className="corner corner-tr" aria-hidden="true" />
            <div className="corner corner-bl" aria-hidden="true" />
            <div className="corner corner-br" aria-hidden="true" />

            {/* SFX */}
            <span className="contact-sfx" aria-hidden="true">SEND!!</span>

            <div className="contact-inner">

                {/* Left — heading block */}
                <div className="contact-left">

                    <div className="contact-chapter-label">FINAL CHAPTER — REACH OUT</div>

                    <p className="contact-tag">Contact</p>

                    <h2 className="contact-title">
                        <span className="ct-line ct-outline">LET'S</span>
                        <span className="ct-line ct-red">BUILD</span>
                        <span className="ct-line ct-white">SOMETHING.</span>
                    </h2>

                    <div className="contact-rule" />

                    <p className="contact-description">
                        Got a project, an idea, or just want to talk code?
                        Drop a message!
                    </p>

                    <div className="contact-links">
                        <a href="https://github.com/TakeShato" className="contact-social" target="_blank" rel="noreferrer">
                            <span className="cs-arrow">▶</span>
                            <span>GitHub</span>
                            <span className="cs-line" />
                        </a>
                        <a href="https://www.linkedin.com/in/ramzi-chejjar-a76278337/" className="contact-social" target="_blank" rel="noreferrer">
                            <span className="cs-arrow">▶</span>
                            <span>LinkedIn</span>
                            <span className="cs-line" />
                        </a>
                    </div>

                </div>

                {/* Right — form panel */}
                <div className="contact-right">

                    {!sent ? (
                        <div className="form-panel">

                            <div className="form-panel-header">
                                <span>— TRANSMISSION —</span>
                            </div>

                            <div className="form-fields">

                                <div className="field-group">
                                    <label className="field-label" htmlFor="name">NAME</label>
                                    <div className="field-wrap">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            className="field-input"
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        <div className="field-underline" />
                                    </div>
                                </div>

                                <div className="field-group">
                                    <label className="field-label" htmlFor="email">EMAIL</label>
                                    <div className="field-wrap">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="field-input"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        <div className="field-underline" />
                                    </div>
                                </div>

                                <div className="field-group">
                                    <label className="field-label" htmlFor="message">MESSAGE</label>
                                    <div className="field-wrap">
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="field-input field-textarea"
                                            placeholder="What's on your mind..."
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                        />
                                        <div className="field-underline" />
                                    </div>
                                </div>

                                <button
                                    className="submit-btn"
                                    onClick={handleSubmit}
                                    type="button"
                                >
                                    <span className="submit-bg" />
                                    <span className="submit-text">TRANSMIT ▶▶</span>
                                </button>

                            </div>

                        </div>
                    ) : (
                        <div className="form-panel sent-panel">
                            <span className="sent-sfx">SENT!!</span>
                            <p className="sent-msg">Message received.<br />I'll get back to you soon.</p>
                            <button className="reset-btn" onClick={() => setSent(false)}>← Send another</button>
                        </div>
                    )}

                </div>

            </div>

            {/* Footer strip */}
            <div className="contact-footer">
                <span>© RAMZI CHEJJAR — ALL RIGHTS RESERVED</span>
                <span className="footer-dot">◆</span>
                <span>BUILT WITH REACT</span>
            </div>

        </section>
    );
}

export default Contact;