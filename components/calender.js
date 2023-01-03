import React from "react";
import { useWindowDimensions } from "react-native";
import { useRecoilValue } from "recoil";
import styled from "styled-components/native";
import { RCMonth } from "../atom";

const CalenderContainer = styled.View`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(61, 65, 83, 0.05);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 16px 16px 20px 16px;
`;

const SYearMonthContainer = styled.View`
    padding: 20px 0 16px;
`;

const SYear = styled.Text`
    font-size: ${props => props.theme.textSize.reguler_18.fontSize};
    line-height: ${props => props.theme.textSize.reguler_18.lineHeight};
    color: ${props => props.theme.colorPallet.deepblue};
`;

const SMonth = styled.Text`
    font-size: ${props => props.theme.textSize.bold_36.fontSize};
    line-height: 40px;
    font-weight: ${props => props.theme.textSize.bold_36.fontWeight};
    color: ${props => props.theme.colorPallet.gray800};
`;

const SDayContainer = styled.View`
    flex-direction: row;
`;

const SDayItem = styled.View`
    width: ${props => props.swidth}px;
    padding: 12px 16px 8px;
`;

const SDayText = styled.Text`
    color: ${props => props.theme.colorPallet.gray800};
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    font-weight: 800;
`;

const SDateContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

const SDateItem = styled.View`
    width: ${props => props.swidth}px;
    align-items: center;
    margin: 4px 0 8px 0;
`;

const SDateText = styled.Text`
    color: ${props => (
        props.curMonth
            ? props.theme.colorPallet.deepblue
            : '#ddd'
    )};
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
`;

const Emotion = styled.View`
    width: 32px;
    height: 32px;
    background: yellow;
    margin-top: 4px;
`;

const Dot = styled.View`
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: ${props => props.theme.colorPallet.deepblue};
    margin-bottom:4px;
`;

const WeekArray = ['일', '월', '화', '수', '목', '금', '토'];

export default function Calender() {
    const calender = useRecoilValue(RCMonth);
    const {width, height} = useWindowDimensions();

    return (
        <CalenderContainer>
            <SYearMonthContainer>
                <SYear>{calender.year}</SYear>
                <SMonth>{calender.month+1 < 10 ? `0${calender.month+1}` : calender.month+1}월</SMonth>
            </SYearMonthContainer>
            <SDayContainer>
            {
                WeekArray.map((item, index) => (
                    <SDayItem key={index} swidth={(width-32)/7}>
                        <SDayText>{item}</SDayText>
                    </SDayItem>
                ))
            }
            </SDayContainer>

            <SDateContainer>
            {
                calender?.calenderArray?.map((item, index) => (
                    <SDateItem key={index} swidth={(width-32)/7}>
                        <Dot></Dot>
                        <SDateText
                            // onPress={() => setSelectDate(item)}
                            // curSelect={item === selectDate}
                            // curDate={item === calender.today}
                            curMonth={new Date(item).getMonth() === calender.month}
                        >
                            {new Date(item).getDate()}
                        </SDateText>
                        <Emotion></Emotion>
                    </SDateItem>
                ))
            }
            </SDateContainer>
        </CalenderContainer>
    )
}