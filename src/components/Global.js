import React, { useState, useEffect } from "react";
import Video from "./Global-content/Video";
// import Pageloader from './Global-content/Pageloader'
import Rsidemenu from "./Global-content/Rsidemenu";
import Scrollnav from "./Global-content/Scrollnav";
import Lsb from "./Global-content/Lsb";
// import Settings from './Global-content/Settings'
import MainWrapper from "./MainWrapper";
import Lenis from "lenis";
import BlackOverlay from "./Global-content/BlackOverlay";

export default function Global() {
  // const [currentVideo, setVideo] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1220);

  // function changeVideo(videos) {
  //     setVideo(videos)
  // }

  useEffect(() => {
    // Lenis scroll setup
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.3,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Window resize handler to toggle Rsidemenu visibility
    function handleResize() {
      setIsMobile(window.innerWidth < 1220);
    }
    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      lenis.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* TEMPLATE EXTRAS */}
      <Video video={"/assets/videos/hero-video.mp4"} />
      {/*<Pageloader />*/}
      {/*<Settings clickEvent={changeVideo} />*/}
      <BlackOverlay />
      <div className="static-noise"></div>
      {/* <div className="bg-texture"></div> */}
      {!isMobile && <Lsb />}
      {/* Conditionally render Rsidemenu based on window size */}
      {isMobile && (
        <>
          {/* <div className="logo-home">
            <img src="./assets/images/jw-logo.png" alt="Logo" />
          </div> */}
          <Rsidemenu />
        </>
      )}
      <Scrollnav />
      <MainWrapper />
    </div>
  );
}
