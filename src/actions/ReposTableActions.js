import {
    GET_REPOS_REQUEST,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAIL,
} from '../constants/ReposTable'

import axios from 'axios'


export function getRepos(user) {

    return (dispatch) => {
        dispatch({
            type: GET_REPOS_REQUEST,
            payload: user
        })

        try {
            axios.get(`https://api.github.com/users/${user}/repos`)
            .then(function (response) {
                const result = response.data.map ( _ => ( {
                    name: _.name,
                    language: _.language,
                    description: _.description
                })); 
                dispatch({
                    type: GET_REPOS_SUCCESS,
                    payload: result
                });
            })
            .catch(function (error) {
                dispatchFail(dispatch, error);
            });
        }  catch(error) {
            dispatchFail(dispatch, error);
        }
        
    }
}

function dispatchFail(dispatch, error){
    dispatch({
        type: GET_REPOS_FAIL,
        error: true,
        payload: new Error(error)
    })
}
