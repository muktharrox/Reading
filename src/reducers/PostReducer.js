import { LOAD_ALL_POSTS } from '../actions/PostAction';

function posts( state = {}, action) {
    console.log('Valor dos posts no reducer: ', action);
    switch ( action.type ) {
        case LOAD_ALL_POSTS:
            return {
                ...state,
                itens: action.posts
            }
        default:
            return state
    }
}

export default posts;