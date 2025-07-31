import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Clientlogos() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section>
        <div className="custom-container">
            <div className="services-content content-width">
                <div class="clients-logos">
                    <div className="section-header">
                        <h1 className="scroll-animation" data-aos='fade-up'>You're in <span>Good Company</span></h1>
                        <img src="../assets/images/project-title_underline.png" alt="Client" className={"custom-line scroll-animation"} data-aos='fade-up'/>
                    </div>
                    <div class="row align-items-center client-row">
                        <div class="col-md-3 scroll-animation" data-aos='fade-right'>
                            <img src="../assets/images/client-1.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-up'>
                            <img src="../assets/images/client-2.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation"  data-aos='fade-down'>
                            <img src="../assets/images/client-3.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-left'>
                            <img src="../assets/images/client-4.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-right'>
                            <img src="../assets/images/client-5.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-up'>
                            <img src="../assets/images/client-6.svg" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation"  data-aos='fade-down'>
                            <img src="../assets/images/client-7.svg" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-left'>
                            <img src="../assets/images/client-8.svg" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-right'>
                            <img src="../assets/images/client-9.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-up'>
                            <img src="../assets/images/client-10.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation"  data-aos='fade-down'>
                            <img src="../assets/images/client-11.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-left'>
                            <img src="../assets/images/client-12.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-right'>
                            <img src="../assets/images/client-13.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-up'>
                            <img src="../assets/images/client-14.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation"  data-aos='fade-down'>
                            <img src="../assets/images/client-15.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-left'>
                            <img src="../assets/images/client-16.png" alt="Client"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}