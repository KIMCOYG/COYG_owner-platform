import React from 'react';
import AdminHeader from '../../component/AdminHeader';
import Sidebar from '../../component/Sidebar';
import AdminLayout from '../../component/AdminLayout';

const AdminPage = () => {
    return (
        <>
        <div className="container-fluid">
            <AdminHeader />
            <AdminLayout className="mt-2"/>
        </div>
        </>
    );
}

export default AdminPage;