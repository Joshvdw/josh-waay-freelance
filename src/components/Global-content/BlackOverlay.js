import { useEffect } from "react";

const BlackOverlay = () => {
  useEffect(() => {
    const overlay = document.getElementById("black-mobile-overlay");

    function updateOpacity() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const ratio = Math.min(scrollY / viewportHeight, 1) * 1;
      overlay.style.opacity = ratio.toFixed(2);
    }

    updateOpacity();
    window.addEventListener("scroll", updateOpacity);
    window.addEventListener("resize", updateOpacity);

    return () => {
      window.removeEventListener("scroll", updateOpacity);
      window.removeEventListener("resize", updateOpacity);
    };
  }, []);

  return <div id="black-mobile-overlay"></div>;
};

export default BlackOverlay;
