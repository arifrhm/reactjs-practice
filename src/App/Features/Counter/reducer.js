import * as counter from './constants';

let initialState = {
    count: 0
}

export const CounterReducer = (state = initialState, action) => {
    switch(action.type) {
        case counter.INC:
            return {
                ...state,
                count: state.count + action.value
            }
        case counter.DEC:
            return {
                count: state.count - action.value
            }
        default:
            return state
    }
}