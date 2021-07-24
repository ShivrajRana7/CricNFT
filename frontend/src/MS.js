import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './MS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ms(){

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
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>M</span>S</h1>
      			<hr />
      		</div>

            <div className="div-2">
                <p><span style={{color:"#51E8EF"}}>M</span>AHENDRA <span style={{color:"#51E8EF"}}>S</span>INGH <span style={{color:"#51E8EF"}}>D</span>HONI, one of the most dynamic captain on the field , a personality I truly adore. <span style={{color:"#51E8EF"}}>D</span>HONI is known as one of the best ODI captain the game of cricket has seen and will forever be for a very long time. Some of his decisions on the field will make you scratch your head. People think he is a person who always follow his instincts, makes decision by his gut feelings and what not but in my opinion he is the better observer of the game.</p>
                <p>Under Dhoni's captaincy, India won the 2007 International Cricket Council (ICC) World Twenty20, the Commonwealth Bank Series of 2007–08, the 2010 Asia Cup, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy.</p>
                <p>
                    <span style={{color:"#51E8EF"}}>Q</span>ualities <span style={{color:"#51E8EF"}}>:</span>
                    <ul>
                        <li>Handling Success</li>
                        <li>Trust your instinct</li>
                        <li>Competitor respect</li>
                        <li>Lead from the front</li>
                        <li>His wicket keeping skills</li>
                        <li>His power</li>
                        <li>Staying Focused</li>
                        <li>His Attitude</li>
                        <li>His leadership skills</li>
                    </ul>
                </p><br />
                <p>Here, are some of the greatest and memorable moment of the <span style={{color:"#51E8EF"}}>M</span>S <span style={{color:"#51E8EF"}}>D</span>HONI in the form of <span style={{color:"#51E8EF"}}>NFTs</span>.</p>
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

export default Ms;