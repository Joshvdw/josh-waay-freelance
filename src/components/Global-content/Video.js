import React, { useEffect, useRef } from "react";

const Video = ({ video }) => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = video;
    }
  }, [video]);

  const handleLoadedData = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.add("loaded");
    }
    if (videoRef.current) {
      videoRef.current.classList.add("loaded");
    }
  };

  return (
    <div className="videoWrapper" ref={wrapperRef}>
      <video
        className="body-overlay"
        muted
        autoPlay
        loop
        style={{ opacity: 0.1 }}
        ref={videoRef}
        playsInline
        preload="auto"
        onLoadedData={handleLoadedData}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
