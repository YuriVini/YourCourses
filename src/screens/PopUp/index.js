import React from 'react';

import { 
    Wrapper,
    Container,
    Img,
    Title,
    SubTitle,
    PressableText
} from './styles';
import { useNavigation } from '@react-navigation/core';

import ButtonProps from '../../Components/Button';

import bust from '../../assets/bust.png';
import YourCourses from '../YourCourses';



export default function Popup(){

    const navigation = useNavigation();
    
    function handleStart(){
        navigation.navigate('Courses');
    }

    return(
        <Wrapper>
            <Container>
                <Img source={bust}/>
                <Title>
                    Hey Leslee, {"\n"}
                    There's a new course about {"\n"}
                    Figma
                </Title>
                <SubTitle>
                    Find out how our new matching tool {"\n"}
                    can help you learn another way
                </SubTitle>

                <ButtonProps title="Discover the course" onPress={() => handleStart()}/>
                
                <PressableText onPress={handleStart}>
                    Not now
                </PressableText>
            </Container>
        </Wrapper>
    );
}