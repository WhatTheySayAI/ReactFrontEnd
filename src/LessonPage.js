import { Button, Container as Box, VStack, Text, Input } from "@chakra-ui/react";
import React,{ useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useTranscriber } from "./Transcriber";

function LessonPage({run, isRecording, transcript, notes, setNotes}) {

  return(
    <VStack direction={'column'}>
      <Text>
        {transcript}
      </Text>
      <Input value={notes} placeholder="What do you want to work on?" onChange={(event) => setNotes(event.target.value)}/>
      <Button onClick={run}>
        {isRecording ? "Pause" : "Record"}
      </Button>
      <Link to="/summary">
        <Button disabled={isRecording}>
          Finish your lesson ➡
        </Button>
      </Link>
    
    </VStack>
  );
}

export default LessonPage;