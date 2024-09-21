import React from 'react';
import './assets_admin/bootstrap/css/bootstrap.min.css';
import './assets_admin/dist/css/AdminLTE.min.css';
import './assets_admin/dist/css/skins/_all-skins.min.css';

function AuthLayout({children}) {
  return (
    <div className="login-box">
        {children}
    </div>
    
  )
}

export default AuthLayout