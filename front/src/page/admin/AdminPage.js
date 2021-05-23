import React from 'react';
import AdminHeader from '../../component/AdminHeader';
import AdminLayout from '../../component/AdminLayout';

const AdminPage = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="container-fluid">
                <AdminHeader />
            </div>
            <div className="row" style={{height: "1000px"}}>
                <AdminLayout className="mt-2"/>
            </div>
            
        </div>
        </>
    );
}

export default AdminPage;