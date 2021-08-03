import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        text: {
            "primary": "#47585B",
            "secondary": "#FFBA08 ",
            "gray": "#999999"
        },
        background: {
            "primary": "#F5F8FA"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'background.primary',
                color: 'text.primary'
            }
        }
    }
});