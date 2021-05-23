import React from 'react';
import { 
    Container, 
    Options, 
    SquareIcon, 
    Img, 
    Label, 
    Author 
} from './styles';

import figma from '../../assets/figma.png';
import flutter from '../../assets/flutter.png';
import atlanssis from '../../assets/atlanssis.png';


const item = [
    {
        key: String(Math.random()),
        img: figma,
        label: 'UI/UX on Figma',
        author: 'by Christopher D.',
    },

    {
        key: String(Math.random()),
        img: flutter,
        label: 'Flutter workshop',
        author: 'by Katalina C.',
    },

    {
        key: String(Math.random()),
        img: atlanssis,
        label: 'Atlassian            ',
        author: 'by Florian H.',
    }, 
];

export default function Courses(){
    return (
        <Container>
            {item.map((items)=>(
                <Options key={items.key}>
                    <SquareIcon>
                        <Img source={items.img} /> 
                    </SquareIcon>
                    <Label>{items.label}</Label>
                    <Author>{items.author}</Author>
                </Options>
            ))}
        </Container>
    );
}