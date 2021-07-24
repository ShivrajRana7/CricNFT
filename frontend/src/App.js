import St from './ST.js'
import Web3 from'web3';
import {useState,useEffect} from 'react';
import './App.css';

function App() {
  
  let web3 = new Web3("https://rinkeby.infura.io/v3/a12326907af44f64a683a068d3b54de2");

  const [web3objectDetails,setWeb3Object] = useState({
    web3Account : "",
    web3AccountNetworkId: ""
  });

  useEffect(() =>  {
    loadWeb3();
    loadBlockchainData();
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

  return (
    <div className="app">
      <St />
    </div>
  );

}

export default App;
