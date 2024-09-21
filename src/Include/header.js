import React from "react";
import { Link,useLocation } from 'react-router-dom'

function Header(){
  const activeMenu=(e)=>{
    document.querySelectorAll('.submenu').forEach(
        function(e){
            e.classList.remove('active');
        }
    )
    const childElement = e.target.parentElement.querySelector('.submenu');
    if(childElement && childElement.classList.contains('submenu')){
        childElement.classList.add('active');
    }
}

const location = useLocation();
const isLinkActive = (path)=>{
    return location.pathname == path ? 'active' : "";
}
  return (
    <header className="main-header">
        {/* Logo */}
        <a href="index2.html" className="logo"><b>Admin</b>Panel</a>
        {/* Header Navbar:  can be found in header.less */}
        <nav className="navbar navbar-static-top" role="navigation">
          {/* Sidebar toggle button*/}
          {/* <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a> */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              
              {/* Tasks:  can be found in dropdown.less */}
             
              {/* User Account: style can be found in dropdown.less */}
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="../assets_admin/dist/img/avatar2.png" className="user-image" alt="User Image"/>
                  <span className="text-black">MICHLE JON</span>
                </a>
                <ul className="dropdown-menu">
                  {/* User image */}
                  <li className="usear-head text-center ">
                    <img src="../assets_admin/dist/img/user7-128x128.jpg" className="img-circle" alt="User Image" />
                    <p>
                    Michale handerson - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  {/* Menu Body */}
                  <li className="user-body">
                    <div className="col-xs-6 text-center">
                      <a href="#">Followers</a>
                    </div>
                    {/* <div className="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div> */}
                    <div className="col-xs-6 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </li>
                  {/* Menu Footer */}
                  <div>
                  <li onClick={activeMenu}s className={`sidebar-item ${isLinkActive("/Login")}`}>
                    <Link to={"/Login"} className={`sidebar-link`}>
                      {/* <i data-feather="home" width="20px"></i>  */}
                      <span className="col-xs-12 text-center " ><h4>Logout</h4></span>
                    </Link>
                  </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Header;