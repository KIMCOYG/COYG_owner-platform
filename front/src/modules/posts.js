import { createPromiseThunk, handleAsyncActions, reducerUtils } from "../lib/asyncUtils";
import data from "../dummy/dummyDataforOwner";


const GET_POSTS = 'GET_POSTS'; // 요청시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' // 요청 실패

const getPost = () =>{
    return data;
}
export const getPosts = createPromiseThunk(GET_POSTS, getPost);

const initialState = {
    posts: reducerUtils.initial()
};

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts');

export default function posts(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action)
        default:
            return state;

    }
}
