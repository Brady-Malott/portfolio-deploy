import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const TimelineItem = (props) => {
	const { title, date, body } = props.item;

	return (
		// position (left or right) is received as a prop
		// dateClassName is either tl-item-date-left or tl-item-date-right. These classes shift the date text by about 20px
		<VerticalTimelineElement
			className='vertical-timeline-element--work'
			contentStyle={{ background: 'var(--item-background)', color: '#fff' }}
			contentArrowStyle={{ borderRight: '7px solid var(--item-background)' }}
			date={date}
			iconStyle={{ background: 'var(--item-background)', color: '#fff' }}
			position={props.position}
			dateClassName={'tl-item-date-' + props.position}
		>
			<h3 className='vertical-timeline-element-title'>{title}</h3>
			<p>{body}</p>
		</VerticalTimelineElement>
	);
};
