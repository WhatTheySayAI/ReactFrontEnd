import {
  Button,
  Container as Box,
  VStack,
  Text,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";

import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";

import { MdOutlinePause, MdPlayArrow } from "react-icons/md";

function LessonPage({ run, isRecording, transcript, notes, setNotes }) {
  return (
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
          value={notes}
          placeholder="What do you want to work on?"
          onChange={(event) => setNotes(event.target.value)}
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
          <Button disabled={isRecording}>Finish your lesson ➡</Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default LessonPage;
