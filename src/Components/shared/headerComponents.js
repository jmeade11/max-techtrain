import styled from 'styled-components';
import * as breakpoints from './breakpoints';

export const Header = styled.header`
	background-image: linear-gradient(to right, #159b92, #187ca0);
	color: var(--text-lt);
	padding: 1rem;
`;

export const Nav = styled.nav`
	margin: 0 -1rem -1rem;
`;

export const NavList = styled.ul`
	display: grid;
	list-style-type: none;
	margin: 0;
	padding: 0;

	@media (min-width: ${breakpoints.SM}) {
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	}
`;

export const NavListItem = styled.li`
	background-color: ${(props) =>
		props.bg ? `var(${props.bg})` : 'transparent'};
	background-blend-mode: lighten;
	background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
	cursor: pointer;
	font-weight: bold;
	padding: 1rem;
	text-align: center;
	user-select: none;

	&:hover,
	&.active {
		background-blend-mode: darken;
	}

	> a {
		color: inherit;
		display: inline-block;
		margin: -1rem;
		padding: 1rem;
		text-align: inherit;
		width: calc(100% + 2rem);
	}
`;

export const TitleBar = styled.div`
	align-items: center;
	display: grid;
	grid-template-columns: 1fr 150px;
	margin-bottom: 1rem;
`;

export const Title = styled.h1`
	font-weight: 300;
	margin: 0;
`;
