import { Heading, Box, Text, Button, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ResizeTextarea from "react-textarea-autosize";

function SummaryPage({ transcript, notes, finalThoughts, setFinalThoughts }) {
  return (
    <Box p={6}>
      <Heading  class="headline" size="3xl">
        Summary
      </Heading>
      <Heading mt = {1} >TRANSCRIPT</Heading>
      <Text mt = {1}>{transcript}</Text>
      <Heading mt = {1}>NOTES</Heading>
      <Text mt = {1}>{notes}</Text>
      <Heading mt = {1}>FINAL THOUGHTS</Heading>

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

      <Link to="/email">
        <Button mt = {1}>Send email ➡</Button>
      </Link>
    </Box>
  );
}

export default SummaryPage;
