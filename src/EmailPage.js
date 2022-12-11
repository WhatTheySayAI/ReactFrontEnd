import emailjs from '@emailjs/browser';
import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Button, Input, FormLabel, Container, Box, Flex, Spacer } from "@chakra-ui/react";

// TODO: Make new WhatTheySAI email so it doesn't get sent from "daniel johnson"
// TODO: CSS
export const EmailPage = ({transcript, notes, finalThoughts}) => {
  const form = useRef();
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState();

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ilx201i', 'template_dcxz4rm', form.current, 'me-WKzMRvMyYtNMuy')
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
    
    <Flex h='50vh' flexDirection={'column'}>
      <Box bg='none' h='10vmin'/>
      <Container>
      <Heading  class="headline" size="3xl">
        Send Email
      </Heading>
      </Container>

      <Spacer/>

      <Container>
        <FormLabel>Email address</FormLabel>
        {error}
        <Input
          isInvalid={error}
          focusBorderColor='black'
          placeholder='Your email'
          value={userEmail} 
          onChange={(event) => {
            setError(null);
            setUserEmail(event.target.value);
          }}
        />
        <Box bg='none' h='20px'/>
        <Button bg='black' color='white' onClick={sendEmail}>Send</Button>
      </Container>

      {/* Hidden HTML Form Element to pass into emailjs API */}
      <form ref={form} hidden={true}>
        <label>Email</label>
        <input type="email" name="user_email" value={userEmail}/>
        <input type="text" name="date" value={getDate()} hidden={true} />
        <textarea name="transcript" value={transcript} hidden={true} />
        <textarea name="work_on_notes" value={notes} hidden={true} />
        <textarea name="final_thoughts" value={finalThoughts} hidden={true} />
      </form>
    </Flex>
    
  );
};