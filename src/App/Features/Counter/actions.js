import * as counter from './constant';

export const increment = (value) => {
    return {
        type: counter.INC,
        value: value
    }
}

export const decrement = (value) => {
    return {
        type: counter.DEC,
        value: value
    }
}

export const decrementWithChekingAction = (value) => {
    return(dispatch, getState) => {
        if(getState().counter.count > 0) {
            dispatch(decrement(value));
        }
    }
}