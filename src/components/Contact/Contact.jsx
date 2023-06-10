// import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {RiMapPinFill} from 'react-icons/ri'
import {RiGlobeLine} from 'react-icons/ri'
import {IoIosCall} from 'react-icons/io'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import contact from "./Contact.module.css"
const Contact = () => {
  const form= useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jv6r2fe', 'template_yfqweus', form.current, 'DKyShtCTeG2LJGTF1')
      

      e.target.reset()
  };
  return (
    <section id={contact.contact}   className={contact.wrapper}>
      <div className={contact.left}>
      <h2 className={contact.leftHeading}>Contact Us</h2>
      <article className={contact.option}>
            <MdOutlineMail className={contact.optionicon}/>
          {/* <h5>faslusky@gmail.com</h5> */}
          <a href="mailto:faslusky@gmail.com" target="_blank" rel="noreferrer"> charitable@gmail.com</a>
          </article>
          <article className={contact.option}>
            <RiMapPinFill className='contact-option-icon'/>
          <a href="#" target="_blank" rel="noreferrer"> 152A Charlotte Street, Peterborough, CA</a>
          </article>
          <article className={contact.option}>
            <IoIosCall className={contact.optionicon}/>
          <a href="#" target="_blank" rel="noreferrer">09036028379</a>
          </article>
          <article className={contact.option}>
            <RiGlobeLine className={contact.optionicon}/>
          <a href="#" target="_blank" rel="noreferrer">  charitable.com</a>
          </article>
          <article className={contact.option}>
            {/* <RiGlobeLine className={contact.optionicon}/> */}
          <a href="#" target="_blank" rel="noreferrer"> FAQ</a>
          </article>
         
          <div>
          <h3 className={contact.follow}>Follow us on:</h3>
          <div className={contact.socials}>
         <a href="https://facebook.com"><FaFacebookF/></a>
         <a href="https://instagram.com"><FiInstagram/></a>
         <a href="https://twitter.com"><BsTwitter/></a>
        </div>
          </div>

      </div>
      <div>
        <form ref={form} onSubmit={sendEmail} className={contact.form}>
          <input type="text" name="name" placeholder='Name' required  className={contact.right}/>
          <input type="email" name='email' placeholder='Email' required className={contact.right}/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className={contact.right}></textarea>
          <button type="submit" className={contact.btn}>Submit</button>

        </form>
      </div>
      {/* <div className='section_top'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      </div>
      

      <div className="container contact_container">
  
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMail className='contact-option-icon'/>
          <h4>charitable@gmail.com</h4>
          <h5>faslusky@gmail.com</h5>
          <a href="mailto:faslusky@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact-option-icon'/>
          <h4>Messenger</h4>
          <h5>Joyce Fasunhanmi</h5>
          <a href="https://m.me/joyce.fasunhanmi" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact-option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+2349036028379 </h5>
          <a href="https://wa.me/2349036028379" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required/>
          <input type="email" name="email" placeholder='Input your Email'  required/>
          <textarea name="message"rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn  btn-primary'> Send Message</button>
        </form>
        </div>
        
      </div> */}
    </section>
  )
}

export default Contact