import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider(){
	return(
		<>

		<div className="row" style={{margin : "115px"}}> 
  			<div className="col-6">
    			<div className="card" style={{background : "#000000", width : "25rem", height : "15rem"}}>
      				<div className="card-body" style={{color : "#ffffff"}}>
        				<h3 className="card-title">CONNECT <span style={{color:"#51E8EF"}}>CRICKET</span> MEMORABLE MOMENTS<span style={{color:"#51E8EF"}}>!!</span></h3>
        				<h4 className="card-title">Buy and collect<span style={{color:"#51E8EF"}}>CRICKET NFTs.</span></h4>
      				</div>
    			</div>
    			<div>
    				<button type="button" className="btn" style={{color : "#ffffff", background : "#0275d8", border : "none", padding : "10px"}}>START COLLECTION</button>
  				</div>
  			</div>
  			
  			<div className="col-6">
    			<div className="card" style={{background : "#000000", width : "40rem", height : "30rem"}}>

    			</div>
  			</div>	
		</div>

		<div className="row" style={{margin : "115px"}}>
			<div className="col-sm-4">
    			<div className="card" style={{background : "#000000", width : "25rem", height : "15rem"}}>
      				<div className="card-body" style={{color : "#ffffff"}}>
        				<h4 className="card-title">Purchase</h4>
        				<h3 className="card-title"><span style={{color:"#51E8EF"}}>PACKS</span></h3>
      				</div>
    			</div>
  			</div>

  			<div className="col-sm-4">
    			<div className="card" style={{background : "#000000", width : "25rem", height : "15rem"}}>
      				<div className="card-body" style={{color : "#ffffff"}}>
        				<h4 className="card-title">Build An Epic</h4>
        				<h3 className="card-title"><span style={{color:"#51E8EF"}}>COLLECTION</span></h3>
        			</div>
    			</div>
  			</div>

  			<div className="col-sm-4">
    			<div className="card" style={{background : "#000000", width : "25rem", height : "15rem"}}>
      				<div className="card-body" style={{color : "#ffffff"}}>
        				<h4 className="card-title">Win An Exclusive Rewards</h4>
        				<h3 className="card-title"><span style={{color:"#51E8EF"}}>GIVEAWAYS</span></h3>
      				</div>
    			</div>
  			</div>
		</div>

		<div className="twitter" style={{margin : "115px"}}>
			<h2 style={{color : "#ffffff"}}>Twitter SS</h2>
		</div>

		<hr />

		<div className="footer">
			<h6>Marketplace</h6>
			<h6>Giveaways</h6>
			<h6>About</h6>
		</div>

		</>
	)
}

export default Slider;