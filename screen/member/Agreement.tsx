import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;
const NavText = styled.Text``;
const NavInfoText = styled.Text``;
const AgreeBtn = styled.Pressable``;

export default function Agreement(){
    return (
        <Container>
            <NavText>회원가입</NavText>
            <NavInfoText>회원정보</NavInfoText>

            <AgreeBtn>
                <Text>네, 모두 동의합니다.</Text>
            </AgreeBtn>
        </Container>
    )
}