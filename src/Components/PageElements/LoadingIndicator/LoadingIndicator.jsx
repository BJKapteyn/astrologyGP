import React, { useEffect, useState } from 'react';
import '../../../App.css';
import './LoadingIndicator.css';

export const LoadingIndicator = ({ message }) => {
	const [isTimedOut, setIsTimedOut] = useState(false);
	const [timedOutMessage, setTimedOutMessage] = useState(
		'Sorry something went wrong, refresh or try again later'
	);

	useEffect(() => {
		if (message) {
			setTimedOutMessage(message);
		}

		const timeout = setTimeout(() => {
			setIsTimedOut(true);
		}, 7000);

		return () => clearTimeout(timeout);
	}, [message]);

	if (isTimedOut) {
		return (
			<div id="loading-box">
				<p className="loading-message">{timedOutMessage}</p>
			</div>
		);
	}

	return (
		<div id="loading-box">
			<p id="loading-text">Loading Vibes...</p>
		</div>
	);
};
