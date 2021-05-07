import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../modules/posts';


const PostListContainer = () =>{
    const {data, loading, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    if(loading) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    return {

    }
}