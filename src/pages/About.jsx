import React from 'react';
import ITyped from 'react-ityped';
import "./about.css";

const About = () => {
    const strings = ['Responsive web page designer', 'Working with React JS as frontend developer', 'Working with Node JS as a backend developer ']
    return (
        <section className="about">
            <div className="aboutContent">
                <div className="aboutimg">
                    <img src="images/mp.jpg" alt="" />
                </div>
                <div className="aboutdesc">
                    <span>Hello There,</span>
                    <p>I am a professional  <span><ITyped className='container ityped-cursor'
            showCursor={true}
            strings={strings}
            typeSpeed={50}
            backSpeed={50}
            startDelay={100}
            backDelay={250}
        /></span>.</p>
                    
                </div>
            </div>
        </section>
    )
}

export default About
