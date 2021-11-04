import { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Button, OutlineButton } from './shared/buttons';

const TimerDisplay = styled.h1`
	font-size: clamp(6rem, 15vw, 15rem);
	margin: 1rem 0;
	user-select: none;
`;

const TimerControls = styled.form`
	padding: 1rem 0;
	max-width: 30rem;
	opacity: 0.25;
	transition: opacity 0.25s ease-in;

	&:hover {
		opacity: 1;
	}

	&:focus-within {
		opacity: 1;
	}
`;

const RangeSlider = styled.input.attrs((props) => ({
	type: 'range',
}))`
	margin: 0.5rem 0;
	width: 100%;
	-webkit-appearance: none;

	&:focus {
		outline: none;
	}

	&::-webkit-slider-runnable-track {
		background-color: var(--accent-1);
		border: none;
		border-radius: 1rem;
		cursor: pointer;
		height: 1.5rem;
		width: 100%;
	}

	&::-moz-range-track {
		background: var(--accent-1);
		border: none;
		border-radius: 1rem;
		cursor: pointer;
		height: 1.5rem;
		width: 100%;
	}

	&::-webkit-slider-thumb {
		background: var(--dk-1);
		border: none;
		border-radius: 2rem 2rem 0 2rem;
		cursor: pointer;
		height: 2rem;
		transform: translateY(-0.25rem) rotate(45deg);
		width: 2rem;
		-webkit-appearance: none;
	}

	&::-moz-range-thumb {
		background: var(--dk-1);
		border: none;
		border-radius: 2rem 2rem 0 2rem;
		cursor: pointer;
		height: 2rem;
		transform: translateY(-0.25rem) rotate(45deg);
		width: 2rem;
		-webkit-appearance: none;
	}
`;

const SliderTicks = styled.datalist`
	display: flex;
	justify-content: space-between;

	& > option {
		border-radius: 50%;
		color: var(--dk-1);
		cursor: pointer;
		display: grid;
		font-weight: bold;
		height: 2rem;
		place-content: center;
		text-align: center;
		transition: background 0.25s, border 0.25s;
		user-select: none;
		width: 2rem;
	}

	& > option:hover {
		background: var(--accent-1);
		background-blend-mode: lighten;
		background-image: linear-gradient(rgba(255, 255, 255, 0.5) 0 0);
		border: 1px solid var(--dk-1);
	}

	& > option:focus {
		background: var(--accent-1);
		background-blend-mode: lighten;
		background-image: linear-gradient(rgba(255, 255, 255, 0.5) 0 0);
		border: 1px solid var(--dk-1);
		outline: none;
	}
`;

const RangeSliderLabel = styled.label`
	display: block;
	font-weight: bold;
	margin-bottom: 1rem;

	&:span {
		color: var(--dk-1);
	}
`;

const ProgressBar = styled.div`
	background-color: var(--lt);
	bottom: 0;
	height: 2rem;
	left: 0;
	position: absolute;
	right: 0;

	&::before {
		content: '';
		background-image: linear-gradient(to right, var(--accent-3), var(--dk-3));
		height: 100%;
		position: absolute;
		transition: width 1s linear;
		width: ${(props) => props.percentage + '%'};
	}
`;

const Timer = ({ format }) => {
	const [[hrs, mins, secs], setTime] = useState([0, 0, 0]);
	const [isPaused, setIsPaused] = useState(false);
	const [[hours, minutes, seconds], setTimer] = useState([hrs, mins, secs]);
	const intervalId = useRef(null);

	const pause = () => {
		clearInterval(intervalId.current);
		setIsPaused(true);
	};

	const reset = () => {
		setTimer([hrs, mins, secs]);
		pause();
	};

	const tick = useCallback(
		(resume) => {
			if (isPaused && !resume) return;
			setIsPaused(false);
			if (hours === 0 && minutes === 0 && seconds === 0) {
				pause();
			} else if (minutes === 0 && seconds === 0) {
				setTimer([hours - 1, 59, 59]);
			} else if (seconds === 0) {
				setTimer([hours, minutes - 1, 59]);
			} else {
				setTimer([hours, minutes, seconds - 1]);
			}
		},
		[hours, minutes, seconds, isPaused]
	);

	useEffect(() => {
		intervalId.current = setInterval(() => tick(), 1000);
		return () => clearInterval(intervalId.current);
	}, [hours, minutes, seconds, tick]);

	const displayTime = () => {
		const lunchTimeFormat = `${hours.toString().padStart(2, '0')}h ${minutes
			.toString()
			.padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
		const breakTimeFormat = `${hours ? hours + 'h' : ''} ${
			minutes ? minutes + 'm' : !minutes && hours ? '0m' : ''
		} ${minutes ? seconds.toString().padStart(2, '0') : seconds}s`;
		return format === 'breakTimeFormat' ? breakTimeFormat : lunchTimeFormat;
	};

	const setAll = (mins) => {
		const hours = mins >= 60 ? Math.floor(mins / 60) : 0;
		const minutes = mins >= 60 ? mins % 60 : mins;
		setTime([hours, minutes, 0]);
		setTimer([hours, minutes, 0]);
	};

	const timerExec = (key) => {
		if (key === 'KeyS') {
			tick(true);
		} else if (key === 'KeyR') {
			reset();
		} else if (key === 'KeyP') {
			pause();
		}
	};

	return (
		<>
			<TimerDisplay>{displayTime()}</TimerDisplay>
			{!isPaused && (
				<Button variant="error" onClick={pause}>
					Stop
				</Button>
			)}
			{isPaused && (
				<Button variant="accent-1" onClick={() => tick(true)}>
					Start
				</Button>
			)}
			<OutlineButton variant="error" onClick={reset}>
				Reset
			</OutlineButton>
			<TimerControls onKeyDown={(event) => timerExec(event.code)}>
				<RangeSliderLabel htmlFor="time">
					Break Time: <span>{hrs * 60 + mins} minutes</span>
				</RangeSliderLabel>
				<RangeSlider
					id="time"
					name="time"
					step="1"
					list="tickmarks"
					min={0}
					max={60}
					value={hrs * 60 + mins}
					onChange={(event) => setAll(parseInt(event.target.value, 10))}
				/>
				<SliderTicks id="tickmarks">
					{[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((val) => (
						<option
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									setAll(parseInt(event.target.value, 10));
								}
							}}
							aria-label={`Set time for ${val} minutes`}
							tabIndex="0"
							key={val}
							value={val.toString()}
							label={val.toString()}
							onClick={() => setAll(val)}
						>
							{val}
						</option>
					))}
				</SliderTicks>
			</TimerControls>
			<ProgressBar
				percentage={
					100 /
					((hrs * 60 * 60 + mins * 60 + secs) /
						(hours * 60 * 60 + minutes * 60 + seconds))
				}
			/>
		</>
	);
};

export default Timer;
