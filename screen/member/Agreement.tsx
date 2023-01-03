import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, Text, FlatList, useWindowDimensions, TextInput } from "react-native";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { agreementState } from "../../atom";
import Agree from "../../components/agreements/Agree";
import MemberCompleted from "../../components/agreements/MemeberCompleted";
import UserInfo from "../../components/agreements/UserInfo";

const Container = styled.View`
    flex:1;
`;

export default function Agreement({navigation}): JSX.Element {
    const [agreeState, setAgreeState] = useRecoilState(agreementState);

    return (
        <Container>
            {/* <FlatList
                data={[{id:'1'}]}
                renderItem={(item) =>
                    agreeState === 'agree'
                        ? <Agree />
                        : agreeState === 'userInfo'
                        ? <UserInfo />
                        : <MemberCompleted />
                }
                keyExtractor={(item) => item.id}
            /> */}
            {
                agreeState === 0
                    ? <Agree />
                    : agreeState === 1
                    ? <UserInfo />
                    : <MemberCompleted navigation={navigation} />
            }
        </Container>
    )
}