import axios from 'axios';
import {
    GET_REPOS_REQUEST,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAIL,
} from '../constants/reposTable';

export function getRepos(user) {
    return (dispatch) => {
        dispatch({
            type: GET_REPOS_REQUEST,
            payload: user,
        });

        axios.get(`https://api.github.com/users/${user}/repos`)
            .then((response) => {
                const result = response.data.map(_ => ({
                    name: _.name,
                    language: _.language,
                    description: _.description,
                }));
                dispatch({
                    type: GET_REPOS_SUCCESS,
                    payload: result,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_REPOS_FAIL,
                    error: true,
                    payload: new Error(error),
                });
            });
    };
}
