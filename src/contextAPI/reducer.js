export const initialState = {
    user: null
}

const reducer = (action, state) => {
    console.log(action)
    switch (action.type) {
        case 'LOGIN':
            return { state }
        case 'LOGOUT':
            return { state }

        default:
            return state
    }
}

export default reducer;