import React from 'react';
import { Timeline } from '../layout/Timeline';
import { Projects } from '../layout/Projects';

export const ProjectsPage = () => {
	return (
		<div className='transition-wrapper'>
			<div className='container projects-timeline'>
				<Timeline />
				<Projects />
			</div>
		</div>
	);
};
