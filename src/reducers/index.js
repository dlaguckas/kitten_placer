import { combineReducers } from 'redux';
import { KITTENS_FETCH_SUCCESS, KITTENS_CREATE_SUCCESS, SELECT_KITTEN } from '../actions/types';

const INITIAL_STATE = {
    kittens: null,
    visibleKittens: null,
    selectedKitten: '',
    loading: true,
    listLength: 30
};

export default combineReducers({
    kitten: (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case KITTENS_CREATE_SUCCESS:
                return {...state, kittens: action.payload, loading: false};
            case KITTENS_FETCH_SUCCESS:
                return {...state, visibleKittens: action.payload, listLength: action.listLength, loading: false};
            case SELECT_KITTEN:
                return {...state, selectedKitten: action.payload};

            default:
                return state;
        }
    }
})