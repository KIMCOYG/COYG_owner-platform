import Header from '../component/Header';
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

    return (
        <>
        <Header/>
        <Sidebar/>
        <div className="ag-theme-alpine" style={{ height: 400, width: 1200 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="id" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="name" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="icon" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="createdAt" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="updatedAt" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="location" sortable={ true } filter={ true }></AgGridColumn>
            </AgGridReact>
        </div>
        </>
    );
};


export default AdminCategory;