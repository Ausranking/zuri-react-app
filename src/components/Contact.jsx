import React from 'react'
import Footer from './Footer'
import './contact.css'


function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1 id='contact-title'>Contact Me</h1>
        <p id='contact-para'>Hi there, contact me to ask me about anything you have in mind.</p>

        <form action="" method='' className='form'>
          <div className="flex">
            <label htmlFor='first_name'>
              First name <br />
              <input type="Text" name="firstname" id='first_name' placeholder='Enter your first name' />
            </label>

            <label htmlFor="last_name">
              Last name <br />
              <input type="text" name='lastname' id='last_name' placeholder='Enter your last name' />
            </label>
          </div>

          <label htmlFor="email">
            Email<br />
            <input type="text" name='email' id='email' placeholder='yourname@email.com' />
          </label> <br />

          <label htmlFor="message">
            Message <br />
            <textarea name="message" id="message" cols="80" rows="10"
              placeholder="Send me a message and I'll reply you as soon a possible..."></textarea>
          </label> <br />

          <label htmlFor="tc">
            <input type="checkbox" id='tc' />
            You agree to providing your data to <strong>Austin</strong> who may contact you .
          </label> <br />

          <button type='submit' id='btn_submit'>Send message</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact