import React from 'react';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Slider(){
	return(
		<>
			<Container>
				<div className="heading">
					<h3 className="card-title">CONNECT <span style={{color:"#51E8EF"}}>CRICKET</span> MEMORABLE MOMENTS<span style={{color:"#51E8EF"}}>!!</span></h3>
        			<h4 className="card-title">Buy and collect <span style={{color:"#51E8EF"}}>C</span>RICKET <span style={{color:"#51E8EF"}}>NFTs.</span></h4>
					<br />
					<hr  style={{padding : "0.15rem", color : "#555"}} />
				</div>
				
				<div className="video">
					<div className="card">
  						<div className="card-body">

 		 				</div>
					</div>
				</div>

				<div className="btn">
						<Link to="/Marketplace" style={{textDecoration : "none"}}><Button>START COLLECTION</Button></Link>
				</div>
				<br />
				<br />
				<hr />
				
				<div className="footer">
					{/* <div className="footer-left">
						<Link to="/Marketplace" style={{ textDecoration: 'none' }}><span style={{color : "#ffffff"}}>Marketplace</span></Link><br /><br />
						<Link to="/giveaway" style={{ textDecoration: 'none' }}><span style={{color : "#ffffff"}}>Giveaways</span></Link><br /><br />
						<Link to="/about" style={{ textDecoration: 'none' }}><span style={{color : "#ffffff"}}>About</span></Link>
					</div> */}
					
					<div className="footer-right">
						{/* <img src="./Images/cricshot.png" /><br /> */}
						<small className="small" style={{color : "#ffffff"}}>&#169; 2021 CRICSHOT. ALL RIGHTS ARE RESERVED</small>
					</div>
				</div>
			</Container>
		</>
	)
}

export default Slider;