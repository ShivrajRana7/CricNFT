import React, {useEffect,useState} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './MS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3 from'web3';
import axios from 'axios';

function Ms(){
   const [isLoading,setLoading] = useState(false);
   const [assetArray,setAssetArray] = useState([]);

   const OPENSEA_BASE_URL = "https://testnets-api.opensea.io/api/v1/";
   const OPENSEA_ASSET_APPEND = "assets";
   const OPENSEA_JSON_PARAM = "format=json";



   let web3 = new Web3("https://rinkeby.infura.io/v3/a12326907af44f64a683a068d3b54de2");

   const [web3objectDetails,setWeb3Object] = useState({
	 web3Account : "",
	 web3AccountNetworkId: ""
   });
 
   useEffect(() =>  {
	 loadWeb3();
	 loadBlockchainData();
	 getRequest();
   },[]);
 
   async function loadWeb3 (){
	 if (window.ethereum) {
	   window.web3 = new Web3(window.ethereum)
	   await window.ethereum.enable()
	 }
	 else if (window.web3) {
	   window.web3 = new Web3(window.web3.currentProvider)
	 }
	 else {
	   window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
	 }
   }
   
   async function loadBlockchainData() {
	 const web3 = window.web3;
	 // Load account
	 const accounts = await web3.eth.getAccounts();
	 console.log(accounts[0]);
	 const networkId = await web3.eth.net.getId();
	 console.log(networkId);
	 setWeb3Object({
	   web3Account: accounts[0],
	   web3AccountNetworkId : networkId
	 })
   }
   
   async function getRequest() {
	setLoading(true);
		var url = OPENSEA_BASE_URL + OPENSEA_ASSET_APPEND + '?' + OPENSEA_JSON_PARAM + '&owner=0x9a83886b295DbfcE2f96C439570519D029a289E7';
        var response = await axios.get(url);
		setLoading(false);
		var assets = response.data['assets'];
		console.log(assets);
		setAssetArray(assets);


   }
   
   

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
					

  					<ImageAssetComponent assetData={assetArray}/>

  					

                    
				</div>
      		</div>

            <hr />

		</div>
    )
}

const ImageAssetComponent = ({assetData}) => {
	return ( assetData.map(element => (
		<div className="col-sm-2" key={element["id"]}>
	<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
		  <div className="card-body">
			 <video src={element["image_original_url"]} style={{height : "400px"}} autoPlay muted controls="true"></video>
		  </div>
	</div>
  </div>
	)) );
}
 

export default Ms;