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
				{/* <Navigation /> */}
			</Header>
			<Main>
				<Switch>
					{/* <Route path="/breaktime" component={BreakTime} />
					<Route path="/labtime" component={LabTime} />
					<Route path="/quiztime" component={QuizTime} />
					<Route path="/questions" component={Questions} /> */}
					<Route path="/day2">
						<div style={{ fontSize: '3em' }}>
							<h2>Welcome Capital One!</h2>
							<h1>Architecting on AWS</h1>
							<p>
								<b>Start Time:</b> 9:00 AM ET
							</p>
						</div>
					</Route>
					<Route path="/lunch">
						<div style={{ fontSize: '3em' }}>
							<h1>Lunch Break</h1>
							<p>
								See everyone back here at <b>1:00 PM ET</b>.
							</p>
							<p>Feel free to leave a message in the chat in the meantime.</p>
						</div>
					</Route>
					<Route path="/opening">
						<h2>Welcome Capital One!</h2>
						<h1>Architecting on AWS</h1>
						<p>
							<b>Start Time:</b> 9:10 AM ET
						</p>
						<p>
							If you haven't already done so, please create accounts at the
							following:
						</p>
						<ul>
							<li>
								<span style={{ fontWeight: 'bold', color: 'var(--dk-3)' }}>
									https://evantage.gilmoreglobal.com
								</span>
								<br />
								<span style={{ color: 'red', fontStyle: 'italic' }}>
									* Use the same email used to register for the course
								</span>
							</li>
							<li>
								<span style={{ fontWeight: 'bold', color: 'var(--dk-3)' }}>
									https://aws.qwiklabs.com
								</span>
								<br />
								<span style={{ color: 'red', fontStyle: 'italic' }}>
									* Use the same email used to register for the course
								</span>
							</li>
							<li>
								<span style={{ fontWeight: 'bold', color: 'var(--dk-3)' }}>
									https://explore.skillbuilder.aws
								</span>
							</li>
						</ul>
					</Route>
					<Route path="*" component={BreakTime} />
				</Switch>
			</Main>
			<Footer>
				&copy; {new Date().getFullYear()}{' '}
				<FooterLink href="https://github.com/jmeade11/max-techtrain">
					Jennifer Meade
				</FooterLink>
			</Footer>
		</>
	);
}

export default App;
