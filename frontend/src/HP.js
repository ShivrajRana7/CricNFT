import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './HP.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hp(){

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
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>H</span>P</h1>
      			<hr />
      		</div>

      		<div className="div-3">
      			<div className="row">
					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">

      						</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
      							
        					</div>
    					</div>
  					</div>

  					<div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						
      						</div>
    					</div>
  					</div>

                      <div className="col-sm-2">
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						
      						</div>
    					</div>
  					</div>
				</div>
      		</div>

            <hr />

		</div>
    )
}

export default Hp;