import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './/Marketplace.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Marketplace(){

	return(
		<div className="div">
			<Navbar className="">
        		<Container>
          			<Navbar.Brand href="#" style={{color : "#ffffff"}}>CRIC<span style={{color:"#51E8EF"}}>SHOT</span></Navbar.Brand>          		
            			<Nav className="me-auto">
              				<Nav.Link href="Marketplace.js"  style={{color : "#ffffff"}}>MARKETPLACE</Nav.Link>
              				<Nav.Link href="#"  style={{color : "#ffffff"}}>GIVEAWAYS</Nav.Link>
  		          			<Nav.Link href="#"  style={{color : "#ffffff"}}>ABOUT</Nav.Link>
  		          		</Nav>
            		
            			<Nav>
            				<Nav.Link href="#" className=""  style={{color : "#ffffff"}}>CONNECT WALLET</Nav.Link>
            			</Nav>
        		</Container>
      		</Navbar>

      		<div className="div-1">
      			<hr />
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>E</span>XPLORE <span style={{color:"#51E8EF"}}>T</span>HE <span style={{color:"#51E8EF"}}>M</span>ARKETPLACE</h1>
      			<hr />
      		</div>

      		<div className="div-2">
      			<h3 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>S</span>EARCH <span style={{color:"#51E8EF"}}>B</span>Y <span style={{color:"#51E8EF"}}>T</span>IERS</h3>
      			<hr />

      			<div className="row">
					<div className="col-sm-4">
    					<div className="card" style={{background : "#000000", width : "25rem", height : "30rem"}}>
      						<div className="card-body">
        						<h3 className="card-title"><span style={{color:"#FFD700",opacity : "75%"}}>Gold Tier</span></h3>
      							<hr />
      						</div>
    					</div>
  					</div>

  					<div className="col-sm-4">
    					<div className="card" style={{background : "#000000", width : "25rem", height : "30rem"}}>
      						<div className="card-body">
      							<h3 className="card-title"><span style={{color:"#C0C0C0"}}>Silver Tier</span></h3>
        						<hr />
        					</div>
    					</div>
  					</div>

  					<div className="col-sm-4">
    					<div className="card" style={{background : "#000000", width : "25rem", height : "30rem"}}>
      						<div className="card-body">
           						<h3 className="card-title"><span style={{color:"#CD7F32"}}>Bronze Tier</span></h3>
      							<hr />
      						</div>
    					</div>
  					</div>
				</div>
      		</div>

      		<div className="div-3">
      			<h3 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>S</span>EARCH <span style={{color:"#51E8EF"}}>B</span>Y <span style={{color:"#51E8EF"}}>P</span>LAYER</h3>
      			<hr />

      			<div className="row">
					<div className="col">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
        						<h4 className="card-title" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>M</span>S</h4>
      							<h6 className="card-title" style={{color:"#ffffff"}}>07</h6>
      							<hr />
      						</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
      							<h4 className="card-title" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>S</span>T</h4>
      							<h6 className="card-title" style={{color:"#ffffff"}}>10</h6>
        						<hr />
        					</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-title" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>V</span>K</h4>
      							<h6 className="card-title" style={{color:"#ffffff"}}>18</h6>
      							<hr />
      						</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-title" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>H</span>P</h4>
      							<h6 className="card-title" style={{color:"#ffffff"}}>33</h6>
      							<hr />
      						</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-title" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>R</span>P</h4>
      							<h6 className="card-title" style={{color:"#ffffff"}}>17</h6>
      							<hr />
      						</div>
    					</div>
  					</div>

				</div>
      		</div>

      		<hr />
		</div>
	)
}

export default Marketplace;