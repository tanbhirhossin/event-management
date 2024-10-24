import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
      
      <div className="content-wrapper">
       
        <section className="content-header">
          <h1>
            Dashboard
            <small>Control panel</small>
          </h1>
          
        </section>

        
        <section className="content">
         
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              
              <div className="small-box bg-aqua">
                <div className="inner">
                  <h3>100%</h3>
                  <p>Work panel</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
            
              <div className="small-box bg-green">
                <div className="inner">
                  <h3>100<sup style={{fontSize: '20px'}}>%</sup></h3>
                  <p>Task Managment</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                {/* <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a> */}
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
          
              <div className="small-box bg-yellow">
                <div className="inner">
                  <h3>44%</h3>
                  <p>event List</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                {/* <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a> */}
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
         
              <div className="small-box bg-red">
                <div className="inner">
                  <h3>65%</h3>
                  <p>Budget Tracking</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph"></i>
                </div>
                {/* <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>       
  )
}

export default Dashboard