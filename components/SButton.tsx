import React from 'react';
import styled from 'styled-components/native';

interface IButton {
    type?: string;
    onPress: () => void;
    value: string;
}

interface IPressable {
    type: string;
}

const Pressable = styled.Pressable<IPressable>`
    /* width: 100%; */
    background: ${props => {
        switch(props.type) {
            case 'send':
                return props.theme.colorPallet.deepblue;
            case 'small':
                return props.theme.colorPallet.gray300;
            default :
                return props.theme.colorPallet.deepblue;
                break;
        }
        
    }};
    border-radius: ${props => {
        switch(props.type) {
            case 'send' :
                return '16px';
            case 'small':
                return '4px';
            default :
                return '100px';
                break;
        }
    }};
`;
const Text = styled.Text<IPressable>`
    text-align: center;
    color: ${props => {
        switch(props.type) {
            case 'send':
                return props.theme.colorPallet.white;
            case 'small':
                return props.theme.colorPallet.gray800;
            default :
                return props.theme.colorPallet.white;
                break;
        }
    }};
    font-size: ${props => {
        switch(props.type) {
            case 'send': 
                return props.theme.textSize.reguler_18.fontSize;
            case 'small':
                return props.theme.textSize.reguler_14.fontSize;
            default :
                return props.theme.textSize.buttonText.fontSize;
                break;
        }
    }};
    font-weight: ${props => props.theme.textSize.buttonText.fontWeight};
    line-height: ${props => {
        switch(props.type) {
            case 'send':
                return props.theme.textSize.reguler_18.lineHeight;
            case 'small':
                return props.theme.textSize.reguler_14.lineHeight;
                break;
            default :
                return props.theme.textSize.buttonText.lineHeight;
                break;
        }
    }};
    padding: ${props => {
        switch(props.type) {
            case 'send':
                return '16px 24px';
            case 'small':
                return '8px 16px';
                break;
            default :
                return '16px';
                break;
        }
    }};
`;

export default function SButton({value, onPress, type='default'}:IButton) {
    return (
        <Pressable
            onPress={onPress}
            type={type}
        >
            <Text type={type}>
                {value}
            </Text>
        </Pressable>
    )
}