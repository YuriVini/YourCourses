import React from 'react';
import { Button, ButtonText, ButtonSubTitle } from './styles';

export default function ButtonProps({onPress, title, subtitle}){
    return (
            <Button onPress={onPress}>
                <ButtonText>
                    {title}
                </ButtonText>
                <ButtonSubTitle>
                    {subtitle}
                </ButtonSubTitle>
            </Button>
 
    );
}