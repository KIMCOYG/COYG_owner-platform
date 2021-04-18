import Header from '../../component/HeaderAdmin';
import Sidebar from '../../component/Sidebar';

import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

//https://www.ag-grid.com/react-grid/getting-started/ 참고

const data = [
    {id: 1, name: '치킨', icon : 'chickenicon', createdAt : '2020/1/25', updatedAt : '2020/1/25', location : 1},
    {id: 2, name: '가전제품', icon : 'laptopicon', createdAt : '2020/1/25', updatedAt : '2020/1/25', location : 2},
    {id: 3, name: '햄버거', icon : 'hamicon', createdAt : '2020/1/25', updatedAt : '2020/1/25', location : 3}
];


const AdminCategory = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    
    const [rowData, setRowData] = useState(data);
    
    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }
    
    const gridOptions = { //그리드 옵션
        columnDefs: data
      };

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
        <div className="ag-theme-alpine mx-auto" style={{ height: 400, width: 1200 }}>
            <button style ={{marginBottom : 10, marginRight : 10, marginLeft : 1100}}onClick={onButtonClick}>수정</button>
            <button onClick={onButtonClick}>삭제</button>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                rowSelection="multiple">
                <AgGridColumn field = "checkbox" width = "100px" resizable="true" checkboxSelection = {true}></AgGridColumn>
                <AgGridColumn field="id" resizable="true" width = "100px" sortable={ true } filter={ true } ></AgGridColumn>
                <AgGridColumn field="name" resizable="true" sortable={ true } filter={ true } editable={true}></AgGridColumn>
                <AgGridColumn field="icon" resizable="true" sortable={ true } filter={ true } editable={true}></AgGridColumn>
                <AgGridColumn field="createdAt" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="updatedAt" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="location" resizable="true" sortable={ true } filter={ true } editable={true}></AgGridColumn>
            </AgGridReact>
        </div>
    </div>
        </>
    );
};




export default AdminCategory;