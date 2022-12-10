import React from 'react';
import { Heading, Text, Container } from "@chakra-ui/react";

export default function Sent({userEmail}) {
  return (
    <Container>
      <Heading>Sent!</Heading>
      <Text>An email has been sent to {userEmail}</Text>
      <Heading>🎉</Heading>
    </Container>
  );
}