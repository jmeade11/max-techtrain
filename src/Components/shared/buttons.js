import styled from 'styled-components';

const variants = {
	'accent-1': {
		alpha: 'var(--accent-1a)',
		mid: 'var(--accent-1)',
		light: 'var(--lt)',
		dark: 'var(--dk-1)',
	},
	'accent-2': {
		alpha: 'var(--accent-2a)',
		mid: 'var(--accent-2)',
		light: 'var(--lt)',
		dark: 'var(--dk-2)',
	},
	'accent-3': {
		alpha: 'var(--accent-3a)',
		mid: 'var(--accent-3)',
		light: 'var(--lt)',
		dark: 'var(--dk-3)',
	},
	'accent-4': {
		alpha: 'var(--accent-4a)',
		mid: 'var(--accent-4)',
		light: 'var(--lt)',
		dark: 'var(--dk-4)',
	},
	error: {
		alpha: 'var(--error-a)',
		mid: 'var(--error)',
		light: 'var(--lt)',
		dark: 'var(--error-dk)',
	},
	success: {
		alpha: 'var(--accent-1a)',
		mid: 'var(--accent-1a)',
		light: 'var(--lt)',
		dark: 'var(--dk-1)',
	},
};

const ButtonBase = styled.button`
	color: inherit;
	background-color: transparent;
	border-radius: 0.25rem;
	border: 1px solid transparent;
	display: inline-block;
	font-family: inherit;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	margin: 0;
	overflow: visible;
	padding: 0.375rem 0.75rem;
	text-align: center;
	text-transform: none;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;

	&:not(:disabled) {
		cursor: pointer;
	}

	&:focus {
		outline: 0;
		text-decoration: none;
	}

	& + button {
		margin-left: 0.5rem;
	}
`;

export const Button = styled(ButtonBase)`
	background-color: ${({ variant }) =>
		variant ? variants[variant].mid : 'transparent'};
	border-color: ${({ variant }) =>
		variant ? variants[variant].mid : 'transparent'};
	color: ${({ variant }) => (variant ? variants[variant].light : 'inherit')};

	&:hover {
		background-color: ${({ variant }) =>
			variant ? variants[variant].dark : 'transparent'};
	}

	&:focus {
		box-shadow: 0 0 0 0.2rem
			${({ variant }) => (variant ? variants[variant].alpha : 'transparent')};
	}
`;

export const OutlineButton = styled(ButtonBase)`
	background-color: var(--lt);
	border-color: ${({ variant }) =>
		variant ? variants[variant].dark : 'transparent'};
	color: ${({ variant }) => (variant ? variants[variant].dark : 'inherit')};

	&:hover {
		color: var(--lt);
		background-color: ${({ variant }) =>
			variant ? variants[variant].dark : 'transparent'};
	}

	&:focus {
		box-shadow: 0 0 0 0.2rem
			${({ variant }) => (variant ? variants[variant].alpha : 'transparent')};
	}
`;
