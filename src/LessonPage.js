import {
  Button,
  IconButton,
  Container,
  Box,
  HStack,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { animateScroll } from "react-scroll";
import ResizeTextarea from "react-textarea-autosize";

import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";

import { MdOutlinePause, MdFiberManualRecord } from "react-icons/md";
import { useEffect } from "react";

function LessonPage({ run, isRecording, transcript, notes, setNotes }) {
  // Scrolls the transcript to the bottom every time it changes.
  useEffect(() => {
    animateScroll.scrollToBottom({
        containerId: "transcript",
        duration: 50,
    });
}, [transcript]);

  return (
    <Container p={6}>
      <Box bg='none' h='5vmin'/>
      <Heading className="headline" size="3xl">
        Lesson
      </Heading>
      <Box bg='none' h='5vmin'/>
      <Heading as='h6' size='s' mt = {1} >Transcript</Heading>
      <Textarea
        id='transcript'
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
        placeholder="The transcript for your recording will appear here."
      />


      <Box h='10px'/>
      <Heading as='h6' size='s' mt = {1} >Notes</Heading>
      <Textarea
        minH="unset"
        w="100%"
        resize="none"
        minRows={5}
        maxRows={5}
        as={ResizeTextarea}
        value={notes}
        placeholder="What do you want to work on?"
        onChange={(event) => setNotes(event.target.value)}
      />

      <Box h='20px'/>
      <HStack justifyContent='end'>
        <IconButton onClick={run} borderRadius="100">
          {isRecording ? (
            <Icon as={MdOutlinePause} />
          ) : (
            <Icon as={MdFiberManualRecord} color='red' />
          )}
        </IconButton>
        <Link to="/summary">
          <Button disabled={isRecording}>Finish your lesson ➡</Button>
        </Link>
      </HStack>
    </Container>
  );
}

export default LessonPage;
