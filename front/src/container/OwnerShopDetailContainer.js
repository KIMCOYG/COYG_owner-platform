import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getShopById} from '../modules/posts';
import ShopDetail from "../component/ShopDetail";
import {reducerUtils} from "../lib/asyncUtils";


const OwnerShopDetailContainer = async (params) => {
    const id = parseInt(params.id)
    const {data, loading, error} = await useSelector(state => state.posts.post[id] || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShopById(id));
    }, [id, dispatch])

    if(loading || !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    return (
        <ShopDetail list={data}/>
    )

}
export default OwnerShopDetailContainer