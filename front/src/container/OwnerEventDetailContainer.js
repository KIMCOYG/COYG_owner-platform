import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPostById, getPosts} from '../modules/posts';
import EventListItemScrap from "../component/EventListItemScrap";
import Home from "../component/Home";
import EventDetail from "../component/EventDetail";
import ShopDetail from "../component/ShopDetail";


const OwnerEventDetail = (match) =>{
    const {data, loading, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostById(match.id, 'eventDetail'));
    }, [dispatch])

    if(loading) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    console.log('container    ', data)
    return (
        <EventDetail list={data}></EventDetail>
    )

}
export default OwnerEventDetail