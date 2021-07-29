import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './Legendary.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Legendary(){

	return(

		<Container>
			<div className="legendary-tier">
      		<section className="section">
      			<hr />
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#0275d8"}}>L</span>EGENDARY <span style={{color:"#0275d8"}}>T</span>IER</h1>
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

				</div>
      		</div>
			</div> 
		</Container>
	)
}

export default Legendary;