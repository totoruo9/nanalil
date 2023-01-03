import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Calender from '../components/calender';

const Container = styled.SafeAreaView`
    
`;

export default function Home ({navigation: {navigator}}) {
    return(
        <Container>
            <Calender />
        </Container>
    )
}