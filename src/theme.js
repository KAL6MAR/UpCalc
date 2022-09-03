import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    shadows: ['none'],
    palette: {
        primary: {
            main: '#00A0FF',
            contrastText: '#FFF',
        },
        secondary: {
            main: '#FFF',
        },
    },
    typography: {
        button: {
            textTransform: 'none',
            fontWeight: 400,
        },
    },
});
