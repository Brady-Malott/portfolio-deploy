import React from 'react';

export const AboutPrimary = () => {
	return (
		<div className='about-primary'>
			<h1>About Me</h1>
			<div className='about-primary-flex'>
				<img
					src={require('../../images/portrait.png').default}
					alt='Portrait'
					id='portrait'
				/>
				<div id='bio'>
					<p>
						I'm Brady Malott, and I am a sophomore computer science student at the University of Windsor. I am enrolled in a four-year bachelor of Computer Science honours program with a specialization in Software Engineering. I am an aspiring full stack developer and have been practicing frontend and backend web development using technologies such as React, Express, Firebase, and MongoDB.
					</p>
					<p>
						I have been programming since my third year of high school, and have developed strong skills in Java, Python, Javascript, HTML, CSS, and C. I enjoy learning new skills as a programmer, especially through participating in hackathons, working on solo or team based projects, and competing in programming competitions.
					</p>
					<p>
						Currently, I am seeking co-op placements for the summer of 2021. I am also working with a group of students from my university on a web app called UTable, which will allow students to create course timetables and rate courses. Through this project, I hope to develop even stronger skills in React and Django, as well as better communication skills, since most of my past projects have been completed individually.
					</p>
				</div>
			</div>
		</div>
	);
};
