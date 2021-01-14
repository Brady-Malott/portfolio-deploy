import React from 'react';

export const Footer = () => {
	// Copy text to clipboard (used for getting discord tag)
	const copyToClipboard = (string) => {
		const el = document.createElement('textarea');
		el.value = string;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	};

	const composeEmail = (email) => {
		window.location.href = `mailto:${email}`;
	};

	return (
		<div className='footer'>
			<div className='footer-container'>
				<a
					className='footer-item'
					href='https://github.com/Brady-Malott'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fab fa-github fa-2x' id='github-icon'></i>
				</a>
				<a
					className='footer-item'
					href='https://www.linkedin.com/in/brady-malott-52003b193/'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fab fa-linkedin fa-2x' id='linkedin-icon'></i>
				</a>
				<a
					className='footer-item'
					href='#!'
					onClick={() => copyToClipboard('Nin10dough#6324')}
				>
					<i className='fab fa-discord fa-2x' id='discord-icon'></i>
				</a>
				<a
					className='footer-item'
					href='#!'
					onClick={() => composeEmail('brady.malottwork@gmail.com')}
				>
					<i className='far fa-envelope fa-2x' id='email-icon'></i>
				</a>
			</div>
		</div>
	);
};
