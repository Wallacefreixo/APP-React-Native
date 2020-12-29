import styled from 'styled-components';
import { Text } from 'react-native';

export const Content = styled.Text`
    color: #fff;
    width: 100%;

    text-align: ${props => props.align ? 
        props.align : 'left' 
    };

    font-size: ${props => props.description ? 
        props.theme.typo.size.small : props.theme.typo.size.normal
    };

    ${props => props.padded && `
        padding-bottom: ${props.padded};
    `}
`;

export const Error = styled(Content)`
  padding-bottom: 20px;
  padding-left: 8px;
`;

export const BtnText = styled(Content)`
	color: ${ props => props.colored ? '#fff' : props.theme.color.lighter };
	font-size: ${props => props.theme.typo.size.normal};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
`;

export const CounterNumber = styled(Content)`
	font-size: ${props => props.theme.typo.size.tiny};
	font-weight: bold;
`;

export const Title = styled(Content)`
    font-weight: bold;
    text-transform: uppercase;

    font-size: ${props => props.big ? 
        props.theme.typo.size.huge : props.theme.typo.size.big
    };

    ${props => props.big && !props.align ? `
        text-align: center;
    ` : ''}

    padding-bottom: ${props => props.big ? 
        '20px' : '30px'
    };
`;