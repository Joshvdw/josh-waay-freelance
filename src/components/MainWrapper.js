import React from "react";
import Lsb from "./Global-content/Lsb";
import Herosec from "./Main-Components/Herosec";
import About from "./Main-Components/About";
import Service from "./Main-Components/Service";
import Portfolio from "./Main-Components/Portfolio";
import Testimonials from "./Main-Components/Testimonials";
import Clientlogos from "./Main-Components/Clientlogos";
import Contact from "./Main-Components/Contact";
// import Skills from './Main-Components/Skills'
// import Pricing from './Main-Components/Pricing'
// import Resume from './Main-Components/Resume'

export default function Main() {
  return (
    <main className="drake-main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Herosec />
          <Lsb /> {/* this component will used by mobile devices */}
          <About />
          <Service />
          {/* <Portfolio /> */}
          <Testimonials />
          <Clientlogos />
          <Contact />
          {/*<Pricing/>*/}
          {/*<Resume/>*/}
          {/*<Skills/>*/}
        </div>
      </div>
    </main>
  );
}
