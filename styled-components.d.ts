import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colorPallet: {
            white: string;
            gray100: string;
            gray200: string;
            gray300: string;
            gray400: string;
            gray600: string;
            gray700: string;
            gray800: string;
            gray900: string;
            deepblue: string;
            blue: string;
            green: string;
            orange: string;
            red: string;
        },
        textSize: {
            reguler_14: {
                fontSize: string;
                lineHeight: string;
                fontWeight: number;
            },
            reguler_18: {
                fontSize: string;
                lineHeight: string;
                fontWeight: 500
            },
            reguler_28: {
                fontSize: string;
                lineHeight: string;
                fontWeight: number;
            },
            reguler_36: {
                fontSize: string;
                lineHeight: string;
                fontWeight: number;
            },
            bold_28: {
                fontSize: string;
                lineHeight: string;
                fontWeight: number;
            },
            bold_36: {
                fontSize: string;
                lineHeight: string;
                fontWeight: number;
            },
            buttonText: {
                fontSize: string;
                lineHeight: string;
                fontWeight: number;
            }
        }
    }
}