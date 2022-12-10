import {
  Button,
  Container as Box,
  VStack,
  Text,
  Input,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import ResizeTextarea from "react-textarea-autosize";

import { Link } from "react-router-dom";
import { useTranscriber } from "./Transcriber";

import { Icon } from "@chakra-ui/react";

import { MdOutlinePause, MdPlayArrow } from "react-icons/md";

function LessonPage() {
  const [run, isRecording, transcript] = useTranscriber();
  const notes = useRef();

  return (
    <>
      {/* <Box> */}
      <Box p={6}>
        <Heading class="headline" size="3xl">
          Lesson
        </Heading>
        <VStack direction={"column"}>
          <Textarea
            minH="unset"
            w="100%"
            resize="none"
            minRows={5}
            maxRows={5}
            as={ResizeTextarea}
            placeholder="What do you want to accomplish for this lesson?"
            onChange={(event) => (notes.current = event.target.value)}
          />

          <Text>{transcript}</Text>

          <Button onClick={run} borderRadius="100">
            {isRecording ? (
              <Icon as={MdOutlinePause} />
            ) : (
              <Icon as={MdPlayArrow} />
            )}
          </Button>
          <Link to="/summary">
            <Button b>Finish your lesson ➡</Button>
          </Link>
        </VStack>
      </Box>
    </>
  );
}

export default LessonPage;
