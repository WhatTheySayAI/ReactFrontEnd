import emailjs from '@emailjs/browser';
import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Button, Input, Container, Box } from "@chakra-ui/react";

// TODO: Make new WhatTheySAI email so it doesn't get sent from "daniel johnson"
// TODO: CSS
export const EmailPage = ({transcript, notes, finalThoughts, userEmail, setUserEmail}) => {
  const form = useRef();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_1ai7mb8";
    const templateId = "template_h1unmia";
    const publicKey = "qutAuFklfaC3w-Mer";
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          if (result.text === "OK") {
            navigate('/sent');
          }
      }, (error) => {
          setError(error.text);
      });
  };
  
  const getDate = () => {
    const date_obj = new Date();
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[date_obj.getDay()];
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date_obj.getMonth()]
    
    const date = date_obj.getDate();
    
    const year = date_obj.getFullYear();
    
    return `${day}, ${month} ${date}, ${year}`
  };

  return (
    
    <Container h='50vh' p={6}>
      <Box bg='none' h='5vmin'/>
      <Heading  className="headline" size="3xl">
        Send Email
      </Heading>
      <Box bg='none' h='5vmin'/>
      <Heading as='h6' size='s' mt = {1} >Email address</Heading>
      {error}
      <Input
        mt = {1}
        isInvalid={error}
        placeholder='Your email'
        value={userEmail} 
        onChange={(event) => {
          setError(null);
          setUserEmail(event.target.value);
        }}
      />
      <Box bg='none' h='20px'/>
      <Button onClick={sendEmail}>Send</Button>

      {/* Hidden HTML Form Element to pass into emailjs API */}
      <form ref={form} hidden={true}>
        <label>Email</label>
        <input type="email" name="user_email" value={userEmail}/>
        <input type="text" name="date" value={getDate()} hidden={true} />
        <textarea name="transcript" value={transcript} hidden={true} />
        <textarea name="work_on_notes" value={notes} hidden={true} />
        <textarea name="final_thoughts" value={finalThoughts} hidden={true} />
      </form>
    </Container>
    
  );
};