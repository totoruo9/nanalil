import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components/native';
import SButton from './SButton';

interface ITextInput {
    lable?: string;
    placeholder?: string;
    margin?: string;
    typepassword?: boolean;
    errors?: any;
    errorText?: string;
    control: any;
    rules: {};
    name: string;
    confirm?: () => boolean;
}

interface ITextBox {
    smargin?: string;
    confirm?: () => boolean;
}

const Container = styled.View<ITextBox>`
    margin: ${props => props.smargin ? props.smargin : 0};
`;

const Lable = styled.Text`
    font-size: ${props => props.theme.textSize.reguler_14.fontSize};
    line-height: ${props => props.theme.textSize.reguler_14.lineHeight};
    font-weight: ${props => props.theme.textSize.reguler_14.fontWeight};
    color: ${props => props.theme.colorPallet.gray800};
    margin-bottom: 8px;
`;

const TextBox = styled.TextInput<ITextBox>`
    margin: ${props => props.confirm ? '0 16px 0 0' : '0'};
    padding: 0;
    background: ${props => props.theme.colorPallet.gray200};
    font-size: ${props => props.theme.textSize.reguler_18.fontSize};
    line-height: 24px;
    font-weight: ${props => props.theme.textSize.reguler_18.fontWeight};
    color: ${props => props.theme.colorPallet.gray800};
    padding: 16px;
    border-radius: 16px;
    flex:1;
`;

const ErrorText = styled.Text`
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    color: ${props => props.theme.colorPallet.red};
`;

const ControllerContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`;

export default function STextInput ({lable, placeholder, margin, typepassword, errors, errorText, control, rules, name, confirm}:ITextInput) {
    const Render = ({field: {onChange, onBlur, value}}) => (
        <TextBox
            placeholder={placeholder}
            placeholderTextColor={'#C8D2E2'}
            style={{margin:0,padding:0}}
            secureTextEntry={typepassword}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            confirm={confirm}
            autoCapitalize='none'
        />
    );

    return (
        <Container
            smargin={margin}
        >
            {lable && <Lable>{lable}</Lable>}

            <ControllerContainer>
                <Controller
                    control={control}
                    rules={rules}
                    render={Render}
                    name={name}
                />
                {
                    confirm
                        ? <SButton value={'전송'} type='send' onPress={confirm} />
                        : null
                }
            </ControllerContainer>
            
            {(Object.keys(errors).indexOf(name) >= 0)
                ? <ErrorText>{errorText}</ErrorText>
                : <ErrorText> </ErrorText>
            }
        </Container>
    )
}