export function postFetchDataError(state = false, action) {
    switch (action.type) {
        case 'FETCHING_POST_FAILURE':
            return action.isError;

        default:
            return state;
    }
}

export function postIsLoading(state = false, action) {
    switch (action.type) {
        case 'START_FETCHING_POST':
            return action.isLoading;

        default:
            return state;
    }
}

export function post(state = null, action) {
    switch (action.type) {
        case 'FETCHING_POST_SUCCESS':
            return action.post;

        default:
            return state;
    }
}
