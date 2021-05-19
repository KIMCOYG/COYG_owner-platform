import {
    createPromiseThunk,
    createPromiseThunkById,
    handleAsyncActions,
    handleAsyncActionsById,
    reducerUtils
} from "../lib/asyncUtils";
import * as postsAPI from '../api/postsApi';


const GET_POSTS = 'GET_POSTS'; // 요청시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' // 요청 실패

const GET_POST = 'GET_POSTS'; // 요청시작
const GET_POST_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POST_ERROR = 'GET_POSTS_ERROR' // 요청 실패

const CLEAR_POST = "CLEAR_POST"


export const getEvents = createPromiseThunk(GET_POSTS, postsAPI.getEvents);
export const getScrapEvents = createPromiseThunk(GET_POSTS, postsAPI.getScrapEvents);
export const getShops = createPromiseThunk(GET_POSTS, postsAPI.getShops);
export const getCategories = createPromiseThunk(GET_POSTS, postsAPI.getCategories);

export const getEventById = createPromiseThunkById(GET_POST, postsAPI.getEventById);
export const getShopById = createPromiseThunkById(GET_POST, postsAPI.getShopById);
export const getUserById = createPromiseThunkById(GET_POST, postsAPI.getUserById);
// TODO: 페이지 별로 데이터 url 만들고 컨테이너 제작

export const clearPost = () => ({type: CLEAR_POST})

const initialState = {
    posts: reducerUtils.initial(),
    post: {}
};

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true); // keep data는 로딩중에 데이터 초기화 true면 안함
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);


export default function posts(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action)
        case CLEAR_POST:
            return{
                ...state,
                post: reducerUtils.initial()
            }
        default:
            return state;

    }
}


