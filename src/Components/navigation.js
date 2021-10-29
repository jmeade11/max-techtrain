import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/breaktime" activeClassName="active">
						Break Time
					</NavLink>
				</li>
				<li>
					<NavLink to="/labtime" activeClassName="active">
						Lab Time
					</NavLink>
				</li>
				<li>
					<NavLink to="/quiztime" activeClassName="active">
						Quiz Time
					</NavLink>
				</li>
				<li>
					<NavLink to="/questions" activeClassName="active">
						Questions
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
