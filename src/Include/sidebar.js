import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
//   const activeMenu=(e)=>{
//     document.querySelectorAll('.submenu').forEach(
//         function(e){
//             e.classList.remove('active');
//         }
//     )
//     const childElement = e.target.parentElement.querySelector('.submenu');
//     if(childElement && childElement.classList.contains('submenu')){
//         childElement.classList.add('active');
//     }
// }

// const location = useLocation();
// const isLinkActive = (path)=>{
//     return location.pathname == path ? 'active' : "";
// }
  return (
    <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="../assets_admin/dist/img/avatar5.png" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>MICHEAL JON</p>

              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          {/* search form */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          {/* /.search form */}
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu">
            <li className="header"><h1>Manu</h1></li>
            <li className="active treeview">
              <a href="#">
              <h2>
                <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
                </h2>
              </a>
              {/* <ul className="treeview-menu">
                <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
              </ul> */}
            </li>
            <li className="treeview">
              
              <Link to="task_management">
              <h4>
                <i className="fa fa-angle-left pull-right"></i>
                <span>Task Management</span>
                {/* <span className="label label-primary pull-right">4</span> */}
                </h4>
              </Link>
           
              {/* <ul className="treeview-menu">
                <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
              </ul> */}
            </li>
            <li>

              <a href="#"><h4>
              <i className="fa fa-angle-left pull-right"></i>
                <span>Budget Tracking</span></h4>
                
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <h4>
                {/* <i className="fa fa-pie-chart"></i> */}
                <span>Event list</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>

              </a>
              {/* <ul className="treeview-menu">
                <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
              </ul> */}
            </li>
            <li className="treeview">
              <a href="#">
              <h4>
                {/* <i className="fa fa-laptop"></i> */}
                <span>Timeline</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </a>
              {/* <ul className="treeview-menu">
                <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
              </ul> */}
            </li>
            <li className="treeview">
              <a href="#">
              <h4>
              {/* <i className="fa fa-edit"></i> */}
              <span>Forms</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </a>
              {/* <ul className="treeview-menu">
                <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
              </ul> */}
            </li>
            <li className="treeview">
              <a href="#">
                <h4>
                {/* <i className="fa fa-table"></i> */}
                 <span>Vandore management</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </a>
              {/* <ul className="treeview-menu">
                <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
              </ul> */}
            </li>
            <li>
              <a href="pages/calendar.html">
              <h4>
                <i className="fa fa-calendar"></i> 
                <span>Calendar</span>
                <small className="label pull-right bg-red"></small>
                </h4>
              </a>
            </li>
            {/* <li>
              <a href="pages/mailbox/mailbox.html">
                <i className="fa fa-envelope"></i> <span>Mailbox</span>
                <small className="label pull-right bg-yellow">12</small>
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-folder"></i> <span>Examples</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o"></i> Invoice</a></li>
                <li><a href="pages/examples/login.html"><i className="fa fa-circle-o"></i> Login</a></li>
                <li><a href="pages/examples/register.html"><i className="fa fa-circle-o"></i> Register</a></li>
                <li><a href="pages/examples/lockscreen.html"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
                <li><a href="pages/examples/404.html"><i className="fa fa-circle-o"></i> 404 Error</a></li>
                <li><a href="pages/examples/500.html"><i className="fa fa-circle-o"></i> 500 Error</a></li>
                <li><a href="pages/examples/blank.html"><i className="fa fa-circle-o"></i> Blank Page</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-share"></i> <span>Multilevel</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                <li>
                  <a href="#"><i className="fa fa-circle-o"></i> Level One <i className="fa fa-angle-left pull-right"></i></a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                    <li>
                      <a href="#"><i className="fa fa-circle-o"></i> Level Two <i className="fa fa-angle-left pull-right"></i></a>
                      <ul className="treeview-menu">
                        <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                        <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
              </ul>
            </li>
            <li><a href="documentation/index.html"><i className="fa fa-book"></i> Documentation</a></li>
            <li className="header">LABELS</li>
            <li><a href="#"><i className="fa fa-circle-o text-danger"></i> Important</a></li>
            <li><a href="#"><i className="fa fa-circle-o text-warning"></i> Warning</a></li>
            <li><a href="#"><i className="fa fa-circle-o text-info"></i> Information</a></li> */}
            {/* <li onClick={activeMenu}s className={`sidebar-item ${isLinkActive("/Login")}`}>
              <Link to={"/Login"} className={`sidebar-link`}>
                <i data-feather="home" width="20"></i> 
                <span>Log out</span>
              </Link>
            </li> */}
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
  )
}

export default Sidebar