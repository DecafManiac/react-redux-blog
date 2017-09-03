import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import AuthenticateReducer from './reducer_users';
import { post, postFetchDataError, postIsLoading } from './reducer_post';


const rootReducer = combineReducers({
  post,
  postFetchDataError,
  postIsLoading,
  posts: PostsReducer,
  form: formReducer,
  user: AuthenticateReducer
});

export default rootReducer;
