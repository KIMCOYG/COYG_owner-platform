import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents} from '../modules/posts';
import {reducerUtils} from "../lib/asyncUtils";
import CategoryEventList from "../component/CategoryEventList";


const CategoryEventListContainer = () =>{
    const {data, loading, error} = useSelector(state => state.posts.posts || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    console.log('container    ', data)
    return (
        <CategoryEventList lists={data}/>
    )

}
export default CategoryEventListContainer