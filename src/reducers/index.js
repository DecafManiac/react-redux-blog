import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import AuthenticateReducer from './reducer_users';


const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  user: AuthenticateReducer
});

export default rootReducer;
