import styled from 'styled-components/native';

export const Container = styled.View`
    background: #FFFFFF;
    width: 100%;
    height: 189px;
`;

export const ProgressContainer = styled.View`
    background: #FFFFFF;
    width: 100%;
    height: 189px;
    flex-direction: row;

`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 22px;
    margin-left: 20px;
`;

export const Options = styled.View`
    margin: 15px 17px 0 20px;
`;

export const Square = styled.View`
    background: #F5F5F7;
    width: 150px;
    height: 150px;
    border-radius: 14px;
    align-items: center;
    justify-content: center;
`;

export const Number = styled.Text`
    font-family: sans-serif-medium;
    font-weight: 700;
    font-size: 46px;
`;

export const Label = styled.Text`
    text-align: center;
    font-weight: 400;
    font-size: 16px;
`;
