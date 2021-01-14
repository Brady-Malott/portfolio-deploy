import React from 'react';
import { TimelineItem } from './TimelineItem';
import timeline from '../../data/timeline.json';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Timeline = () => {
	// Create an array of TimelineItems after reading from timeline.json
	const tlItems = timeline.map((item, index) => {
		const itemObject = {
			title: item.title,
			date: item.date,
			body: item.body,
		};
		return (
			<TimelineItem
				key={index}
				position={index % 2 === 0 ? 'left' : 'right'}
				item={itemObject}
			/>
		);
	});

	return (
		<div className='timeline'>
			<h1 className='section-title'>My Journey</h1>
			<VerticalTimeline>{tlItems}</VerticalTimeline>
		</div>
	);
};
