import _ from 'lodash';
import baseUrl from '../apis';

export const fetchPostsUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts());

   _.chain(getState().posts)
     .map('userId')
     .uniq()
     .forEach(id => dispatch(fetchUser(id)))
     .value()
}

export const fetchPosts = () =>  async dispatch => {
   const response = await baseUrl.get('/posts');
   dispatch({ type: 'FETCH_POSTS', payload: response.data });
}

export const fetchUser = id => async dispatch => {
   const response = await baseUrl.get(`/users/${id}`);
   
   dispatch({ type: 'FETCH_USER', payload: response.data});
}

// using memoize function to avoid iterate call of same user
// export const fetchUser = id => async dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize( async (id, dispatch) => {
//    const response = await baseUrl.get(`/users/${id}`);
   
//    dispatch({ type: 'FETCH_USER', payload: response.data});
// }) 