import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPostById, getPosts} from '../modules/posts';
import EventListItemScrap from "../component/EventListItemScrap";
import Home from "../component/Home";
import EventDetail from "../component/EventDetail";
import ShopDetail from "../component/ShopDetail";


const OwnerShopDetailContainer = (params) => {
    const id = parseInt(params.id)
    const {data, loading, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        //id 객체로 넘어와서 값을 전송하기위해 . 사용
        dispatch(getPostById(id, 'shops'));
    }, [dispatch])

    if (loading) return '로딩중'
    if (error) return 'error'
    if (!data) return null
    console.log('container    ', data)
    return (
        <ShopDetail list={data}/>
    )

}
export default OwnerShopDetailContainer