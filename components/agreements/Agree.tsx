import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { FlatList, Text, useWindowDimensions, View } from 'react-native';
import { useRecoilState } from 'recoil';
import styled from 'styled-components/native';
import { agreementState } from '../../atom';

const PRIVATE_TEXT = `
< 나날일 >('nanalil.com'이하 'nanal-il')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.

○ 이 개인정보처리방침은 2022년 1월 1부터 적용됩니다.

제1조(개인정보의 처리 목적)

< 나날일 >('nanalil.com'이하 'nanal-il')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
`;

const SERVICE_TEXT = `
제1장 총칙

제1조(목적) 이 약관은 회사가 온라인으로 제공하는 디지털콘텐츠(이하 "콘텐츠"라고 한다) 및 제반서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다. 
 제2조(정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.   
1. "회사"라 함은 "콘텐츠" 산업과 관련된 경제활동을 영위하는 자로서 콘텐츠 및 제반서비스를 제공하는 자를 말합니다. 

2. "이용자"라 함은 "회사"의 사이트에 접속하여 이 약관에 따라 "회사"가 제공하는 "콘텐츠" 및 제반서비스를 이용하는 회원 및 비회원을 말합니다. 

3. "회원"이라 함은 "회사"와 이용계약을 체결하고 "이용자" 아이디(ID)를 부여받은 "이용자"로서 "회사"의 정보를 지속적으로 제공받으며 "회사"가 제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다. 

4. "비회원"이라 함은 "회원"이 아니면서 "회사"가 제공하는 서비스를 이용하는 자를 말합니다. 

5. "콘텐츠"라 함은 정보통신망이용촉진 및 정보보호 등에 관한 법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는 부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료 또는 정보로서, 그 보존 및 이용에 있어서 효용을 높일 수 있도록 전자적 형태로 제작 또는 처리된 것을 말합니다. 

6. "아이디(ID)"라 함은 "회원"의 식별과 서비스이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자 또는 숫자의 조합을 말합니다. 

7. "비밀번호(PASSWORD)"라 함은 "회원"이 부여받은 "아이디"와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자의 조합을 말합니다. 

 제3조(신원정보 등의 제공) "회사"는 이 약관의 내용, 상호, 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호 및 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 온라인 서비스초기화면에 게시합니다. 다만, 약관은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다. 
 제4조(약관의 게시 등)   ① "회사"는 이 약관을 "회원"이 그 전부를 인쇄할 수 있고 거래과정에서 해당 약관의 내용을 확인할 수 있도록 기술적 조치를 취합니다. 
② "회사"는 "이용자"가 "회사"와 이 약관의 내용에 관하여 질의 및 응답할 수 있도록 기술적 장치를 설치합니다. 

③ "회사"는 "이용자"가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 환불조건 등과 같은 중요한 내용을 이용자가 쉽게 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 "이용자"의 확인을 구합니다. 

 제5조(약관의 개정 등)   ① "회사"는 온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. 
② "회사"가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스초기화면에 그 적용일자 7일 이전부터 적용일 후 상당한 기간동안 공지하고, 기존회원에게는 개정약관을 전자우편주소로 발송합니다. 

③ "회사"가 약관을 개정할 경우에는 개정약관 공지 후 개정약관의 적용에 대한 "이용자"의 동의 여부를 확인합니다. "이용자"가 개정약관의 적용에 동의하지 않는 경우 "회사" 또는 "이용자"는 콘텐츠 이용계약을 해지할 수 있습니다. 이때, "회사"는 계약해지로 인하여 "이용자"가 입은 손해를 배상합니다. 

 제6조(약관의 해석) 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 문화체육관광부장관이 정하는 디지털콘텐츠이용자보호지침, 기타 관계법령 또는 상관례에 따릅니다. 
`;

interface ISubmitBtn {
    swidth: number;
    
}

const Container = styled.SafeAreaView`
    flex:1;
    margin: 16px 16px 32px 16px;
`;
const NavText = styled.Text``;
const NavInfoText = styled.Text``;
const AgreeBtn = styled.Pressable``;
const CheckArea = styled.View``;
const CheckText = styled.Text``;
const SubmitBtn = styled.Pressable<ISubmitBtn>`
    position: absolute;
    bottom: 0;
    width: 100%;
    background: ${props => props.theme.colorPallet.deepblue};
    border-radius: 100px;
`;
const SubmitText = styled.Text`
    text-align: center;
    color: ${props => props.theme.colorPallet.white};
    font-size: ${props => props.theme.textSize.buttonText.fontSize};
    font-weight: ${props => props.theme.textSize.buttonText.fontWeight};
    line-height: ${props => props.theme.textSize.buttonText.lineHeight};
    padding: 16px;
`;

const ServiceCheckbox = styled(Checkbox)`
    border-width:0;
    width: 32px;
    height: 32px;
`;


const onAgree = () => {
    console.log('agreement');
}

const serviceData = [
    {
        text: SERVICE_TEXT
    }
]

const privateData = [{
    text: PRIVATE_TEXT
}]

const renderItem = ({item}) => (
    <View>
        <Text>
            {item.text}
        </Text>
    </View>
)


export default function Agree () {
    const {width, height} = useWindowDimensions();
    const [serviceCheck, setServiceCheck] = useState(false);
    const [agreeState, setAgreeState] = useRecoilState(agreementState);

    const onServiceCheck = () => {
        setServiceCheck(prev => !prev);
    }

    const onPress = () => {
        setAgreeState(1)
    }

    return (
        <Container>
            <NavText>회원가입</NavText>
            <NavInfoText>회원정보</NavInfoText>

            <AgreeBtn onPress={onAgree}>
                <Text>네, 모두 동의합니다.</Text>
            </AgreeBtn>

            <CheckArea>
                <CheckText>개인 정보 보호 정책 (필수)</CheckText>
                <FlatList
                    data={privateData}
                    renderItem={renderItem}
                />
            </CheckArea>

            <CheckArea>
                <ServiceCheckbox
                    value={serviceCheck}
                    onValueChange={onServiceCheck}
                />
                <CheckText>서비스 이용약관 (필수)</CheckText>
                <FlatList
                    data={serviceData}
                    renderItem={renderItem}
                />
            </CheckArea>

            <SubmitBtn
                swidth={width}
                onPress={onPress}
            >
                <SubmitText>다음으로</SubmitText>
            </SubmitBtn>
        </Container>
    )
}