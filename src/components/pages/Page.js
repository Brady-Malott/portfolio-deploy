import React, { useContext, Fragment } from 'react';
import AppContext from '../../context/appContext';
import { Home } from './Home';
import { ProjectsPage } from './ProjectsPage';
import { About } from './About';
import { Footer } from '../layout/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Page = () => {
	const appContext = useContext(AppContext);
	const { page } = appContext;
	return (
		<Fragment>
			<div id='page-container'>
				<ReactCSSTransitionGroup transitionName='page-transition'>
					{page === 'home' && <Home key={0} />}
					{page === 'projects' && <ProjectsPage key={1} />}
					{page === 'about' && <About key={2} />}
				</ReactCSSTransitionGroup>
				<Footer />
			</div>
		</Fragment>
	);
};
