import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getShops} from '../modules/posts';
import {reducerUtils} from "../lib/asyncUtils";
import SelectShop from "../component/SelectShop";


const SelectShopsContainer = () =>{
    const {data, loading, error} = useSelector(state => state.posts.posts || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShops());
    }, [dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    console.log('container    ', data)
    return (
        <SelectShop lists={data}/>
    )

}
export default SelectShopsContainer