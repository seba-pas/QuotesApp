const initialState = {
    quotes: []
}




export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_QUOTES':
            return {
                ...state,
                quotes: action.payload
            }

        default:
            return {
                ...state
            }
        }
    }