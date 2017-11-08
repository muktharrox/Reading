import { LOAD_ALL_CATEGORIES } from '../actions/CategoryAction';

function category( state = {}, action) {
    switch ( action.type ) {
        case LOAD_ALL_CATEGORIES:
            return {
                ...state,
                items: action.categories
            }
        default:
            return state
    }
}

export default category;