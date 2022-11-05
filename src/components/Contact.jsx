import { useState } from 'react';
import Footer from './Footer'
import './contact.css'


function Contact() {

  
  const handleSubmit = (e) => {
    const firstname = document.getElementById('first_name')
    const lastname = document.getElementById('last_name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')
    const firstnameError = document.getElementById('firstname_error')
    const lastnameError = document.getElementById('lastname_error')
    const emailError = document.getElementById('email_error')
    const messageError = document.getElementById('message_error')
    const form = document.forms['form']
    ['firstname' && 'lastname' && 'email' && 'message'].value
    if (form == "") {
      e.preventDefault()
      //prevents submit if fields are empty but redirets to error-page if fields are filled out

      firstnameError.innerText = 'please enter firstname'
      lastnameError.innerText = 'please enter lastname'
      emailError.innerText = 'please enter an email'
      messageError.innerText = 'please enter a message'


      firstnameError.style.color = 'red'
      firstname.style.border = '1px solid red'
      lastnameError.style.color = 'red'
      lastname.style.border = '1px solid red'
      messageError.style.color = 'red'
      message.style.border = '1px solid red'
      emailError.style.color = 'red'
      email.style.border = '1px solid red'

      return false
    }

  }

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 id='contact-title'>Contact Me</h1>
        <p id='contact-para'>Hi there, contact me to ask me about anything you have in mind.</p>

        <form action="*" className='form' id='form' onSubmit={handleSubmit}>
          <div className="flex">

            <div className='form-group'>
              <label htmlFor='first_name' >First name</label>
              <br />
              <input type="Text" name="firstname" id='first_name' placeholder='Enter your first name' />

              <small id='firstname_error'></small>
            </div>

            <div className='form-group'>
              <label htmlFor="last_name">Last name</label>
              <br />
              <input type="text" name='lastname' id='last_name' placeholder='Enter your last name' />
              <small id='lastname_error'></small>
            </div>

          </div>

          <div className='form-group'>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name='email' id='email' placeholder='yourname@email.com' />
            <small id='email_error'></small>
          </div>

          <div className='form-group'>
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" id="message" cols="80" rows="10" placeholder="Send me a message and I'll reply you as soon a possible..."></textarea>
            <small id='message_error' ></small>
          </div>
          
          <label htmlFor="tc" className='tc'>
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
