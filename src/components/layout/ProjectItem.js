import React from 'react';

export const ProjectItem = (props) => {
	const { title, imgURL, technologies, finishDate, description } = props.item;

	return (
		<div className='project-item'>
			<img
				src={require(`../../images/${imgURL}`).default}
				alt={imgURL}
				className='project-img'
			/>
			<div className='project-content'>
				<div className='project-header'>
					<h3 className='project-title'>{title}</h3>
					<p className='project-date'>{finishDate}</p>
				</div>
				<div className='project-technologies-list'>
					{technologies.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
				<p className='project-description'>{description}</p>
			</div>
		</div>
	);
};
