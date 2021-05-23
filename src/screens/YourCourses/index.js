import React from 'react';
import { 
    Container, 
    TitleContainer, 
    Title, 
} from './styles';

import { useNavigation } from '@react-navigation/core';

import Courses from '../../Components/Courses';
import Statistics from '../../Components/Statistics';
import Button from '../../Components/Button';


export default function YourCourses(){
    
    const navigation = useNavigation();
    
    function handleStart(){
        navigation.navigate('Payment');
    }

    return (
        <Container>

            <TitleContainer>
                <Title>
                    Your couses
                </Title>
            </TitleContainer>

            <Courses />

            <Statistics />

            <TitleContainer>
                <Title>
                    Learn more way faster
                </Title>
            </TitleContainer>

            <Button title="Go Pro Now  " subtitle="and save 80%" onPress={handleStart}/>
        </Container>
    );
}