import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './Gold.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gold(){

	return(
		<div className="gold-tier">
		<Container>
			
      		<section className="section">
      			<hr />
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#FFD700"}}>G</span>OLD <span style={{color:"#FFD700"}}>T</span>IER</h1>
      			<hr />
      		</section>

      		<div className="div-3">
      			<div className="row">
					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
        						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>M</span>S</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>07</h6>
      							<hr />
      						</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
      							<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>S</span>T</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>10</h6>
        						<hr />
        					</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>V</span>K</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>18</h6>
      							<hr />
      						</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>H</span>P</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>33</h6>
      							<hr />
      						</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>R</span>P</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>17</h6>
      							<hr />
      						</div>
    					</div>
  					</div>

				</div>
      		</div>
			<br />
			<hr />
		</Container>
		</div>
	)
}

export default Gold;