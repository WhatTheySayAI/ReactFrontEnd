import './App.css';

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
    </Routes>
  );
}

export default App;
