import Header from '../../component/HeaderAdmin';
import Sidebar from '../../component/Sidebar';

import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button } from 'bootstrap';
import BtnCellRenderer from "../../component/BtnCellRenderer.js";



//https://www.ag-grid.com/react-grid/getting-started/ 그리드 참고

//https://getbootstrap.com/docs/4.0/components/modal/ 모달 참고

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
        columnDefs: data,
        DefaultColDef:{
            headerCheckboxSelection: isFirstColumn,
            checkboxSelection: isFirstColumn,
        }
      };

      function isFirstColumn(params) {
        var displayedColumns = params.columnApi.getAllDisplayedColumns();
        var thisIsFirstColumn = displayedColumns[0] === params.column;
        return thisIsFirstColumn;
      }

    const onButtonClick = e => {
        const selectedNodes = gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const selectedDataStringPresentation = selectedData.map( node => `${node.id} ${node.name}`).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

    return (
        <>
        <Header/>
        <div style={{float:'left' , width:'20%'}}><Sidebar/></div>
        
        <div style={{float:'left',marginTop: 30 , width:'33%'}}>
        <div className="ag-theme-alpine mx-auto" style={{ height: 400, width: 1110 }}>
            <button style ={{marginRight : 10, marginLeft : 950}}type = "button" data-toggle="modal" data-target="#AddModal" className="btn btn-primary">추가</button>

            <button type = "button" data-toggle="modal" data-target="#DeleteModal" className="btn btn-primary">삭제</button>

            <div class="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="AddModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="AddModalLabel">카테고리 추가</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="category-name" class="col-form-label">카테고리명</label>
                            <input type="text" class="form-control" id="category-name"/>
                        </div>
                        <div class="form-group">
                            <label for="category-image" class="col-form-label">카테고리 이미지</label>
                            <div><input type="file" id="category-image" accept="image/jpeg,.png"/></div>
                            
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">추가</button>
                    </div>
                </div>
                </div>
            </div>

            <div class="modal fade" id="DeleteModal" tabindex="-1" role="dialog" aria-labelledby="DeleteModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="DeleteModalLabel">카테고리 삭제</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        삭제하시겠습니까?
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">네</button>
                    </div>
                </div>
                </div>
            </div>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                rowSelection="multiple"
                frameworkComponents = {{
                    btnCellRenderer : BtnCellRenderer
                }}
                >
                <AgGridColumn field="id" resizable="true" width = "100px" sortable={ true } filter={ true } checkboxSelection = {true}headerCheckboxSelection = {true}></AgGridColumn>
                <AgGridColumn field="name" resizable="true" width = "100px" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="icon" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="createdAt" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="updatedAt" resizable="true" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="location" resizable="true" width = "150px" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="수정" resizable="true" width = "100px" sortable={ true } filter={ true } cellRenderer="btnCellRenderer"
                cellRendererParams = {{
                    clicked: function(field){
                        alert('${field} was clicked');
                    }
                }}></AgGridColumn>
            </AgGridReact>
        </div>
    </div>
        </>
    );

};




export default AdminCategory;