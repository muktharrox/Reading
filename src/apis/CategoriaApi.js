import { api, headers } from './ApiConfig';

export const getAll = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories);