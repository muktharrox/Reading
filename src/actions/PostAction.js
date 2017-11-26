export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS';

export function loadAllPosts (posts) {
    console.log('Valor dos posts no ACtion: ', posts);
    return {
        type: LOAD_ALL_POSTS,
        posts
    }
};