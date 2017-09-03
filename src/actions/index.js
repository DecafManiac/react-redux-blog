import axios from 'axios';

export const AUTHENTICATE = 'AUTHENTICATE';
export const START_FETCHING_POSTS = 'START_FETCHING_POSTS';
export const FETCHING_POSTS_SUCCESS = 'FETCHING_POSTS_SUCCESS';
export const FETCHING_POSTS_FAILURE = 'FETCHING_POSTS_FAILURE';

export const START_FETCHING_POST = 'START_FETCHING_POST';
export const FETCHING_POST_SUCCESS = 'FETCHING_POST_SUCCESS';
export const FETCHING_POST_FAILURE = 'FETCHING_POST_FAILURE';

export const START_CREATING_POST = 'START_CREATING_POST';
export const CREATING_POST_SUCCESS = 'CREATING_POST_SUCCESS';
export const CREATING_POST_FAILURE = 'CREATING_POST_FAILURE';

export const START_DELETING_POST = 'START_CREATING_POST';
export const DELETING_POST_SUCCESS = 'CREATING_POST_SUCCESS';
export const DELETING_POST_FAILURE = 'CREATING_POST_FAILURE';

export const ROOT_URL = 'https://api.mlab.com/api/1/databases/blog-decafmaniac/collections/blog';
export const API_KEY = 'cxssGYdYHxJPJNWo9dR87IVu9OisXJ3t';

// using readux thunk

export function fetchPosts() {
    return (dispatch, getState) => {
        dispatch({ type: START_FETCHING_POSTS });

        axios.get(`${ROOT_URL}?apiKey=${API_KEY}`).then(
            data => dispatch({ type: FETCHING_POSTS_SUCCESS, payload: data.data }),
            error => dispatch({ type: FETCHING_POSTS_FAILURE })
        );
    }
} 

export function fetchPost(id) {
   return (dispatch) => {
       dispatch (postIsLoading(true));

       axios.get(`${ROOT_URL}/${id}?apiKey=${API_KEY}`)
            .then(
                data => dispatch(postFetchDataSuccess(data.data)),
                
                error => dispatch(postFetchDataError(true))
       );
   }
}

export function postIsLoading(bool) {
    return {
        type: 'START_FETCHING_POST',
        isLoading: bool
    }
}

export function postFetchDataSuccess(post) {
    return {
        type: 'FETCHING_POST_SUCCESS',
        post
    }
}

export function postFetchDataError(bool) {
    return {
        type: 'FETCHING_POST_FAILURE',
        isError: bool
    }
}
/* THUNK FIX */

export function createPost(data) {
    return (dispatch, getState) => {
        dispatch({ type: START_CREATING_POST })

        return axios.post(`${ROOT_URL}/?apiKey=${API_KEY}`, data).then(
            response => dispatch({type: CREATING_POST_SUCCESS, payload: response}),
            error => dispatch({type: CREATING_POST_FAILURE, payload: error})
        );  
    }
} 

export function deletePost(id) {
    return (dispatch, getState) => {
        dispatch({type: START_DELETING_POST})

        return axios.delete(`${ROOT_URL}/${id}?apiKey=${API_KEY}`).then(
            response => dispatch({type: DELETING_POST_SUCCESS, payload: response}),
            error => dispatch({type: DELETING_POST_FAILURE, payload: error})
        );
    }
}

export function isAuthenticated(message) { /* used in index.js*/
    return (dispatch, getState) => {
        dispatch({ type: AUTHENTICATE, payload: message })
    }
}




