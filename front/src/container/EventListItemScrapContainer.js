import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getScrapEvents} from '../modules/posts';
import EventListItemScrap from "../component/EventListItemScrap";
import {reducerUtils} from "../lib/asyncUtils";


const EventListItemScrapContainer = () =>{
    const {data, loading, error} = useSelector(state => state.posts.posts || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getScrapEvents());
    }, [dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    console.log('container    ', data)
    return (
        <EventListItemScrap lists={data}/>
    )

}
export default EventListItemScrapContainer