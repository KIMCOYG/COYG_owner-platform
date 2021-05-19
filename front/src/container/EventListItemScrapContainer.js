import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getScrapEventsById} from '../modules/posts';
import EventListItemScrap from "../component/EventListItemScrap";
import {reducerUtils} from "../lib/asyncUtils";
// import Pagination from "../component/Pagination";


const EventListItemScrapContainer = ({uId}) => {
    // const [pageData, setPageData] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(1);  // 페이지에 보여지는 목록 수 설정

    const {data, loading, error} = useSelector(state => state.posts.post[uId] || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getScrapEventsById(uId));
    }, [uId, dispatch])



    if (loading && !data) return '로딩중'
    if (error) return 'error'
    if (!data) return null
    console.log('container    ', data)

    // setPageData(data)
    // console.log("sl", pageData)
    //
    // // Get current posts
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = pageData.slice(indexOfFirstPost, indexOfLastPost);
    //
    //
    // // Change page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <EventListItemScrap lists={data}/>
            {/*<Pagination postsPerPage={postsPerPage} totalPosts={pageData.length} paginate={paginate}/>*/}
        </>

    )

}
export default EventListItemScrapContainer