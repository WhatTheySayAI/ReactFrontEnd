import { Button, Container as Box, VStack, Text, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useTranscriber } from "./Transcriber";

function LessonPage() {
  const [run, isRecording, transcript] = useTranscriber();
  const notes = useRef();

  return(
    <VStack direction={'column'}>
      <Text>
        {transcript}
      </Text>
      <Input placeholder="What do you want to work on?" onChange={(event) => notes.current = event.target.value}/>
      <Button onClick={run}>
        {isRecording ? "Pause" : "Record"}
      </Button>
      <Link to ="/summary" >
      <Button>
        Finish your lesson ➡
      </Button>
      </Link>
      <Box h='100px'/>
    
    </VStack>
  );
}

export default LessonPage;