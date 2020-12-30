import React from 'react';
import { Container, CounterWrapper } from './style.js';
import { CounterNumber } from '../../atoms/Content/style';
import Ionicons from '@expo/vector-icons/Ionicons';

function IconWithBadge({ name, badgeCount, color, size }) {
	return (
		<Container>
			<Ionicons name={name} size={size} color={color} />

			{badgeCount > 0 && (
				<CounterWrapper>
					<CounterNumber align='center'>
						{badgeCount}
					</CounterNumber>
				</CounterWrapper>
			)}
		</Container>
	);
};

export default IconWithBadge;