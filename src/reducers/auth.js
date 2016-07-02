import * as actionTypes from '../constants/actionTypes';

const initialtState = {};

export default function (state=initialtState,action) {
    switch (action.type) {
        case actionTypes.ME_SET:
            return setMe(state, action);
    }
    return state;
}

function setMe(state,action) {
    const {user} = action;
    return {...state, user };
}