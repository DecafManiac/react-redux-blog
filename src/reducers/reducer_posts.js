import { FETCH_POSTS, 
        FETCH_POST,
        DELETE_POST, 
        START_FETCHING_POSTS, 
        FETCHING_POSTS_SUCCESS, 
        FETCHING_POSTS_FAILURE,
        START_FETCHING_POST,
        FETCHING_POST_SUCCESS,
        FETCHING_POST_FAILURE } from '../actions/index';

const INITIAL_STATE = { all: [], 
                        post: null,
                        fetchingPost: false,
                        fetchingPosts: false,
                        errorFetchingPosts: false,
                        errorFetchingPost: false,
                     };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        // FETCHING POSTS
        case START_FETCHING_POSTS:
        return {...state, fetchingPosts: true };


        case FETCHING_POSTS_SUCCESS:
        return {...state, all: action.payload,
            fetchingPosts: false,
            errorFetchingPosts: false,
        };

        case FETCHING_POSTS_FAILURE:
        return {
            fetchingPosts: false,
            errorFetchingPosts: 'Unable to fetch posts',
        };
      
        // FEETCHING SINGLE POST
        case START_FETCHING_POST:
            return { ...state, fetchingPost: true };
       
        case FETCHING_POST_SUCCESS:
            return { ...state, post: action.payload,
                fetchingPost: false,
                errorFetchingPost: false
            }
        
        case FETCHING_POST_FAILURE:
            return { fetchingPost: false,
                    errorFetchingPost: 'Unable to fetch post'
            }

        default:
            return state;
    }
}