import React from 'react';
import { AboutPrimary } from '../layout/AboutPrimary';
import { AboutSecondary } from '../layout/AboutSecondary';

export const About = () => {
	return (
		<div className='transition-wrapper'>
			<div className='container-thin about-grid'>
				<AboutPrimary />
				<AboutSecondary />
			</div>
		</div>
	);
};
