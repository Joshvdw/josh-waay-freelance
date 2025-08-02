import React, { useEffect, useRef } from 'react';

const PortfolioLink = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoEl = videoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Only set src and play if not already loaded
                    if (!videoEl.src || videoEl.src.indexOf('portfolio-preview.mp4') === -1) {
                        videoEl.src = '/assets/videos/portfolio-preview.mp4'; // adjust if needed
                    }
                    videoEl.play().catch((e) => {
                        console.warn('Video play failed:', e);
                    });
                } else {
                    videoEl.pause();
                }
            },
            {
                threshold: 0.25,
            }
        );

        if (videoEl) observer.observe(videoEl);

        return () => {
            if (videoEl) observer.unobserve(videoEl);
        };
    }, []);

    return (
        <a href="https://joshwaay.dev" target="_blank" rel="noopener noreferrer">
            {/*<img src="../assets/images/openGraphPreview.webp" alt="Portfolio link" />*/}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="portfolio-video"
                preload="none"
                ref={videoRef}
                style={{ opacity: 1 }}
            >
                {/* no <source> tag to avoid eager loading */}
            </video>
        </a>
    );
};

export default PortfolioLink;
