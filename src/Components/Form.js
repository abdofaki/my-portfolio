import "./FormStyles.css"

import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';


const Form = () => {
    const form= useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_diwxeze', 'template_59oc8ze', form.current, process.env.REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <div className="form">
           <form ref={form} onSubmit={sendEmail} >
               <lable>Your Name</lable>
               <input type="text" name="user_name"></input>

               <lable>Email</lable>
               <input type="email" name="user_email"></input>

               <lable>Subject</lable>
               <input type="text"></input>

               <lable>Message</lable>
               <textarea name="message"  rows="6" placeholder="Type your Message Here"/>
               <button className="btn">Submit</button>
           </form>
        </div>
    )
}

export default Form
