import React from 'react';
import { Container, Button } from './style.js';
import { BtnText } from '../atoms/Content/style';

function DefaultButton(props) {
	return (
		<Container marginBottom={ props.marginBottom }>
			<Button colored={ props.colored } onPress={ props.onPress }>
				<BtnText colored={ props.colored }>
					{ props.children }
				</BtnText>
			</Button>
		</Container>
	);
};

export default DefaultButton;