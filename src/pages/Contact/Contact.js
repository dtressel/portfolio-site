import { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const emailJSPublicKey = 'H1XWo6NCtVex4ktZc';
const emailJSTemplateID = 'template_vuxt427';
const emailJSServiceID = 'service_fhrk85i';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailJSServiceID, emailJSTemplateID, form.current, emailJSPublicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <>
      <div className="Contact-form-wrapper">
        <div className="Contact-form-container">
          <h1>Contact Me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" className="Contact-form-input" type="text" placeholder="What's your name?" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" className="Contact-form-input" type="email" placeholder="What's your email?" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" className="Contact-form-input" type="text" placeholder="What's the subject?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="Contact-form-input" placeholder="What's your message?" rows="8" required ></textarea>
            </div>
            <button className="Contact-form-submit-button" type="submit" value="Send">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;