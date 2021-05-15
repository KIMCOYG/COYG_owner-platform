import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

//참조 https://reactjsexample.com/customizable-and-responsive-react-sidebar-library-with-dropdown-menus/

const Sidebar = () => {
    return(
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem>카테고리 관리<Link to="/admin/category"/></MenuItem>
                <MenuItem>사장님 관리<Link to="/admin/owner"/></MenuItem>
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar;