type InitialStateType = typeof initState

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeActionType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any

type ThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}