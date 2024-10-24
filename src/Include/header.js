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
        
        <a href="index2.html" className="logo"><b>Event</b> Management</a>
        
        <nav className="navbar navbar-static-top" role="navigation">
         
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              
             
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="../assets_admin/dist/img/avatar2.png" className="user-image" alt="User Image"/>
                  <span className="text-black">Tanbhir</span>
                </a>
                <ul className="dropdown-menu">
                 
                  <li className="usear-head text-center ">
                    <img src="../assets_admin/dist/img/user7-128x128.jpg" className="img-circle" alt="User Image" />
                    {/* <p>
                    Michale handerson - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p> */}
                  </li>
                 
                  <li className="user-body">
                    <div className="col-xs-6 text-center">
                      <a href="#">Profile</a>
                    </div>
                   
                    <div className="col-xs-6 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </li>
               
                  <div>
                  <li onClick={activeMenu}s className={`sidebar-item ${isLinkActive("/Login")}`}>
                    <Link to={"/Login"} className={`sidebar-link`}>
                     
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