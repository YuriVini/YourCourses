import React from 'react';

import {
    Container,
    Square,
    Title,
    Options,
    Number,
    Label,
    ProgressContainer,
} from './styles';

const statistics = [
    {
        key: String(Math.random()),
        number: '11',
        label: 'Courses completed',
    },
    {
        key: String(Math.random()),
        number: '3',
        label: `Courses ${"\n"}in progress`,
    },
]


export default function Statistics(){
    return (
        <Container>

            <Title>
                Personal statistics
            </Title>

            <ProgressContainer>
                {statistics.map((items)=>(
                    <Options key={items.key}>
                        <Square>
                            <Number>{items.number}</Number>
                            <Label>{items.label}</Label>
                        </Square>
                    </Options>
                ))}
            </ProgressContainer>
        </Container>
    );
}