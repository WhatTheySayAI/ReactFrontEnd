import { Heading, Box, Button, Textarea, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ResizeTextarea from "react-textarea-autosize";

function SummaryPage({ transcript, notes, finalThoughts, setFinalThoughts }) {
  return (
    <Container p={6}>
      <Box bg='none' h='5vmin'/>
      <Heading  className="headline" size="3xl">
        Summary
      </Heading>
      <Box bg='none' h='5vmin'/>
      <Heading as='h6' size='s' mt = {1} >Transcript</Heading>
      <Textarea
        disabled
        _disabled={{
          color: 'black'
        }}
        minH="unset"
        w="100%"
        resize="none"
        minRows={5}
        maxRows={5}
        as={ResizeTextarea}
        value={transcript}
      />
      <Box h='10px'/>
      <Heading as='h6' size='s' mt = {1} >Notes</Heading>
      <Textarea
        disabled
        _disabled={{
          color: 'black'
        }}
        minH="unset"
        w="100%"
        resize="none"
        minRows={5}
        maxRows={5}
        as={ResizeTextarea}
        value={notes}
      />
      <Box h='10px'/>
      <Heading as='h6' size='s' mt = {1} >Final Thoughts</Heading>
      <Textarea mt = {1}
        minH="unset"
        w="100%"
        resize="none"
        minRows={5}
        maxRows={5}
        as={ResizeTextarea}
        value={finalThoughts}
        placeholder="Final thoughts?"
        onChange={(event) => setFinalThoughts(event.target.value)}
      />
      <Box h='10px'/>
      <Link to="/email">
        <Button mt = {1}>Send email ➡</Button>
      </Link>
    </Container>
  );
}

export default SummaryPage;
