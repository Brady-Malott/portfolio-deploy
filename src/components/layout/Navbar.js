import React, { useContext } from 'react';
import AppContext from '../../context/appContext';

export const Navbar = () => {
	const appContext = useContext(AppContext);
	const { setPage } = appContext;

	return (
		<nav className='navbar'>
			<div className='logo'>
				<button className='nav-item btn logo' onClick={() => setPage('home')}>
					{/* <img src='../images/logo.png' alt='Not found' /> */}
					BM
				</button>
			</div>
			<button className='nav-item btn' onClick={() => setPage('home')}>
				Home
			</button>
			<button className='nav-item btn' onClick={() => setPage('projects')}>
				Projects
			</button>
			<button className='nav-item btn' onClick={() => setPage('about')}>
				About
			</button>
		</nav>
	);
};
