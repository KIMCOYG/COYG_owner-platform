import React,{Component} from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "../App.css"


const data = [
    {id: 1, name: '생활용품', icon : 'sfsdf', createdAt : '2020/1/25', updatedAt : '2020/1/25', location : 1},
    {id: 2, name: '가전제품', icon : 'sadfsdf', createdAt : '2020/1/25', updatedAt : '2020/1/25', location : 2},
    {id: 3, name: '도시락', icon : 'fewf', createdAt : '2020/1/25', updatedAt : '2020/1/25', location : 3},
];

const Table = (props) => {
    return(
        <Row>
            <BootstrapTable data={props.data} pagination>
                <TableHeaderColumn dataField='number'>
                    checkbox
                </TableHeaderColumn>
                <TableHeaderColumn isKey dataField='thumbnail'>
                    번호
                </TableHeaderColumn>                
                <TableHeaderColumn dataField='eventName'>
                    카테고리 명
                </TableHeaderColumn>                
                <TableHeaderColumn dataField='eventDetail'>
                    아이콘
                </TableHeaderColumn>
                <TableHeaderColumn dataField='shopName'>
                    최초생성일
                </TableHeaderColumn>
                <TableHeaderColumn dataField='term'>
                    최종변경일
                </TableHeaderColumn>
                <TableHeaderColumn dataField='enteredDate'>
                    위치
                </TableHeaderColumn>
            </BootstrapTable>
        </Row>
    )
}

const AdminCategory = () => {
    return (
        <>
        
        <Header/>
        <Sidebar/>
        <Container className="mt-3"> 
        <div>
            <Table data={data}/>
            
        </div>
        </Container>
        </>
    );
}



export default AdminCategory;