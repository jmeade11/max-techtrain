import { Route, Switch } from 'react-router';
import { BreakTime, LabTime, QuizTime, Questions } from './components';
import Navigation from './components/Navigation';

function App() {
	return (
		<div className="App">
			<header>
				<Navigation />
			</header>
			<main>
				<Switch>
					<Route path="/breaktime" component={BreakTime} />
					<Route path="/labtime" component={LabTime} />
					<Route path="/quiztime" component={QuizTime} />
					<Route path="/questions" component={Questions} />
					<Route path="*" component={Questions} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
