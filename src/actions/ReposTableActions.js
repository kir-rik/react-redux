import {
    GET_REPOS_REQUEST,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAIL,
} from '../constants/ReposTable'


export function getRepos(user) {

    return (dispatch) => {
        dispatch({
            type: GET_REPOS_REQUEST,
            payload: null
        })

        try {
            setTimeout(() => {
                dispatch({
                    type: GET_REPOS_SUCCESS,
                    payload: [
                        {name: "Rep n1", language: 'js', description: 'azaza' }
                        ]
                })
            }, 1000)  
        }  catch(e) {
            dispatch({
                type: GET_REPOS_FAIL,
                error: true,
                payload: new Error(e)
            })
        }
        
    }
}
