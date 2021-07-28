import React from 'react';
import {Navbar,Nav,Container,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Marketplace.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Marketplace(){

	return(

			<Container>
      		<div className="div-1">
      			<hr />
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>E</span>XPLORE <span style={{color:"#51E8EF"}}>T</span>HE <span style={{color:"#51E8EF"}}>M</span>ARKETPLACE</h1>
      			<hr />
      		</div>

      		<div className="tier">
				<h3 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>S</span>EARCH <span style={{color:"#51E8EF"}}>B</span>Y <span style={{color:"#51E8EF"}}>T</span>IERS</h3>
      			<hr />
			</div>
			  
			<div className="div-2">
      			<div className="row">
				  <div className="">
					  	<Link to="legendary-tier" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "80rem", height : "12rem"}}>
      						<div className="card-body">
           						<h3 className="card-titlee"><span style={{color:"#0275d8"}}>Legendary Tier</span></h3>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="">
					<Link to="gold-tier" style={{ textDecoration: 'none' }}>
						<div className="card" style={{background : "#000000", width : "80rem", height : "12rem"}}>
      						<div className="card-body">
        						<h3 className="card-titlee"><span style={{color:"#FFD700",opacity : "75%"}}>Gold Tier</span></h3>
      							<hr />
      						</div>
    					</div>
					</Link>
  					</div>

  					<div className="">
					  <Link to="silver-tier" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "80rem", height : "12rem"}}>
      						<div className="card-body">
      							<h3 className="card-titlee"><span style={{color:"#C0C0C0"}}>Silver Tier</span></h3>
        						<hr />
        					</div>
    					</div>
						</Link>
  					</div>

  					<div className="">
					  <Link to="bronze-tier" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "80rem", height : "12rem"}}>
      						<div className="card-body">
           						<h3 className="card-titlee"><span style={{color:"#CD7F32"}}>Bronze Tier</span></h3>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>
				</div>
      		</div>
			<hr />
			<div className="player">
				<h3 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>S</span>EARCH <span style={{color:"#51E8EF"}}>B</span>Y <span style={{color:"#51E8EF"}}>P</span>LAYER</h3>
      			<hr />
			</div>
      		
			<div className="div-3">
      			<div className="row">
					<div className="col">
						<Link to="/ms-dhoni" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
        						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>M</span>S</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>7</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

  					<div className="col">
						<Link to="/rohit-sharma" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
      							<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>R</span>S</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>45</h6>
        						<hr />
        					</div>
    					</div>
						</Link>
  					</div>

  					<div className="col">
					  	<Link to="/virat-kholi" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>V</span>K</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>18</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

  					<div className="col">
						<Link to="/hardik-pandya" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>H</span>P</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>33</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/rishabh-pant" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>R</span>P</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>17</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/suresh-raina" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>S</span>R</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>17</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/ambati-rayudu" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>A</span>R</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>5</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/amit-mishra" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>A</span>M</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>99</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/ravindra-jadeja" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>R</span>J</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>8</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/manish-pandey" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>M</span>P</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>21</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/prithivi-shaw" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>P</span>S</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>100</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/dwayne-smith" style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>D</span>S</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>50</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>
					
					<div className="col">
						<Link to="/kieron-pollard"  style={{ textDecoration: 'none' }}>
    					<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
      						<div className="card-body">
           						<h4 className="card-titlee" style={{color:"#ffffff"}}><span style={{color:"#51E8EF"}}>K</span>P</h4>
      							<h6 className="card-titlee" style={{color:"#ffffff"}}>55</h6>
      							<hr />
      						</div>
    					</div>
						</Link>
  					</div>
				
				</div>
      		</div>

      		<hr />
			</Container>
		
	)
}

export default Marketplace;