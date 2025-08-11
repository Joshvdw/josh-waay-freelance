import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Herosec() {
  const imgRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Initialize animation after component mounts
    if (imgRef.current) {
      // Create initial animation
      animationRef.current = imgRef.current.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
        {
          duration: 6000,
          iterations: Infinity,
          easing: "linear",
        }
      );
    }

    return () => {
      // Clean up animation when component unmounts
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      // Double the speed while maintaining current position
      animationRef.current.playbackRate = 2;
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      // Return to normal speed
      animationRef.current.playbackRate = 1;
    }
  };

  return (
    <section className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className={"hero-container"}>
            <div className="section-header">
              <h1 className="scroll-animation" data-aos="fade-up">
                I help businesses turn websites into{" "}
                <span>modern experiences</span>
              </h1>
            </div>

            <p className="scroll-animation" data-aos="fade-up">
              Crafting visually captivating and intuitive web solutions with
              creativity, innovation, and a passion for pixel perfection.
            </p>
            <div className="d-flex">
              <div className="facts d-flex">
                <div className="left scroll-animation" data-aos="fade-right">
                  <h2 className="facts-text">10+</h2>
                  <p>
                    Years in the
                    <br />
                    Creative Industry
                  </p>
                </div>
                <div className="right scroll-animation" data-aos="fade-left">
                  <h2 className="facts-text">28+</h2>
                  <p>projects completed in 7 countries</p>
                </div>
              </div>
              <a
                href="#portfolio"
                className="go-to-project-btn scroll-to scroll-animation"
                data-aos="fade-up"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  ref={imgRef}
                  src="../assets/images/round-text.png"
                  alt="Rounded Text"
                  style={{ display: "block", width: "80%" }}
                />
                <i className="las la-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
