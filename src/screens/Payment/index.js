import React from 'react';
import { 
    Container,
    Header,
    SquareBack,
    Title,
    CardContainer,
    CardImage,
    CardCircleImage,
    MasterCard,
    MasterCard2,
    NumberCard,
    NameDateContainer,
    Name,
    Date,
    NameContainer,
    DateContainer,
    IconContainer,
    PlaceNames,
    FormContainer,
    InputName,
    InputNumberCard,
    DateCodeContainer,
    ValDateContainer,
    CodeContainer,
    InputValDate,
    InputCvc,
    ButtonContainer,
} from './styles';
import { useNavigation } from '@react-navigation/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonProps from '../../Components/Button';

export default function Payment(){
    
    const navigation = useNavigation();
    
    function handleStart(){
        navigation.navigate('Courses');
    }

    return (
        <Container>
            <Header>
                <SquareBack onPress={() => handleStart()}>
                    <MaterialCommunityIcons 
                        name="chevron-left" 
                        size={38} 
                        color={'#8698A8'}
                    />
                </SquareBack>
                <Title>
                    Credit/Debit Card
                </Title>
            </Header>
            <CardContainer>
                <CardImage>
                    <CardCircleImage>
                        <MasterCard></MasterCard>
                        <MasterCard2></MasterCard2>
                    </CardCircleImage>
                </CardImage>
                <NumberCard>
                    4242 4242 4242 4242
                </NumberCard>
                <NameDateContainer>
                    <NameContainer>
                        <Name>
                            Leslee Harron
                        </Name>
                    </NameContainer>
                    <DateContainer>
                        <Date>
                            04/22
                        </Date>
                    </DateContainer>
                </NameDateContainer>
                <IconContainer>
                <MaterialCommunityIcons 
                        name="credit-card-scan-outline" 
                        size={38} 
                        color={'rgba(134, 152, 168, 1)'}
                    />
                </IconContainer>
            </CardContainer>
            <FormContainer>
                <PlaceNames> Name on card</PlaceNames>
                <InputName>
                    Leslee Harron
                </InputName>
                <PlaceNames> Card number</PlaceNames>
                <InputNumberCard>
                    4242 4242 4242 4242
                </InputNumberCard>
                <DateCodeContainer>
                    <ValDateContainer>
                        <PlaceNames> Expiry date</PlaceNames>
                        <InputValDate>
                            04/22
                        </InputValDate>
                    </ValDateContainer>
                    <CodeContainer>
                        <PlaceNames> CVC</PlaceNames>
                        <InputCvc>
                            474
                        </InputCvc>
                    </CodeContainer>
                </DateCodeContainer>
            </FormContainer>
            <ButtonContainer>
            <ButtonProps title="Use this Card" subtitle=""/>
            </ButtonContainer>
        </Container>
    );
}