import React from 'react';
import { MainWrapper, CenteredWrapper } from './style.js';

function SafeView(props) {
	if( props.centered ) {
		return (
			<CenteredWrapper colored={ props.colored }>
				{ props.children }
			</CenteredWrapper>
		);
	} else {
		return (
			<MainWrapper colored={ props.colored }>
				{ props.children }
			</MainWrapper>
		);
	}
};

export default SafeView;