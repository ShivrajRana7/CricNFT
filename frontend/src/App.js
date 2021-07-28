import Menu from './Menu.js';
import Marketplace from './Marketplace.js';
import Slider from './Body.js';
import Gold from './Gold.js';
import Silver from './Silver.js';
import Bronze from './Bronze.js';
import Legendary from './Legendary.js';
import Ms from './MS.js';
import Rs from './RS';
import Vk from './VK';
import Hp from './HP';
import Rp from './RP';
import Sr from './SR';
import Ar from './AR.js';
import Am from './AM';
import Rj from './RJ.js';
import Mp from './MP.js';
import Ps from './PS.js';
import Ds from './DS.js';
import Kp from './KP.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Web3 from'web3';
import {useState,useEffect} from 'react';
import './App.css';

function App() {
  
  // let web3 = new Web3("https://rinkeby.infura.io/v3/a12326907af44f64a683a068d3b54de2");

  // const [web3objectDetails,setWeb3Object] = useState({
  //   web3Account : "",
  //   web3AccountNetworkId: ""
  // });

  // useEffect(() =>  {
  //   loadWeb3();
  //   loadBlockchainData();
  // },[]);

  // async function loadWeb3 (){
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum)
  //     await window.ethereum.enable()
  //   }
  //   else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider)
  //   }
  //   else {
  //     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  //   }
  // }
  
  // async function loadBlockchainData() {
  //   const web3 = window.web3;
  //   // Load account
  //   const accounts = await web3.eth.getAccounts();
  //   console.log(accounts[0]);
  //   const networkId = await web3.eth.net.getId();
  //   console.log(networkId);
  //   setWeb3Object({
  //     web3Account: accounts[0],
  //     web3AccountNetworkId : networkId
  //   })
  // }

  return (
    <div className="app">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Slider} />
          <Route path="/Marketplace" component={Marketplace} />
          <Route path="/gold-tier" component={Gold} />
          <Route path="/silver-tier" component={Silver} />
          <Route path="/bronze-tier" component={Bronze} />
          <Route path="/legendary-tier" component={Legendary} />
          <Route path="/ms-dhoni" component={Ms} />
          <Route path="/rohit-sharma" component={Rs} />
          <Route path="/virat-kholi" component={Vk} />
          <Route path="/hardik-pandya" component={Hp} />
          <Route path="/rishabh-pant" component={Rp} />
          <Route path="/suresh-raina" component={Sr} />
          <Route path="/ambati-rayudu" component={Ar} />
          <Route path="/amit-mishra" component={Am} />
          <Route path="/ravindra-jadeja" component={Rj} />
          <Route path="/manish-pandey" component={Mp} />
          <Route path="/prithivi-shaw" component={Ps} />
          <Route path="/dwayne-smith" component={Ds} />
          <Route path="/kieron-pollard" component={Kp} />
        </Switch>
      </Router>
      
    </div>
  );

}

export default App;
