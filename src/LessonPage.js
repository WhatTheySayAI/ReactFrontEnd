import {
  Button,
  Container as Box,
  VStack,
  HStack,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { animateScroll } from "react-scroll";
import ResizeTextarea from "react-textarea-autosize";

import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";

import { MdOutlinePause, MdPlayArrow } from "react-icons/md";
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
    <Box p={6}>
      <Heading class="headline" size="3xl">
        Lesson
      </Heading>
      <VStack direction={"column"}>
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

        
        <HStack align='end'>
          <Button onClick={run} borderRadius="100">
            {isRecording ? (
              <Icon as={MdOutlinePause} />
            ) : (
              <Icon as={MdPlayArrow} />
            )}
          </Button>
          <Link to="/summary">
            <Button disabled={isRecording}>Finish your lesson ➡</Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}

export default LessonPage;
