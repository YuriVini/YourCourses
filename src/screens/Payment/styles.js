import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    padding-top: 70px;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    width: 100%;
    padding-left: 30px;
    flex-direction: row;
    align-items: center;
`;

export const SquareBack = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #D3D3D3;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    padding-left: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
`;

export const CardContainer = styled.View`
    width: 100%;
    padding: 30px;
    align-items: center;
    justify-content: center;
`;

export const CardImage = styled.View`
    width: 357px;
    height: 234px;
    align-items: flex-end;
    border-radius: 8px;
    background: #07122A;
`;

export const CardCircleImage = styled.View`
    width: 65%;
    height: 100%;
    padding-top: 25px;
    padding-left: 25px;
    align-items: flex-start;
    border-bottom-left-radius: 200px;
    border-top-left-radius: 200px;
    background: rgba(255, 255, 255, 0.15);
    flex-direction: row-reverse;
`;

export const MasterCard = styled.View`
    width: 39px;
    height: 39px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.5);
`;

export const MasterCard2 = styled.View`
    width: 39px;
    height: 39px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.5);
    right: 12px;
`;

export const NumberCard = styled.Text`
    bottom: 150px;
    text-align: center;
    font-weight: 200;
    font-size: 26px;
    color: #FFFFFF;
    opacity: 0.9;
`;

export const NameDateContainer = styled.View`
    bottom: 100px;
    left: 35px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const NameContainer  = styled.View`
    flex: 1;
`;

export const DateContainer = styled.View`
    flex: 1;
`;

export const Name = styled.Text`
    font-weight: 200;    
    font-size: 20px;
    color: #FFFFFF;
`;

export const Date = styled.Text`
    font-weight: 200;
    font-size: 20px;
    color: #FFFFFF;
`;

export const IconContainer = styled.View`
    bottom: 43px;
`;

export const PlaceNames = styled.Text`
    font-size: 14px;
    color: rgba(134, 152, 168, 1);
    margin-bottom: 3px;
`;

export const FormContainer = styled.View`
    bottom: 45px;
`;

export const InputName = styled.TextInput`
    width: 347px;
    height: 58px;
    border-radius: 8px;
    border-width: 1px;
    border-color: rgba(134, 152, 168, 1);
    background: #fff;
    font-size: 17px;
    padding-left: 10px;
    font-weight: 800;
`;

export const InputNumberCard = styled.TextInput`
    width: 347px;
    height: 58px;
    border-radius: 8px;
    border-width: 1px;
    border-color: rgba(134, 152, 168, 1);
    background: #fff;
    font-size: 17px;
    padding-left: 10px;
    font-weight: 800;
`;

export const DateCodeContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ValDateContainer = styled.View``;

export const CodeContainer = styled.View``;

export const InputValDate = styled.TextInput`
    width: 160px;
    height: 58px;
    border-radius: 8px;
    border-width: 1px;
    border-color: rgba(134, 152, 168, 1);
    background: #fff;
    font-size: 17px;
    padding-left: 10px;
    font-weight: 800;
`;

export const InputCvc = styled.TextInput`
    width: 160px;
    height: 58px;
    border-radius: 8px;
    border-width: 1px;
    border-color: rgba(134, 152, 168, 1);
    background: #fff;
    font-size: 17px;
    padding-left: 10px;
    font-weight: 800;
`;

export const ButtonContainer = styled.View`
    bottom: 40px;
`;