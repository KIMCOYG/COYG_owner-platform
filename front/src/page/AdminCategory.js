import Header from '../component/HeaderAdmin';
import Sidebar from '../component/Sidebar';

import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

//https://www.ag-grid.com/react-grid/getting-started/ 참고

const data = [
    {id: 1, name: '생활용품', icon : 'sfsdf', createdAt : '2020/1/25', updatedAt : '2020/1/25', location : 1},
    {id: 2, name: '가전제품', icon : 'sadfsdf', createdAt : '2020/1/25', updatedAt : '2020/1/25', location : 2},
    {id: 3, name: '도시락', icon : 'fewf', createdAt : '2020/1/25', updatedAt : '2020/1/25', location : 3}
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
        <Sidebar/>
        
        <div className="ag-theme-alpine mx-auto" style={{ height: 400, width: 1200 }}>
            <button onClick={onButtonClick}>수정</button>
            <button onClick={onButtonClick}>삭제</button>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                rowSelection="multiple">
                <AgGridColumn field = "checkbox" width = "100px" resizable="true" checkboxSelection = {true}></AgGridColumn>
                <AgGridColumn field="id" resizable="true" width = "100px" sortable={ true } filter={ true } ></AgGridColumn>
                <AgGridColumn field="name" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="icon" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="createdAt" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="updatedAt" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="location" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
            </AgGridReact>
        </div>
        
        </>
    );
};




export default AdminCategory;