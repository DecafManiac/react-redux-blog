import { AUTHENTICATE } from '../actions/index';

const INITIAL_STATE = false;

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case AUTHENTICATE:
            return action.payload
        default:
            return state;
    }
}
