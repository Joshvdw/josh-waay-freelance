import React,{useEffect, useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const res = await fetch("https://formspree.io/f/mdkddarn", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                e.target.reset();
                resetStatus();
            } else {
                setStatus("error");
                resetStatus();
            }
        } catch (err) {
            setStatus("error");
            resetStatus();
        }
    };

    const resetStatus = () => {
        setTimeout(() => {
            setStatus("")
        }, 10000)
    }

    useEffect(()=>{
        AOS.init({duration:1300})
    },[])
  return (
    <section className="contact-area page-section scroll-content" id="contact">
        <div className="custom-container">
            <div className="contact-content content-width">
                <div className="section-header">
                    <div className="new-header">
                        <h1 className="scroll-animation" data-aos='fade-up'>Let's Work <span className={"bold"}>Together</span></h1>
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-envelope"></i>contact
                        </h4>
                    </div>
                    <img src="../assets/images/project-title_underline.png" alt="Client" className={"custom-line scroll-animation"} data-aos='fade-up'/>
                </div>
                {/*<br/><br/>*/}
                {/*<a href={"mailto:hello@joshwaay.dev"} target={"_blank"}>*/}
                {/*    <h3 className="scroll-animation" data-aos='fade-up'>hello@joshwaay.dev</h3>*/}
                {/*</a>*/}
                <p id="required-msg">* Marked fields are required to fill.</p>

                <form className="contact-form scroll-animation" data-aos='fade-up' onSubmit={handleSubmit}>
                    <div className="alert alert-success messenger-box-contact__msg" style={{display: 'none'}} role="alert">
                        Your message was sent successfully.
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label for="name">Name <sup>*</sup></label>
                                <input type="text" name="name" id="name" className="customInput" placeholder="Your name"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label for="email">Email <sup>*</sup></label>
                                <input type="email" name="email" id="email" className="customInput" placeholder="Your email adress"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label for="company">company <span>(optional)</span></label>
                                <input type="text" name="company" id="company" className="customInput" placeholder="Your company"/>
                            </div>
                        </div>
                        {/*<div className="col-md-6">*/}
                        {/*    <div className="input-group">*/}
                        {/*        <label for="subject">subject <sup>*</sup></label>*/}
                        {/*        <select name="subject" id="subject">*/}
                        {/*            <option value="">Select a subject</option>*/}
                        {/*            <option value="subject1">Subject 1</option>*/}
                        {/*            <option value="subject2">Subject 2</option>*/}
                        {/*            <option value="subject3">Subject 3</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-md-6">
                            <div className="input-group">
                                <label for="budget">budget <span>(optional)</span></label>
                                <input type="text" name="budget" id="budget" className="customInput" placeholder="Your estimated budget range"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="input-group">
                                <label for="message">message</label>
                                <textarea name="message" id="message" className="customInput" placeholder="Write your message here ..."></textarea>
                            </div>
                        </div>
                        {/*<div className="col-md-12">*/}
                        {/*    <div className="input-group upload-attachment">*/}
                        {/*        <div>*/}
                        {/*            <label for="upload-attachment">*/}
                        {/*                <i className="las la-cloud-upload-alt"></i> add an attachment*/}
                        {/*                <input type="file" name="file" id="upload-attachment"/>*/}
                        {/*            </label>*/}
                        {/*            */}
                        {/*        </div>*/}
                        {/*        */}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*redirect*/}
                        <div className="col-md-12">
                                {status === "success" && <div className="submit-msg success"><span className={"green"}>Message received!</span><br/>I will get back to you as soon as possible!</div>}
                                {status === "error" && <div className="submit-msg error"><span className="red">Oops, something went wrong.</span><br/>Please try again or reach out via my email directly: <a className={"white"} href={"mailto:hello@joshwaay.dev"} target={"_blank"}>hello@joshwaay.dev</a></div>}
                            <div className="input-group submit-btn-wrap">
                                <button className="theme-btn" name="submit" type="submit" id="submit-form">send message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
