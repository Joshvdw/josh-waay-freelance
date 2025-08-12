import { useEffect } from "react";

const BlackOverlay = () => {
  useEffect(() => {
    const overlay = document.getElementById("black-mobile-overlay");

    function updateOpacity() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Existing fade-in logic (top of page)
      const fadeInRatio = Math.min(scrollY / viewportHeight, 1);

      // Fade-out logic (bottom of page)
      const distanceFromBottom = docHeight - (scrollY + viewportHeight);
      const fadeOutRatio = Math.min(distanceFromBottom / viewportHeight, 1);

      // Combine so opacity is high in middle, 0 at top & bottom
      const finalOpacity = fadeInRatio * fadeOutRatio;

      overlay.style.opacity = finalOpacity.toFixed(2);
    }

    updateOpacity();
    window.addEventListener("scroll", updateOpacity);
    window.addEventListener("resize", updateOpacity);

    return () => {
      window.removeEventListener("scroll", updateOpacity);
      window.removeEventListener("resize", updateOpacity);
    };
  }, []);

  return (
    <div
      id="black-mobile-overlay"
      // style={{
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      //   width: "100%",
      //   height: "100%",
      //   background: "black",
      //   pointerEvents: "none",
      //   opacity: 0,
      //   transition: "opacity 0.1s linear",
      // }}
    ></div>
  );
};

export default BlackOverlay;
