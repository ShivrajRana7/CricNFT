import React from 'react';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button } from 'react-bootstrap';

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
						<Button>START COLLECTION</Button>
				</div>

				<div className="screenshot">
					<h3 style={{color : "#ffffff"}}>Twitter</h3>
				</div>
				<br />
				<hr />
				
				<div className="footer">
					<span>Marketplace</span>
					<span>Giveaways</span>
					<span>About</span>
				</div>
			</Container>
		</>
	)
}

export default Slider;