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

        // dispatch({
        //     type: GET_REPOS_SUCCESS,
        //     payload: [
        //         {
        //             name: 'react-redux',
        //             language: 'JavaScript',
        //             description: 'repo1 JavaScript',
        //             size: 320,
        //         },
        //         {
        //             name: 'repo2',
        //             language: 'JavaScript',
        //             description: 'repo1 JavaScript',
        //             size: 0,
        //         },
        //         {
        //             name: 'repo3',
        //             language: 'JavaScript',
        //             description: 'repo1 JavaScript',
        //             size: 100,
        //         },
        //         {
        //             name: 'repo4',
        //             language: 'JavaScript',
        //             description: 'repo1 JavaScript',
        //             size: 400,
        //         },
        //         {
        //             name: 'repo5',
        //             language: 'twitterOath',
        //             description: 'repo1 JavaScript',
        //             size: 550,
        //         },
        //         {
        //             name: 'repo6',
        //             language: 'JavaScript',
        //             description: 'repo1 JavaScript',
        //             size: 50,
        //         },
        //     ],
        // });
        axios.get(`https://api.github.com/users/${user}/repos`)
            .then((response) => {
                const result = response.data.map(rep => ({
                    name: rep.name,
                    language: rep.language,
                    description: rep.description,
                    size: rep.size,
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
