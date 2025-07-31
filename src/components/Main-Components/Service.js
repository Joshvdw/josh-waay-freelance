import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <div className="new-header">
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Services</span></h1>
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-stream"></i> Services
                        </h4>
                    </div>
                    <img src="../assets/images/project-title_underline.png" alt="Client" className={"custom-line scroll-animation"} data-aos='fade-up'/>
                </div>

                <div className="services-items">
                    <div className="service-item scroll-animation design" data-aos='fade-up'>
                        <i class="las la-crop"></i>
                        <h2>Design & Branding</h2>
                        <p>I collaborate with a trusted network of experienced designers to deliver beautiful, functional digital experiences. With a sharp eye for detail and a strong sense of design direction, I help guide the creative process — ensuring each project has a cohesive visual language and intuitive user experience.</p>
                        <span className="projects">Figma | Adobe Suite | Lottie | AI Tools</span>
                    </div>
                    <div className="service-item scroll-animation code" data-aos='fade-up'>
                        <i className="las la-code"></i>
                        <h2>Fullstack Web Development</h2>
                        <p>Our websites are built for performance, with fast load times that enhance both user experience and SEO. They offer improved security by eliminating always-on servers, reducing potential vulnerabilities. Scalability is seamless, handling traffic spikes without the need for expensive infrastructure. With intuitive content editing tools, non-technical team members can make updates easily. Plus, they’re more cost-efficient to host and maintain than traditional websites.
                        </p>
                        <span className="projects">React | Nextjs | Vercel | typescript | sanity | supabase <br/> Shopify  | APIs | SEO | Analytics | Git | webflow | Wordpress</span>
                    </div>
                    <div className="service-item scroll-animation creative" data-aos='fade-up'>
                        <i className="las la-bezier-curve"></i>
                        <h2>Creative Development</h2>
                        <p>Looking to make a lasting impression? I specialise in crafting bespoke, experiential web experiences that push the boundaries of creativity and technology. Whether it's a microsite, digital installation, or an interactive brand story, I blend code, design, sound, and motion to deliver emotionally engaging and memorable experiences.</p>
                        <span className="projects">GSAP | Webgl | unity | C# | Sound design </span>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}
