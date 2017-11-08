export const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES';

export function loadAllCategories (categories) {
    return {
        type: LOAD_ALL_CATEGORIES,
        categories
    }
};