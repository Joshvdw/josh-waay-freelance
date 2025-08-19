import React, { useEffect, useRef } from "react";

const PortfolioLink = ({ mobileVideoTrigger }) => {
  const videoRef = useRef(null);
  const portfolioLink = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch((e) => {
            console.warn("Video play failed:", e);
          });
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.25 }
    );

    if (videoEl) observer.observe(videoEl);

    if (mobileVideoTrigger && portfolioLink.current) {
      const handleTrigger = () => {
        portfolioLink.current.click();
      };
      mobileVideoTrigger.current.addEventListener("click", handleTrigger);

      return () => {
        mobileVideoTrigger.current.removeEventListener("click", handleTrigger);
      };
    }

    return () => {
      if (videoEl) observer.unobserve(videoEl);
    };
  }, []);

  return (
    <a
      href="https://portfolio.joshwaay.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-link"
      ref={portfolioLink}
    >
      <video
        autoPlay={false} // don’t autoplay until in view
        muted
        loop
        playsInline
        className="portfolio-video"
        preload="auto" // eager load video
        ref={videoRef}
        style={{ opacity: 1 }}
      >
        <source src="/assets/videos/portfolio-preview.mp4" type="video/mp4" />
      </video>
      <div className="theme-btn is-video">
        Visit Portfolio
        <span>
          <img src="../assets/images/link-icon.svg" alt="link icon" />
        </span>
      </div>
    </a>
  );
};

export default PortfolioLink;
