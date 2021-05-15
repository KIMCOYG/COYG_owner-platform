import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPostById} from '../modules/posts';
import EventDetail from "../component/EventDetail";


const OwnerEventDetailContainer = (params) =>{
    console.log(params.id)
    const id = parseInt(params.id)
    const {data, loading, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostById(id, 'events'));
    }, [dispatch])

    if(loading) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    console.log('container    ', data)
    return (
        <EventDetail list={data}/>
    )

}
export default OwnerEventDetailContainer