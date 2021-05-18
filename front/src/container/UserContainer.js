import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUserById} from '../modules/posts';
import User from "../component/UserInfo";


const UserContainer = (id) => {
    const {data, loading, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserById(id));
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