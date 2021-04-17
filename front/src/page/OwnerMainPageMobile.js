import React, { useEffect, useMemo, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../component/Header';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Pagination from '../component/Pagination';
import { Link } from 'react-router-dom';

//https://code.tutsplus.com/ko/tutorials/working-with-tables-in-react-part-one--cms-29682 참고

//db 연결 전 더미 데이터
const data = [
    {
        id:1,
        number:1,
        thumbnail: "image1",
        eventName: "eventname1",
        eventDetail: "eventDetail1",
        shopName: "shopName1",
        term: "04.01" + " ~ " + "04.05",
        enteredDate: "2021.04.01",
        likes: 224,
        state: "진행중"
    },
    {
        id:2,
        number:2,
        thumbnail: "image2",
        eventName: "eventname2",
        eventDetail: "eventDetail2",
        shopName: "shopName2",
        term: "04.02" + " ~ " + "04.04",
        enteredDate: "2021.04.02",
        likes: 214,
        state: "진행중"
    },
    {
        id:3,
        number:3,
        thumbnail: "image3",
        eventName: "eventname3",
        eventDetail: "eventDetail3",
        shopName: "shopName3",
        term: "03.29" + " ~ " + "03.31",
        enteredDate: "2021.03.29",
        likes: 187,
        state: "종료"
    },

]

const options = {
    onRowClick: (row) => {
        window.location.href = `/owner/detail/${row.id}`
        
    }
    
}

const Table = (props) => {
    const dataList = props.data.map((list) => (
        <Link to="/owner/detail/${list.id}">
            <Row>
                <Col>
                    {list.thumbnail}
                </Col>
                <Col>
                    <Row>
                        {list.eventName}
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                {list.shopName}
                            </Row>
                            <Row>
                                {list.term}
                            </Row>
                            <Row>
                                {list.enteredDate}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                {list.likes}
                            </Row>
                            <Row>
                                {list.state}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </Link>
    ))
    return(
        <ul>
            {dataList}
        </ul>
    )
}



const OwnerMainPageMobile = () => {
    //const title = ["번호", "썸네일", "이벤트명", "이벤트 상세", "가게명", "기간", "등록일", "상태"]
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1);  // 페이지에 보여지는 목록 수 설정

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setPosts(data);
            setLoading(false);
        }

        fetchPosts();
    }, []);
    console.log(posts)


     // Get current posts
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
 
     // Change page
     const paginate = (pageNumber) => setCurrentPage(pageNumber);
 


    
    return (
        <Container className="mt-3">
            <Header></Header>
            <Row>
                <Col>
                    이벤트
                </Col>
                <Col>
                    <Button className="col-xs-5" variant="link" value="추가">추가</Button>
                </Col>
            </Row>
            <Row>
                <Table data={currentPosts}></Table>
            </Row>
            <Row>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            </Row>
        </Container>
    )
    
}

export default OwnerMainPageMobile