type InitialStateType = typeof initState

const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading}
        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
