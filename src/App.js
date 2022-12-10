import './App.css';
import { EmailPage } from './Email';

import HomePage from './HomePage';
import LessonPage from './LessonPage';
import SummaryPage from './SummaryPage';

import {
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import { useTranscriber } from './Transcriber';
import { useState } from 'react';
import Sent from './Sent';


function App() {
  const [run, isRecording, transcript] = useTranscriber();
  const [notes, setNotes] = useState("");
  const [finalThoughts, setFinalThoughts] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lesson" element={<LessonPage run={run} isRecording={isRecording} transcript={transcript} notes={notes} setNotes={setNotes} />} />
      <Route path='/summary' element = {<SummaryPage transcript={transcript} notes={notes} finalThoughts={finalThoughts} setFinalThoughts={setFinalThoughts}/>} />
      <Route path='/email' element = {<EmailPage transcript={transcript} notes={notes} finalThoughts={finalThoughts} userEmail={userEmail} setUserEmail={setUserEmail} />} />
      <Route path='/sent' element = {<Sent userEmail={userEmail} />} />
    </Routes>
  );
}

export default App;
