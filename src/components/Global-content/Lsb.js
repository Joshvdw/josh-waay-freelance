import React from 'react'

export default function Lsb() {
  return (
        <div className="left-sidebar">
            {/*<div className="sidebar-header d-flex align-items-center justify-content-between">*/}
            {/*    <img src="./assets/images/jOSH WAAY.png" alt="Logo"/>*/}
            {/*    /!*<span className="designation">Creative Fullstack Web Developer</span>*!/*/}
            {/*</div>*/}
            <img className="me" src="./assets/images/full-pic-red.png" alt="Me"/>
            {/*<h2 className="email">hello@joshwaay.dev</h2>*/}
            <h2 className="">Based in Amsterdam</h2>
            <h2 className="address">Working globally</h2>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="https://joshwaay.dev" target={"_blank"}><i className="las la-briefcase"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jvdwaay/" target={"_blank"}><i className="lab la-linkedin-in"></i></a>
                </li>
                <li>
                    <a href="https://github.com/Joshvdw" target={"_blank"}><i className="lab la-github"></i></a>
                </li>
            </ul>
            {/*<p className="copyright">&copy; 2025 All Rights Reserved</p>*/}
            <p className="copyright">hello@joshwaay.dev</p>
            <a href="mailto" className="theme-btn">
                <i className="las la-envelope"></i> Let’s Chat
            </a>
        </div>
  )
}   
