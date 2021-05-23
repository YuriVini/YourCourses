import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() =>({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`
    background: #fff;
    height: 230px;
    width: 100%;
`;

export const Options = styled.TouchableOpacity`
    margin-right: 15px;
`;

export const Img = styled.Image``;

export const SquareIcon = styled.View`
    width: 135px;
    height: 135px;
    border-radius: 12px;
    background: #07122A;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: #07122A;
`;

export const Author = styled.Text`
    font-weight: 400;
    font-size: 13px;
    color: #000000;
`;