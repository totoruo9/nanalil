import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, FlatList, Text, TextInput, useWindowDimensions, View, ScrollView, Pressable } from 'react-native';
import { useRecoilState } from 'recoil';
import styled from 'styled-components/native';
import { agreementState } from '../../atom';
import STextInput from '../STextInput';

interface ISubmitBtn {
    swidth: number;
}

const Container = styled.View`
    flex:1;
`;

const SubmitArea = styled.View`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
`;

const SubmitBtn = styled.Pressable<ISubmitBtn>`
    width: ${props => (props.swidth/2) -5 -16}px;
    background: ${props => props.theme.colorPallet.deepblue};
    border-radius: 100px;
    margin-right: 10px;
`;
const SubmitText = styled.Text`
    text-align: center;
    color: ${props => props.theme.colorPallet.white};
    font-size: ${props => props.theme.textSize.buttonText.fontSize};
    font-weight: ${props => props.theme.textSize.buttonText.fontWeight};
    line-height: ${props => props.theme.textSize.buttonText.lineHeight};
    padding: 16px;
`;
const EmailBox = styled.TextInput`
    background: ${props => props.theme.colorPallet.gray200};
`;

// const STextInput = styled.TextInput`
//     margin: 0;
//     padding: 0;
//     background: ${props => props.theme.colorPallet.gray200};
//     font-size: ${props => props.theme.textSize.reguler_18.fontSize};
//     line-height: 24px;
//     font-weight: ${props => props.theme.textSize.reguler_18.fontWeight};
//     color: ${props => props.theme.colorPallet.gray800};
//     padding: 16px;
//     border-radius: 16px;
// `;

export default function UserInfo () {
    const {width, height} = useWindowDimensions();
    const [agreeState, setAgreeState] = useRecoilState(agreementState);
    const {control, handleSubmit, formState: {errors, touchedFields}} = useForm({
        defaultValues: {
            email: '',
            password: '',
            passwordre: '',
            phone: '',
            name: '',
            sex:'',
            birth:''
        }
    });
    const [checkPassword, SetCheckPassword] = useState('');
    const [selectSex, setSelectSex] = useState('man');

    const onPrev = () => {
        setAgreeState(prev => prev = 'agree');
    };

    const onNext = () => {
        setAgreeState(prev => prev = 'completed');
    };

    const onSubmit = data => console.log(data);

    return (
        <Container>
            <Text>UserInfo</Text>

            <ScrollView>
            <STextInput
                control={control}
                lable='이메일'
                name='email'
                rules={{
                    required: true
                }}
                placeholder='이메일을 입력해주세요.'
                errors={errors}
                errorText='이메일을 입력해주세요.'
                margin='40px 0 0 0'
            />

            <STextInput
                control={control}
                lable='비밀번호'
                name='password'
                rules={{
                    required: true,
                    validate: (data) => {
                        SetCheckPassword(data);
                        return true;
                    }
                }}
                placeholder='비밀번호를 입력해주세요.'
                errors={errors}
                errorText='비밀번호를 입력해주세요.'
                typepassword={true}
                margin='40px 0 0 0'
            />

            <STextInput
                control={control}
                lable='비밀번호 확인'
                name='passwordre'
                rules={{
                    required: true,
                    validate: (data) => {
                        return data === checkPassword;
                    }
                }}
                placeholder='비밀번호를 다시 입력해주세요.'
                errors={errors}
                errorText='비밀번호를 다시 입력해주세요.'
                typepassword={true}
                margin='40px 0 0 0'
            />

            <STextInput
                control={control}
                lable='이름'
                name='name'
                rules={{
                    required: true
                }}
                placeholder='이름을 입력해주세요.'
                errors={errors}
                errorText='이름을 입력해주세요.'
                margin='40px 0 0 0'
            />

            <STextInput
                control={control}
                lable='이름'
                name='name'
                rules={{
                    required: true
                }}
                placeholder='이름을 입력해주세요.'
                errors={errors}
                errorText='이름을 입력해주세요.'
                margin='40px 0 0 0'
            />

            <View>
                <Text>성별</Text>
                <Pressable><Text>남성</Text></Pressable>
                <Pressable><Text>여성</Text></Pressable>
                <Picker
                    selectedValue={selectSex}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectSex(itemValue)
                    }
                >
                    <Picker.Item label='test1' value='text1' />
                    <Picker.Item label='test2' value='text2' />
                </Picker>
            </View>

            <Button title='전송' onPress={handleSubmit(onSubmit)} />
            </ScrollView>

            <SubmitArea>
                <SubmitBtn
                    swidth={width}
                    onPress={onPrev}
                >
                    <SubmitText>이전으로</SubmitText>
                </SubmitBtn>
                <SubmitBtn
                    swidth={width}
                    onPress={handleSubmit(onSubmit)}
                >
                    <SubmitText>다음으로</SubmitText>
                </SubmitBtn>
            </SubmitArea>
        </Container>
    )
}