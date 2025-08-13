import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Service() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const isMobile = window.innerWidth <= 768;
  return (
    <section
      className="services-area page-section scroll-to-page"
      id="services"
    >
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <div className="new-header">
              <h1 className="scroll-animation" data-aos="fade-up">
                My <span>Services</span>
              </h1>
              <h4 className="subtitle scroll-animation" data-aos="fade-up">
                <i className="las la-stream"></i> Services
              </h4>
            </div>
            <img
              src={
                isMobile
                  ? "../assets/images/project-title_underline-bright.png"
                  : "../assets/images/project-title_underline.png"
              }
              alt="Client"
              className={"custom-line scroll-animation"}
              data-aos="fade-up"
            />
          </div>

          <div className="services-items">
            <div
              className="service-item scroll-animation code"
              data-aos="fade-up"
            >
              <i className="las la-code-branch"></i>
              <h2>Web Development</h2>
              <p>
                Custom websites built on a modern tech stack designed for speed,
                scalability, and cost-efficiency. If keeping your existing site,
                I offer comprehensive audits covering design, content, UX,
                performance, new features, and SEO. I also specialise in Webflow
                and custom JavaScript for no-code platforms.
              </p>
              <span className="projects">
                React | Nextjs | Vercel | typescript | sanity | supabase <br />{" "}
                Shopify | APIs | SEO | Analytics | Git | webflow | Wordpress
              </span>
            </div>
            <div
              className="service-item scroll-animation creative"
              data-aos="fade-up"
            >
              <i class="las la-project-diagram"></i>
              <h2>Digital Experiences</h2>
              <p>
                Using the latest in 3D, animation, sound design, and creative
                coding, I craft immersive web experiences that push boundaries
                of technology. From interactive storytelling and motion-rich
                interfaces to browser-based games and experimental art
                installations, I create innovative websites that spark emotion
                and leave a lasting impression on visitors.
              </p>
              <span className="projects">
                GSAP | Webgl | unity | C# | Sound design{" "}
              </span>
            </div>
            <div
              className="service-item scroll-animation design"
              data-aos="fade-up"
            >
              <i class="las la-crop"></i>
              <h2>Design & Branding</h2>
              <p>
                From wireframes to full branding systems, I blend art direction,
                accessibility best practices, and responsiveness to create
                website designs that work seamlessly across all devices. With a
                strong UX foundation and meticulous attention to detail, I
                balance visual impact with an intuitive, user-friendly
                interface.
              </p>
              <span className="projects">
                Figma | Adobe Suite | Lottie | AI Tools
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
