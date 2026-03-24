import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div>
            <img
              className="bio-pic"
              src="../assets/images/bio-pic.png"
              alt="bio"
            />
          </div>
          <div>
            <div className="section-header">
              <h4 className="subtitle scroll-animation" data-aos="fade-up">
                <i className="lar la-user"></i> Mission
              </h4>
              <h1 className="scroll-animation" data-aos="fade-up">
                Tech expertise with a
                <br />
                distinct <span>creative perspective</span>
              </h1>
            </div>
            <p className="scroll-animation about-text" data-aos="fade-up">
              Originally from Amsterdam but now based in New Zealand, I’m a
              remote freelance fullstack developer driven by an innate curiosity
              to learn new tech and craft visually engaging websites. I
              specialise in React and modern frontend tools, pairing technical
              expertise with a strong eye for design.
              <br />
              <br /> My diverse background in professional video editing, custom
              coding, and sound design gives me a unique creative perspective.
              This multidisciplinary experience allows me to approach
              development from a unique angle, and I often contribute early in
              the production process - helping scope projects and solve complex
              problems in innovative ways.
              <br />
              <br /> I’m always open to new projects and collaborations, whether
              big or small, commercial or something more niche. Please feel free
              to reach out anytime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
