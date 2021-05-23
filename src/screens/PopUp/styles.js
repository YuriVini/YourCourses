import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    background: #fff;
    align-items: center;
    padding-top: 100px;
`;

export const Img = styled.Image``;

export const Title = styled.Text`
    text-align: center;
    font-size: 22px;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    padding-top: 15px;
    text-align: center;
    font-size: 16px;
    font-family: sans-serif-light;
`;

export const PressableText = styled.Text`
    margin-top: 40px;
    color: #BDBDBD;
    font-size: 15px;
    font-weight: 300;
`;