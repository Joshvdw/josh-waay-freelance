import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Herosec() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="hero-section page-section scroll-to-page" id="home">
        <div className="custom-container">
            <div className="hero-content content-width">
                <div className="section-header">
                    {/*<h4 className="subtitle scroll-animation" data-animation="fade_from_bottom" data-aos='fade-up'>*/}
                    {/*    <i className="las la-home"></i> Introduction*/}
                    {/*</h4>*/}
                    <h1 className="scroll-animation" data-aos='fade-up'>Hi I'm <span>Josh Waay</span>,
                        <br/>a creative fullstack web developer</h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Crafting visually captivating and intuitive web solutions with creativity, innovation, and a passion for pixel perfection.</p>
                <div className="d-flex">
                    <div className="facts d-flex">
                        <div className="left scroll-animation" data-aos='fade-right'>
                            <h1 className="facts-text">4+</h1>
                            <p>Years of <br/>Experience</p>
                        </div>
                        <div className="right scroll-animation" data-aos='fade-left'>
                            <h1 className="facts-text">28+</h1>
                            <p>projects completed in 7 countries</p>
                        </div>
                    </div>
                <a href="#portfolio" 
                    className="go-to-project-btn scroll-to scroll-animation" 
                     data-aos='fade-up'>
                    <img src="../assets/images/round-text.png" alt="Rounded Text"/>
                    <i className="las la-arrow-down"></i>
                </a>    

                </div>
            </div>
        </div>
    </section>
  )
}
