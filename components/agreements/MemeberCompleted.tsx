import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex:1;
`;

export default function MemberCompleted () {
    return (
        <Container>
            <Text>
                MemberCompleted
            </Text>
        </Container>
    )
}