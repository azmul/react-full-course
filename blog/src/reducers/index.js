import { combineReducers } from 'redux';
import PostList from './postlist';
import Users from './user';

export default combineReducers({
    posts: PostList,
    users: Users
});