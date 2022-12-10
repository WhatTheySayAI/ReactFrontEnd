import emailjs from '@emailjs/browser';
import React, {useRef} from 'react';

// TODO: Make new WhatTheySAI email so it doesn't get sent from "daniel johnson"
// TODO: CSS
// TODO: Use Chakra form elements for display, hide html form.
export const EmailPage = () => {
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
  
  const getDate = () => {
    const date_obj = new Date();
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const day = days[date_obj.getDay()];
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date_obj.getMonth()]
    
    const date = date_obj.getDate();
    
    const year = date_obj.getFullYear();
    
    return `${day}, ${month} ${date}, ${year}`
  };

  const transcript = "This is wat duh tichuh sai"; // TODO Get from state
  
  const to_work_on = "This is wat u should work on"; // TODO Get from state
  
  const final_thoughts = "These are your final thoughts"; // TODO Get from state
  
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="text" name="date" value={getDate()} hidden={true} />
      <textarea name="transcript" value={transcript} hidden={true} />
      <textarea name="work_on_notes" value={to_work_on} hidden={true} />
      <textarea name="final_thoughts" value={final_thoughts} hidden={true} />
      <input type='submit' value='Send' />
    </form>
  );
};