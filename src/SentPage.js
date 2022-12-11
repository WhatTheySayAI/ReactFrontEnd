import React from 'react';
import { Heading, Text, Container, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Sent({userEmail}) {
  return (
    <Container>
      <Box bg='none' h='5vmin'/>
      <Heading  className="headline" size="3xl">
        Email Sent!
      </Heading>
      <Text>An email has been sent to {userEmail}</Text>
      <Heading>🎉</Heading>

      <Link to="/">
            <Button whiteSpace="normal">
              <Text className="button">
                Back to home 🏠
              </Text>
            </Button>
          </Link>
    </Container>
  );
}