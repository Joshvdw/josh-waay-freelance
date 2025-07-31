import React, { useRef, useEffect, useState } from "react";
import OwlCaraousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Testimonials() {

    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        AOS.init({duration:1000})
    }, [])

    const handlePrevClick = () => {
        carouselRef.current.prev();
        setActiveIndex(activeIndex - 1) > 0 ? setActiveIndex(activeIndex - 1) : setActiveIndex(3);
    }

    const handleNextClick = () => {
        carouselRef.current.next();
        setActiveIndex(activeIndex + 1) < 3 ? setActiveIndex(activeIndex + 1) : setActiveIndex(1);
    }

  return (
    <section className="testimonial-area page-section scroll-to-page" id="testimonial">
            {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}

            {/* <script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw=" crossorigin="anonymous"></script> */}


            <div className="custom-container">
                <div className="testimonial-content content-width">
                    <div className="section-header">
                        <div className="new-header">
                            <h1 className="scroll-animation" data-aos='fade-up'>Trusted by <span>Clients Globally</span></h1>
                            <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                                <i className="lar la-comment"></i> testimonials
                            </h4>
                        </div>
                        <img src="../assets/images/project-title_underline.png" alt="Client" className={"custom-line"}/>
                    </div>
                    <div className="testimonial-slider-wrap scroll-animation" data-aos='fade-up'>

                        <OwlCaraousel className="owl-carousel testimonial-slider owl-theme" smartSpeed="450" items="1" dots={false} ref={carouselRef}>
                            <div className="testimonial-item">
                                <div className="testimonial-item-inner">
                                    <p>Josh is a highly skilled developer with particular strength in custom JavaScript,
                                        which we’ve utilised time and time again across numerous Webflow projects here
                                        at the studio. His ability to craft bespoke interactions and solve complex problems
                                        with lightweight code has been instrumental in delivering standout work for our
                                        clients. Beyond this, he's built sophisticated experiences using React and WebGL,
                                        demonstrating both technical range and a true eye for web-based storytelling.
                                        From project inception and scoping, to architecture through to execution, his
                                        consultancy, foresight and ability to evolve and adapt has consistently led to the
                                        creation of quality work.</p>
                                    <div className="author d-flex align-items-center">
                                        <img src="../assets/images/luca.jpeg" alt="portfolio"/>
                                        <div className="right">
                                            <h3>Daniel Luca</h3>
                                            <p className="designation"><span>Psychoactive Studios</span></p>
                                        </div>
                                    </div>
                                    {/*<a href="" className="project-btn">Project</a>*/}
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="testimonial-item-inner">
                                    <p>I have no hesitation in describing Josh as an “all-round star player.” He has demonstrated
                                        himself to be a deep-thinker who can rise to any new occasion or challenge. Whether it be Webflow, WebGL, React, Blender or Unity — you name it, Josh has that rare ability to learn new programming languages or tools with ease. I would describe him as an independent learner who can lead his own projects and the people around him. The exact type of thinker you need for Innovation to occur.</p>
                                    <div className="author d-flex align-items-center">
                                        <img src="../assets/images/maria.jpeg" alt="portfolio"/>
                                        <div className="right">
                                            <h3>Maria Rose</h3>
                                            <p className="designation"><span>ULTRAVIOLET</span></p>
                                        </div>
                                    </div>
                                    {/*<a href="" className="project-btn">Project</a>*/}
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="testimonial-item-inner">
                                    <p>We wanted a website that was both simple and stand-out, and to give viewers a small taste of our current video game project right there in the browser. Josh took our original concept and fed back into it with many great ideas and improvements, and was able to pull off a performant website that accurately matched the animation and interactivity of the game. Josh makes custom websites that clearly stand out from the crowd, which is exactly what we needed.</p>
                                    <div className="author d-flex align-items-center">
                                        <img src="../assets/images/ben.jpeg" alt="portfolio"/>
                                        <div className="right">
                                            <h3>Ben Childs</h3>
                                            <p className="designation"><span>Cassbay Games</span></p>
                                        </div>
                                    </div>
                                    {/*<a href="" className="project-btn">Project</a>*/}
                                </div>
                            </div>
                        </OwlCaraousel>
                        <div className="testimonial-footer-nav">
                            <div className="testimonial-nav d-flex align-items-center">
                                <button className="prev" onClick={handlePrevClick} ><i className="las la-angle-left"></i></button>
                                <div id="testimonial-slide-count"><span className="left">{activeIndex}</span> /3</div>
                                <button className="next" onClick={handleNextClick} ><i className="las la-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}