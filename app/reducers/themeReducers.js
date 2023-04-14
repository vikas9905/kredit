/*eslint-disable*/
import {useTheme} from '@react-navigation/native';
import {DARK_THEME,LIGHT_THEME} from '../actions/actionTypes';
import {theme} from '../theme';
const initialState = {
    theme:{
        ...theme.lightTheme
    },
    colors:{
        ...theme.lightTheme.colors
    }
}

export const themeReducers = (state = initialState, action) => {
    // console.log("in theme reducers",state)
    switch(action.type){
        case DARK_THEME:
            return {
                colors: theme.colors.dark,
                theme: theme.darkTheme
            }
            break;
        case LIGHT_THEME:
            return {
                colors: theme.colors.light,
                theme: theme.lightTheme
            }
            break;
        default:
            return {
                ...state
            }
    }
}