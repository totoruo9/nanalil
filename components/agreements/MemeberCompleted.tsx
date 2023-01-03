import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import SButton from '../SButton';

const Container = styled.SafeAreaView`
    flex:1;
    margin: 16px 16px 32px 16px;
`;

const ButtonContainer = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
`;



export default function MemberCompleted ({navigation}) {
    const onPress = () => {
        navigation.navigate('BottomNav', {screen: 'home'});
    };

    return (
        <Container>
            <Text>
                MemberCompleted
            </Text>
            <ButtonContainer>
                <SButton
                    value='확인'
                    onPress={onPress}
                />
            </ButtonContainer>
        </Container>
    )
}