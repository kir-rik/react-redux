import {
    GET_REPOS_REQUEST,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAIL,
} from '../constants/ReposTable'

const initialState = {
    repos: [],
    fetching: false
}

export default function repos(state = initialState, action) {
    switch (action.type) {
        case GET_REPOS_REQUEST:
            return { ...state, user: action.pyload, fetching: true, error: '' }

        case GET_REPOS_SUCCESS:
            return { ...state, repos: action.payload, fetching: false, error: '' }

        case GET_REPOS_FAIL:
            return { ...state, repos: [], error: action.payload, fetching: false }

        default:
            return state;
    }
}