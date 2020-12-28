import React from 'react';
import { MainWrapper, CenteredWrapper } from './style.js';

function SafeView(props) {
	return (
		<MainWrapper colored={ props.colored }>
			{ props.children }
		</MainWrapper>
	);
};

export default SafeView;