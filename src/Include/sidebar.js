import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){

  return (
    <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="../assets_admin/dist/img/avatar5.png" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>TANBHIR</p>

              
            </div>
          </div>
        
          <ul className="sidebar-menu">
            
            <li className="active treeview">
              <Link to="/">
              <h2>
                <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
                </h2>
              </Link>
             
            </li>
            <li className="treeview">
            <Link to="/TaskManagement">
                <h4>
                <span>Task management</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
            </li>

            <li className="treeview">
            <Link to="/Event">
                <h4>
                <span>Event</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
            </li>

            <li className="treeview">
            <Link to="/EventTask">
                <h4>
                <span>Event Task</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
            </li>

           


            <li className="treeview">
            <Link to="/EventExpense">
                <h4>
                <span>Event Expense</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
            </li>




            <li className="treeview">
            <Link to="/Employee">
                <h4>
                <span>Employee</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
            </li>




            <li>
              <Link to="/Budget"><h4>
              <i className="fa fa-angle-left pull-right"></i>
                <span>Budget Tracking</span></h4>
              </Link>
            </li>
           
            <li className="treeview">
              <Link to="/EventList">
                <h4>
                <span>Event list</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
            </li>
            
            <li className="treeview">
              <Link to="/Form">
              <h4>
              {/* <i className="fa fa-edit"></i> */}
              <span>Forms</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
              
            </li>
            <li className="treeview">
              <Link to="/Vendor">
                <h4>
                {/* <i className="fa fa-table"></i> */}
                 <span>Vendore management</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
            </li>


            <li>
              <Link to="/EventRequest"><h4>
              <i className="fa fa-angle-left pull-right"></i>
                <span>Event Request</span></h4>
              </Link>
            </li>


            <li className="treeview">
              <Link to="/Timeline">
              <h4>
                <span>Timeline</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
            </li>

            <li className="treeview">
              <Link to="/payment">
              <h4>
                <span>Payment</span>
                <i className="fa fa-angle-left pull-right"></i>
                </h4>
              </Link>
            </li>


           
            

          </ul>
        </section>
       
      </aside>
  )
}

export default Sidebar