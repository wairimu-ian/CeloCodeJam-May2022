import React, {useEffect, useState} from "react";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import marketPlaceContract from "../abis/Marketplace.json";

const [web3, setWeb3] = useState(null)
const loadWeb3 = () => {
    if(typeof window.ethereum !== "undefined") {
        const web3 = new Web3(window.ethereum)
        setWeb3(web3);
        let kit = newKitFromWeb3(web3);
        const accounts =  web3.eth.getAccounts()
        const account = accounts[0]
        console.log(account)
    }

function App() {
    useEffect(() => {
        loadWeb3();
    })
    return (
        <>
            <Home />
        </>
    );
    }
}