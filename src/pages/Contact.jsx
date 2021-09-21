import React from 'react'
import "./contact.css"
const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact me with your needed</h2>
            <div className="contact-form">
            <form className="form-group">
               <label >Full Name</label>
                <input type="text" className="form-control" />
                <label >Email</label>
                <input type="text" className="form-control" />
                <label >Your Message</label>
                <textarea type="text" className="form-control" />
                <button type="submit" className="btn mt-3">Send Message</button>
            </form>
            </div>
        </div>
    )
}

export default Contact
