import React from 'react';
import { Container, CounterContent, CounterWrapper } from './style.js';
import Ionicons from '@expo/vector-icons/Ionicons';

function IconWithBadge({ name, badgeCount, color, size }) {
	return (
		<Container>
			<Ionicons name={name} size={size} color={color} />

			{badgeCount > 0 && (
				<CounterWrapper>
					<CounterContent>
						{badgeCount}
					</CounterContent>
				</CounterWrapper>
			)}
		</Container>
	);
};

export default IconWithBadge;