import React, { useMemo } from 'react';
import {useTable} from 'react-table'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../component/Header';

//https://www.daleseo.com/react-table/ 참고

//db 연결 전 더미 데이터
const dataLists = [
    {
        number:1,
        thumbnail: "image1",
        eventName: "eventname1",
        eventDetail: "eventDetail1",
        shopName: "shopName1",
        term: "04.01" + " ~ " + "04.05",
        enteredDate: "2021.04.01",
        state: "진행중"
    },
    {
        number:2,
        thumbnail: "image2",
        eventName: "eventname2",
        eventDetail: "eventDetail2",
        shopName: "shopName2",
        term: "04.02" + " ~ " + "04.04",
        enteredDate: "2021.04.02",
        state: "진행중"
    },
    {
        number:3,
        thumbnail: "image3",
        eventName: "eventname3",
        eventDetail: "eventDetail3",
        shopName: "shopName3",
        term: "03.29" + " ~ " + "03.31",
        enteredDate: "2021.03.29",
        state: "종료"
    },

]

const TableData = () => {
    const columns = useMemo(
        () => [
            {
                accessor: "number",
                Header: "번호"
            },
            {
                accessor: "thumbnail",
                Header: "썸네일"
            },
            {
                accessor: "eventName",
                Header: "이벤트명"
            },
            {
                accessor: "eventDetail",
                Header: "이벤트 상세"
            },
            {
                accessor: "shopName",
                Header: "가게명"
            },
            {
                accessor: "term",
                Header: "기간"
            },
            {
                accessor: "enteredDate",
                Header: "등록일"
            },
            {
                accessor: "state",
                Header: "상태"
            }
        ],
        []
    )

    const data = useMemo(
        
        () => {
            dataLists.forEach(element => {
                arr
                .fill()
                .map((e) => (
                    {
                        number: element.number,
                        thumbnail: element.thumbnail,
                        eventName: element.eventName,
                        eventDetail: element.eventDetail,
                        shopName: element.shopName,
                        term: element.term,
                        enteredDate: element.enteredDate,
                        state: element.state 
                    }
                ))
            })
        }, []
            // Array(10)
            // .fill()
            // .map((e) => (
                
            //     // {
            //     //     number: dataLists.number,
            //     //     thumbnail: dataLists.thumbnail,
            //     //     eventName: dataLists.eventName,
            //     //     eventDetail: dataLists.eventDetail,
            //     //     shopName: dataLists.shopName,
            //     //     term: dataLists.term,
            //     //     enteredDate: dataLists.enteredDate,
            //     //     state: dataLists.state 
            //     // }
                
            //     {number: 1,
            //     thumbnail: "123",
            //     eventName: "dataLists.eventName",
            //     eventDetail: "dataLists.eventDetail",
            //     shopName: "dataLists.shopName",
            //     term: "dataLists.term",
            //     enteredDate: "dataLists.enteredDate",
            //     state: "dataLists.state"}
           // }
           // )), []
    
    )
    

    return(
        <Table columns={columns} data={data}/>
    )
}





const Table = ({columns, data}) => {
    //const title = ["번호", "썸네일", "이벤트명", "이벤트 상세", "가게명", "기간", "등록일", "상태"]
    
    debugger
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })
    debugger
    return (
        <Container className="mt-3">
            <Header></Header>
            <Row>
                <Col>
                    이벤트
                </Col>
                <Col>
                    <select>
                        <option value="전체">전체</option>
                        <option value="진행중">진행중</option>
                        <option value="종료">종료</option>
                    </select>
                </Col>
                <Col>
                    <Button className="col-xs-5" variant="link" value="추가">추가</Button>
                </Col>
            </Row>
            <Row>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            ))}
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </Row>
        </Container>
    )
    
}

export default TableData