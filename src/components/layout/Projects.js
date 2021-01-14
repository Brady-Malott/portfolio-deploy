import React from 'react';
import { ProjectItem } from './ProjectItem';
import projects from '../../data/projects.json';

export const Projects = () => {
	const projectItems = projects.map((item, index) => {
		const itemObject = {
			title: item.title,
			imgURL: item.imgURL,
			technologies: item.technologies,
			finishDate: item.finishDate,
			description: item.description,
		};
		return <ProjectItem key={index} item={itemObject} />;
	});

	return (
		<div className='projects'>
			<h1 className='section-title'>My Projects</h1>
			<div id='projects-container'>{projectItems}</div>
		</div>
	);
};
