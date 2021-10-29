import { NavLink } from 'react-router-dom';
import { Nav, NavList, NavListItem } from './shared';

const Navigation = () => {
	return (
		<Nav>
			<NavList>
				<NavListItem bg="--accent-1">
					<NavLink to="/breaktime" activeClassName="active">
						Break Time
					</NavLink>
				</NavListItem>
				<NavListItem bg="--accent-2">
					<NavLink to="/labtime" activeClassName="active">
						Lab Time
					</NavLink>
				</NavListItem>
				<NavListItem bg="--accent-3">
					<NavLink to="/quiztime" activeClassName="active">
						Quiz Time
					</NavLink>
				</NavListItem>
				<NavListItem bg="--accent-4">
					<NavLink to="/questions" activeClassName="active">
						Questions
					</NavLink>
				</NavListItem>
			</NavList>
		</Nav>
	);
};

export default Navigation;
