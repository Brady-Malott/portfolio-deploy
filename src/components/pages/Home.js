import React, { useContext } from 'react';
import AppContext from '../../context/appContext';

export const Home = () => {
	const appContext = useContext(AppContext);
	const { setPage } = appContext;

	return (
		<div className='transition-wrapper'>
			<main className='hero'>
				<div className='home-content overlay'>
					<h1 id='main-header'>I'm Brady Malott</h1>
					<h4 id='secondary-header'>
						I'm a Computer Science Student and Web Developer. Let me show you
						what I do.
					</h4>
					<button
						className='btn continue-btn py-1 px-3'
						onClick={() => setPage('projects')}
					>
						Continue
					</button>
				</div>
			</main>
		</div>
	);
};
