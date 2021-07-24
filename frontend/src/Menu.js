import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
	return(
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
	)
}

export default Menu;