import { Route, Switch } from 'react-router';
import { BreakTime, LabTime, QuizTime, Questions } from './components';
import Navigation from './components/Navigation';
import {
	Footer,
	FooterLink,
	Header,
	Main,
	Title,
	TitleBar,
} from './components/shared';
import logo from './logo.png';

function App() {
	return (
		<>
			<Header>
				<TitleBar>
					<Title>Architecting on AWS</Title>
					<img src={logo} alt="AWS Training and Certification" />
				</TitleBar>
				<Navigation />
			</Header>
			<Main>
				<Switch>
					<Route path="/breaktime" component={BreakTime} />
					<Route path="/labtime" component={LabTime} />
					<Route path="/quiztime" component={QuizTime} />
					<Route path="/questions" component={Questions} />
					<Route path="*" component={Questions} />
				</Switch>
			</Main>
			<Footer>
				&copy; {new Date().getFullYear()}{' '}
				<FooterLink href="https://github.com/ThomasUtsey/max-techtrain">
					Thomas Utsey
				</FooterLink>
			</Footer>
		</>
	);
}

export default App;
