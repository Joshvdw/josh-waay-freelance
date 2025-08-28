import { useState, useEffect } from "react";

export default function Lsb() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "./assets/images/full-pic-red.png";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className="lsb-outer">
      <div
        className={`left-sidebar ${loaded ? "loaded" : ""} scroll-animation`}
      >
        <div className="left-sidebar-inner">
          <img
            className={"me"}
            src="./assets/images/full-pic-red.png"
            alt="Josh Waay Bio"
            loading="eager"
            onLoad={() => setLoaded(true)}
          />
          <div>
            {/*<img src="./assets/images/jw-logo.png" alt="Logo" className="logo-lsb" />*/}
            <h2 className="">Creative Fullstack</h2>
            <h2 className="address">Web Developer</h2>
            {/*<div className="flex-lsb">*/}
            {/*    <div className="new-lsb">*/}
            {/*        <h6 className="lsb-sub">Based in Amsterdam</h6>*/}
            {/*        <h6 className="lsb-sub">Working globally</h6>*/}
            {/*</div>*/}
            {/*</div>*/}
            <p className="copyright">
              © Josh Waay Dev | Amsterdam, nl
              <br /> KVK 218171821B01 | BTW NL005300610B56
            </p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
              <li>
                <a href="https://portfolio.joshwaay.dev/" target={"_blank"}>
                  <i className="las la-briefcase"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jvdwaay/"
                  target={"_blank"}
                >
                  <i className="lab la-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Joshvdw" target={"_blank"}>
                  <i className="lab la-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="#contact" className="theme-btn">
          <i className="las la-envelope"></i> Let’s Chat
        </a>
        <div className="texture-cover"></div>
      </div>
    </div>
  );
}
