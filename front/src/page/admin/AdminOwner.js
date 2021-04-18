import Header from '../../component/HeaderAdmin';
import Sidebar from '../../component/Sidebar';

import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

//https://www.ag-grid.com/react-grid/getting-started/ 참고

const data = [
    {createdAt: '2020/1/25', email: 'kim@naver.com', name : '김사장', 
    phone : '010-0000-1111'},
    {createdAt: '2020/1/26', email: 'sung@gmail.com', name : '성사장', phone : '010-1111-2222'},
    {createdAt: '2020/1/27', email: 'park@gmail.com', name : '박사장', phone : '010-2222-3333'}
];


const AdminCategory = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    
    const [rowData, setRowData] = useState(data);
    
    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    const onButtonClick = e => {
        const selectedNodes = gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

    return (
        <>
        <Header/>
        <div style={{float:'left' , width:'20%'}}><Sidebar/></div>
        <div style={{float:'left',marginTop: 30 , width:'33%'}}>
        <div className="ag-theme-alpine" style={{ height: 400, width: 910 }}>
        <button style ={{marginBottom : 10, marginRight : 10, marginLeft : 800}}onClick={onButtonClick}>수정</button>
            <button onClick={onButtonClick}>삭제</button>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                rowSelection="multiple">
                <AgGridColumn field = "checkbox" width = "100px" resizable="true" checkboxSelection = {true}></AgGridColumn>
                <AgGridColumn field="createdAt" resizable="true" sortable={ true } filter={ true } ></AgGridColumn>
                <AgGridColumn field="email" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="name" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="phone" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
            </AgGridReact>
        </div>
        </div>
        </>
    );
};




export default AdminCategory;