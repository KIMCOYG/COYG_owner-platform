import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPostById, getPosts} from '../modules/posts';
import ShopDetail from "../component/ShopDetail";
import User from "../component/User";


const UserContainer = (id) => {
    const {data, loading, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostById(id));
    }, [dispatch])

    if (loading) return '로딩중'
    if (error) return 'error'
    if (!data) return null
    console.log('container    ', data)
    return (
        <User list={data}></User>
    )

}
export default UserContainer