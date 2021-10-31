import Timer from './Timer';
import styled from 'styled-components';

const EditableHeading = styled.h1`
	resize: both;
	outline: none;
	overflow: auto;
	font-weight: 300;
	margin: 0;

	&:focus {
		border-bottom: 1px solid var(--accent-1);
	}
`;

const BreakTime = () => {
	return (
		<>
			<EditableHeading
				contentEditable="true"
				suppressContentEditableWarning="true"
				spellCheck="false"
				data-gramm_editor="false"
			>
				Break
			</EditableHeading>
			<Timer format="breakTimeFormat" />
		</>
	);
};

export default BreakTime;
