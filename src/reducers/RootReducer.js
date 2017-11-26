import { combineReducers } from 'redux';
import category from './CategoryReducer';
import posts from './PostReducer';

export default combineReducers({
    category,
    posts
});