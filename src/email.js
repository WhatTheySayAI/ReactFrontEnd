import emailjs from '@emailjs/browser';
import React, {useRef} from 'react';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ilx201i', 'template_dcxz4rm', form.current, 'me-WKzMRvMyYtNMuy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="user_email" value="geordiesignups@gmail.com"/>
      <label>Date</label>
      <input type="text" name="date" value="Friday, December 9" />
      work_on_notes, final_thoughts
      <label>Transcript</label>
      <textarea name="transcript" value="this is your message" />
      <label>Work On Notes</label>
      <textarea name="work_on_notes" value="this is what you want to work on" />
      <label>Final Thoughts</label>
      <textarea name="final_thoughts" value="these are your final thoughts" />
      <input type='submit' value='Send' />
    </form>
  );
};