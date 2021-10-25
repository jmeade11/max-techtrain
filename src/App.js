
import React, { useState } from 'react';
import Breaktime  from './Components/break-time';
import Labtime from './Components/lab-time';
import Quiztime from './Components/quiz-time';
import Questions from './Components/questions';
import './App.css';


function App() {

  const [ bbreak, setBreak ] = useState(false);
  const [ quiz, setQuiz ] = useState(false)
  const [lab, setLab] = useState(false)


  return (
    
    <div className="App">
      <div className='nav'>

      <div className='break' onClick={() => setBreak(!bbreak)  }> <h1> Break-Time</h1></div>

      <div className='quiz' onClick={() => setQuiz(!quiz)}> <h1> Quiz-Time </h1></div>

      <div className='lab' onClick={() => setLab(!lab)}><h1>Lab-Time</h1></div>

    </div>
    { bbreak? <Breaktime/>
          : quiz ?  <Quiztime/>
          : lab ? <Labtime/>
          : <Questions/>
}
    </div>
  );
}

export default App;


