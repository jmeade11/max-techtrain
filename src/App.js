import React, { useState } from 'react';
import Breaktime from './Components/break-time';
import Labtime from './Components/lab-time';
import Quiztime from './Components/quiz-time';
import Questions from './Components/questions';
import './App.css';

function App() {
	const [show, setShow] = useState('break');

	return (
		<div className="App">
			<div className="nav">
				<div className="break" onClick={() => setShow('break')}>
					<h1> Break-Time</h1>
				</div>
				<div className="quiz" onClick={() => setShow('quiz')}>
					<h1> Quiz-Time </h1>
				</div>
				<div className="lab" onClick={() => setShow('lab')}>
					<h1>Lab-Time</h1>
				</div>
			</div>
			{show === 'break' ? (
				<Breaktime />
			) : 'quiz' ? (
				<Quiztime />
			) : 'lab' ? (
				<Labtime />
			) : (
				<Questions />
			)}
		</div>
	);
}

export default App;
