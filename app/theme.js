import {colors} from './colors';
export const theme = {
    colors: {
        ...colors
    },
    lightTheme: {
        colors: {
            ...colors.light
        },
        statusBarColor: colors.light.primary,
        headerColor: colors.light.primaryDark,
        background: colors.light.background,
        text: '#ffffff',
        "palette": {
            "background": {
              "main": "#FFFFFF",
              "on": "#000000"
            },
            "error": {
              "main": "#B00020",
              "on": "#FFFFFF"
            },
            "primary": {
              "main": colors.light.primaryDark,
              "on": "#FFFFFF"
            },
            "secondary": {
              "main": "#03DAC6",
              "on": "#000000"
            },
            "surface": {
              "main": "#FFFFFF",
              "on": "#000000"
            }
          },
    },
    darkTheme: {
        colors: {
            ...colors.dark
        },
        statusBarColor: colors.dark.primaryDark,
        headerColor: colors.dark.primary,
        background: colors.dark.background,
        text: '#ffffff',
        "palette": {
            "background": {
              "main": "#FFFFFF",
              "on": "#000000"
            },
            "error": {
              "main": "#B00020",
              "on": "#FFFFFF"
            },
            "primary": {
              "main": colors.dark.primaryDark,
              "on": "#FFFFFF"
            },
            "secondary": {
              "main": "#03DAC6",
              "on": "#000000"
            },
            "surface": {
              "main": "#FFFFFF",
              "on": "#000000"
            }
          },
    }
}