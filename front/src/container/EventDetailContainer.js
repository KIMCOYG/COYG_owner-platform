import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEventById} from '../modules/posts';
import EventDetail from "../component/EventDetail";
import {reducerUtils} from "../lib/asyncUtils";


const EventDetailContainer = async (params) =>{
    console.log(params.id)
    // const id = parseInt(params.id)
    const id = 4
    const {data, loading, error} = await useSelector(state => state.posts.post[id] || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEventById(id));

    }, [id, dispatch])

    if(loading || !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    console.log('container    ', data)
    return (
        <EventDetail list={data}/>
    );

}
export default EventDetailContainer