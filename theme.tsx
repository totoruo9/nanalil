// export interface ColorTheme {
//     colorPallet: {
//         white: string;
//         gray100: string;
//         gray200: string;
//         gray300: string;
//         gray400: string;
//         gray600: string;
//         gray700: string;
//         gray800: string;
//         gray900: string;
//         deepblue: string;
//         blue: string;
//         green: string;
//         orange: string;
//         red: string;
//     },
//     textSize: {
//         reguler_14: {
//             fontSize: string;
//             lineHeight: string;
//             fontWeight: number;
//         },
//         reguler_18: {
//             fontSize: string;
//             lineHeight: string;
//             fontWeight: 500
//         },
//         reguler_28: {
//             fontSize: string;
//             lineHeight: string;
//             fontWeight: number;
//         },
//         reguler_36: {
//             fontSize: string;
//             lineHeight: string;
//             fontWeight: number;
//         },
//         bold_28: {
//             fontSize: string;
//             lineHeight: string;
//             fontWeight: number;
//         },
//         bold_36: {
//             fontSize: string;
//             lineHeight: string;
//             fontWeight: number;
//         },
//         buttonText: {
//             fontSize: string;
//             lineHeight: string;
//             fontWeight: number;
//         }
//     }
// }

import { DefaultTheme } from "styled-components"


export const lightTheme: DefaultTheme = {
    colorPallet: {
        white: '#fff',
        gray100: '#F8F9FF',
        gray200:'#E9EDF0',
        gray300:'#C8D2E2',
        gray400:'#B9C4D6',
        gray600:'#8E8E9B',
        gray700:'#5D606C',
        gray800:'#3D4153',
        gray900:'#1D1D1D',
        deepblue:'#45528B',
        blue:'#44BBFF',
        green:'#A1D88E',
        orange:'#FBA474',
        red:'#FF6F66',
    },
    textSize: {
        reguler_14: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 500
        },
        reguler_18: {
            fontSize: '18px',
            lineHeight: '32px',
            fontWeight: 500
        },
        reguler_28: {
            fontSize: '28px',
            lineHeight: '44px',
            fontWeight: 500
        },
        reguler_36: {
            fontSize: '36px',
            lineHeight: '56px',
            fontWeight: 500
        },
        bold_28: {
            fontSize: '28px',
            lineHeight: '44px',
            fontWeight: 800
        },
        bold_36: {
            fontSize: '36px',
            lineHeight: '56px',
            fontWeight: 800
        },
        buttonText: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 800
        }
    }
}

export const darkTheme: DefaultTheme = {
    colorPallet: {
        white: '#fff',
        gray100: '#F8F9FF',
        gray200:'#E9EDF0',
        gray300:'#C8D2E2',
        gray400:'#B9C4D6',
        gray600:'#8E8E9B',
        gray700:'#5D606C',
        gray800:'#3D4153',
        gray900:'#1D1D1D',
        deepblue:'#45528B',
        blue:'#44BBFF',
        green:'#A1D88E',
        orange:'#FBA474',
        red:'#FF6F66',
    },
    textSize: {
        reguler_14: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 500
        },
        reguler_18: {
            fontSize: '18px',
            lineHeight: '32px',
            fontWeight: 500
        },
        reguler_28: {
            fontSize: '28px',
            lineHeight: '44px',
            fontWeight: 500
        },
        reguler_36: {
            fontSize: '36px',
            lineHeight: '56px',
            fontWeight: 500
        },
        bold_28: {
            fontSize: '28px',
            lineHeight: '44px',
            fontWeight: 800
        },
        bold_36: {
            fontSize: '36px',
            lineHeight: '56px',
            fontWeight: 800
        },
        buttonText: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 800
        }
    }
}