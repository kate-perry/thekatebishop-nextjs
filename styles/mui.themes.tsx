import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { palette } from '../utils/constants';

export const navTheme = responsiveFontSizes(createTheme({
  typography: {
    h5: {
      fontFamily: [
        'Aboreto',
      ].join(','),
      color: palette.primary
    },
    h6: {
      fontFamily: [
        'Montserrat',
      ].join(','),
      fontSize: '1rem',
      color: palette.primary
    }
  },
}));

export const headerTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
    h1: {
      fontFamily: [
        'Aboreto',
      ].join(','),
      color: palette.primary,
      fontSize: '8rem',
      margin: 0,
      lineHeight: .75,
      '@media (max-width:480px)': {
        fontSize: '3rem'
      },
    },
    h2: {
      color: palette.primary,
      fontSize: '1rem',
      fontWeight: 200,
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    h3: {
      color: palette.primary,
      fontSize: '1rem',
      fontWeight: 300,
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
  },
}));

export const aboutTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
    h1: {
      fontFamily: [
        'Aboreto',
      ].join(','),
      color: palette.primary,
      fontSize: '4rem',
      '@media (max-width:480px)': {
        fontSize: '2.5rem'
      },
    },
    h2: {
      fontFamily: [
        'Aboreto',
      ].join(','),
      color: palette.secondary,
      fontSize: '1.5rem',
      fontWeight: 300,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    subtitle1: {
      color: palette.primary,
      fontSize: '1rem',
      fontWeight: 300,
      margin: 0,
    },
  },
}));

export const portfolioTheme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: palette.quaternary
    },
    secondary: {
      main: palette.primary
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
    h1: {
      fontFamily: [
        'Aboreto',
      ].join(','),
      color: palette.primary,
      fontSize: '4rem',
      '@media (max-width:480px)': {
        fontSize: '2.5rem'
      },
    },
    h2: {
      color: palette.primary,
      fontSize: '1.5rem',
      fontWeight: 300,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    h3: {
      color: palette.primary,
      fontSize: '1.5rem',
      fontWeight: 200,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    subtitle1: {
      color: palette.primary,
      fontSize: '1rem',
      fontWeight: 300,
      margin: 0,
    },
    subtitle2: {
      color: palette.primary,
      fontSize: '1rem',
      fontWeight: 200,
      margin: 0,
    },
  },
}));

export const portfolioPageTheme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: palette.secondary
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
    h1: {
      fontFamily: [
        'Aboreto',
      ].join(','),
      color: palette.primary,
      fontSize: '4rem',
      '@media (max-width:480px)': {
        fontSize: '2.5rem'
      },
    },
    h2: {
      color: palette.primary,
      fontSize: '1.5rem',
      fontWeight: 300,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
  },
}));
