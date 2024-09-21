import * as React from 'react';
import Header from '../Include/header';
import Sidebar from '../Include/sidebar';
import Footer from '../Include/footer';

import './assets_admin/bootstrap/css/bootstrap.min.css';
import './assets_admin/dist/css/AdminLTE.min.css';
import './assets_admin/dist/css/skins/_all-skins.min.css';



function AdminLayout({children}) {
  return (
    <>
    
    <div className="wrapper">
      <Header />
      
      {/* Left side column. contains the logo and sidebar */}
      <Sidebar />
        <main>{children}</main>
      
      <Footer />
    </div>{/* ./wrapper */}

    </>
  );
}

export default AdminLayout;
