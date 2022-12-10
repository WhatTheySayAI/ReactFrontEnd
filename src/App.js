import './App.css';
import { EmailPage } from './Email';
import { Record } from './Record';

import HomePage from './HomePage';
import LessonPage from './LessonPage';
import SummaryPage from './SummaryPage';

import {
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lesson" element={<LessonPage />} />
      <Route path='/summary' element = {<SummaryPage />} />
      <Route path='/email' element = {<EmailPage />} />
      {/* TODO: This is supposed to be a part of the lesson page but this is for convenience */}
      <Route path="/record" element={<Record />} />
    </Routes>
  );
}

export default App;
