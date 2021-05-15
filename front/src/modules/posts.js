import {
    createPromiseThunk,
    createPromiseThunkById,
    handleAsyncActions,
    handleAsyncActionsById,
    reducerUtils
} from "../lib/asyncUtils";
import axios from 'axios'


const GET_POSTS = 'GET_POSTS'; // 요청시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' // 요청 실패

const GET_POST = 'GET_POSTS'; // 요청시작
const GET_POST_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POST_ERROR = 'GET_POSTS_ERROR' // 요청 실패

const getPost = () =>{
    return homeData;
}
export const getPosts = createPromiseThunk(GET_POSTS, getPost);
//export const getPostById = createPromiseThunkById(GET_POST, )
// TODO: 페이지 별로 데이터 url 만들고 컨테이너 제작
const homeData = [
    {name:'좋아요'},
    {name:'가전제품'},
    {name:'도시락'},
    {name:'디저트'},
    {name:'마트'},
    {name:'분식'},
]
/*export const getPosts = async (pName) => {
    let response;
    switch (pName){
        case 'home':
            //response = await axios.get('')
            setTimeout(500)
            return homeData
            break
        case 'eventScrap':
            console.log("scrap")
            break
    }
    return response.data;
}*/

export const getPostById = async (id) => {
    let response;
  /*  switch (pName){
        case 'userinfo':
            response = await axios.get(`http://localhost:5000/user/read/${id}`)
            break
        case 'eventScrap':
            console.log("scrap")
            break
    }*/
    response = await axios.get(`http://localhost:5000/user/read/${id}`)
    return response.data;
}
const initialState = {
    posts: reducerUtils.initial()
};

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true); // keep data는 로딩중에 데이터 초기화 true면 안함
const getPostReducer = handleAsyncActionsById(GET_POST, 'posts', true);

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
