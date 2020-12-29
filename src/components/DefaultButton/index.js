import React from 'react';
import { Container, Button, Content } from './style.js';

function DefaultButton(props) {
	return (
		<Container marginBottom={ props.marginBottom }>
			<Button colored={ props.colored } onPress={ props.onPress }>
				<Content colored={ props.colored }>
					{ props.children }
				</Content>
			</Button>
		</Container>
	);
};

export default DefaultButton;