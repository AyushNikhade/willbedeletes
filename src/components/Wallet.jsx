import { useState } from "react";
import ABI from "../abi.json";
import Web3 from "web3";

const Wallet = () => {
    const [connected, setConnected] = useState(true);
    const isAndroid = /android/i.test(navigator.userAgent);
    const init = async () => {
        try {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const contract = new web3.eth.Contract(
                ABI,
                "0xAe64C83f5363bbeDa0ffB3083be1C95C38d5F4f3"
            );
            setConnected(false);
            //  saveState({web3:web3,contract:contract});

            console.log(contract);
            const response = await contract.methods.getTotalReportCount().call()
            console.log("DATA: ", response);
            const response1 = await contract.methods.getAuthorityCount().call()
            console.log(response1);
            
        } catch (error) {
            alert("Please Install Metamask");
        }

    }
    return <>
        <div className="header">
            {isAndroid && <button className="connectBTN">
                <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
            </button>}
            <button className="connectBTN" onClick={init} disabled={!connected}> {connected ? "Connect Metamask" : "Connected"}</button>
        </div>
    </>
}
export default Wallet;