import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendSignInLinkToEmail, signInWithEmailAndPassword } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, FlatList, Text, TextInput, useWindowDimensions, View, Pressable } from 'react-native';
import { useRecoilState } from 'recoil';
import styled from 'styled-components/native';
import { agreementState } from '../../atom';
import { fireStoreDB } from '../../firebaseConfig';
import SButton from '../SButton';
import STextInput from '../STextInput';

interface ISubmitBtn {
    swidth: number;
};

interface IDummy {
    show: boolean;
}

const Container = styled.SafeAreaView`
    flex:1;
    margin: 16px 16px 32px 16px;
`;

const ScrollView = styled.ScrollView`
    margin-bottom: 72px;
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

const SPicker = styled(Picker)`
    z-index: 200;
    width:100%;
`;

const BirthContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0 40px;
`;

const Lable = styled.Text`
    color: ${props => props.theme.colorPallet.gray800};
`;

const DummyContainer = styled.View<IDummy>`
    position: absolute;
    width: 100%;
    height: 100%;
    flex:1;
    z-index: 100;
    display: ${props => props.show ? 'flex' : 'none'};
`;

const Dummy = styled.View`
    background: rgba(0,0,0,.8);
    width: 100%;
    height: 100%;
`;

const GenderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 40px;
`;

const GenderArea = styled.View`
    position: absolute;
    bottom:0;
    width: 100%;
    z-index:100;
    background: #fff;
    padding:0 16px 32px 16px;
    border-radius: 16px;
`;



const dateFormat = (date) => {
    let selectDate;
    if(typeof date === 'number') {
        selectDate = new Date(date);
        return `${selectDate.getFullYear()}. ${selectDate.getMonth()+1}. ${selectDate.getDate()}`
    } else if (typeof date === 'object') {
        selectDate = date;
        return `${selectDate.getFullYear()}. ${selectDate.getMonth()+1}. ${selectDate.getDate()}`
    }
}

export default function UserInfo () {
    const {width, height} = useWindowDimensions();
    const [agreeState, setAgreeState] = useRecoilState(agreementState);
    const {control, handleSubmit, formState: {errors, touchedFields}} = useForm({
        defaultValues: {
            email: '',
            password: '',
            passwordre: '',
            name: '',
            gender:'',
            birth:''
        }
    });
    const pickerRef = useRef();
    const [selectBirth, setSelectBirth] = useState(new Date());
    const [checkPassword, SetCheckPassword] = useState('');
    const [selectGender, setSelectGender] = useState('남성');
    const [dummyState, setDummyState] = useState(false);
    const [selectDummy, setSelectDummy] = useState('');
    const userID = useRef('');

    const auth = getAuth();
    const db = fireStoreDB;

    

    const onChangeDate = (event: DateTimePickerEvent, date: Date) => {
        const {
            type,
            nativeEvent: {timestamp}
        } = event;
        const selectDate = new Date(timestamp);
        setSelectBirth(new Date(timestamp));
    }

    const onSelectGender = () => {
        setDummyState(true);
        setSelectDummy('gender');
        console.log(selectDummy);
    };

    const onConfirmDummy = () => {
        setDummyState(false);
        setSelectDummy('');
    }

    const onSelectBirth = () => {
        setDummyState(true);
        setSelectDummy('birth');
        console.log(selectDummy);
    }

    // const actionCodeSettings = {
    //     url: 'https://nanalil.firebaseapp.com',
    //     iOS: {
    //       bundleId: 'com.example.ios'
    //     },
    //     android: {
    //       packageName: 'com.example.android',
    //       installApp: true,
    //       minimumVersion: '12'
    //     },
    //     handleCodeInApp: true,
    //     // When multiple custom dynamic link domains are defined, specify which
    //     // one to use.
    //     dynamicLinkDomain: "example.page.link"
    // };

    // const sendEmail = async() => {
    //     console.log('send');
    //     const auth = await getAuth();
    //     const email = 'wlsgurrla10@naver.com';
    //     const password = '*TOto946978';

    //     await signInWithEmailAndPassword(auth, email, password)
    //         .then(() => {console.log('login')})
    //         .catch((error) => {console.log('error')});

    //     await sendEmailVerification(auth.currentUser)
    //         .then(() => {console.log('sucess')})
    //         .catch(error => {console.log(`error : ${error.message} / ${error.code}`)})
    //     return true
    // };

    const CreateUser = async (data) => {
        let userid = '';
        await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                userID.current = user.uid;
                console.log(`create : ${user.uid}`);
            })
            .catch(({code, message}) => {
                console.log(code, message);
            });
        console.log(`createAdd : ${userID}`);
        console.log(`createAdd2 : ${userID.current}`);

    }

    const UserStore = async ({email, name, gender, birth}) => {
        console.log(`store : ${userID}`);
        await setDoc(doc(db, 'users', userID.current), {
            name,
            email,
            gender,
            birth,
            confirm: false,
        });
    };

    const onPrev = () => {
        setAgreeState(prev => prev = 0);
    };

    const onSubmit = async (data) => {
        data.birth = dateFormat(selectBirth);
        data.gender = selectGender;

        await CreateUser(data);
        await UserStore(data);
        setAgreeState(prev => prev = 2);
        console.log(data);
    };

    const GenderDom = () => (
        <SPicker
            ref={pickerRef}
            selectedValue={selectGender}
            onValueChange={(itemValue: string, itemIndex) =>
                setSelectGender(itemValue)
            }
        >
            <Picker.Item label='여성' value='여성' />
            <Picker.Item label='남성' value='남성' />
            <Picker.Item label='선택안함' value='선택안함' />
        </SPicker>
    );

    const BirthDom = () => (
        <RNDateTimePicker
            value={selectBirth}
            display={'spinner'}
            mode={'date'}
            onChange={onChangeDate}
        />
    );

    return (
        <>
        <DummyContainer show={dummyState}>
            <GenderArea>
                {selectDummy === 'gender' && <GenderDom />}
                {selectDummy === 'birth' && <BirthDom />}
                <SButton value={'확인'} onPress={onConfirmDummy} />
            </GenderArea>
            <Dummy onTouchEnd={() => {setDummyState(prev => !prev)}}></Dummy>
        </DummyContainer>
        <Container>
            <Text>UserInfo</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                
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
                    // confirm={sendEmail}
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

                <GenderContainer>
                    <Lable>성별</Lable>
                    <SButton value={selectGender} onPress={onSelectGender} type={'small'} />
                </GenderContainer>
                
                <BirthContainer>
                    <Lable>생년월일</Lable>
                    <SButton value={dateFormat(selectBirth)} onPress={onSelectBirth} type='small' />
                </BirthContainer>
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
                    <SubmitText>가입완료</SubmitText>
                </SubmitBtn>
            </SubmitArea>
        </Container>
        </>
    )
}