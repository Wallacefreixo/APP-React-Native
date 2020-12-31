import React from 'react';
import { FlexWrapper } from '../../atoms/PageWrapper/style';
import { Error, Title } from '../../atoms/Content/style';
import { UserInput, DefaultButton } from '../../molecules/';

function Form(props) {
    const fields = [];

	for( let i = 0; i < props.fields.length; i++ ) {
		fields.push(
            <UserInput key={i}
                value={props.fields[i][0]}
                iconSet={props.fields[i][1]}
                placeholder={props.fields[i][2]}
                onChangeText={props.fields[i][3]}
                secureTextEntry={props.fields[i][4]}>

                { props.fields[i][5] }

            </UserInput>
		)
    }
    
    return (
        <FlexWrapper marginTop='40px'>
            <Title>{props.formTitle}</Title>

            { fields }

            <Error description>{props.errorMessage}</Error> 
            <DefaultButton colored onPress={props.submit}>{props.formTitle}</DefaultButton>
            { props.children }
        </FlexWrapper>
    );
};

export default Form;