import React from 'react';
import Header from '../component/Header';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const AdminPage = () => {
    return (
        <>
        <Header/>
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem>카테고리 관리</MenuItem>
                <MenuItem>사장님 관리</MenuItem>
            </Menu>
        </ProSidebar>
        </>
    );
}



export default AdminPage;