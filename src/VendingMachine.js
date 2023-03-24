import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";


const VendingMachine = () =>
{
    return (
        <div
            className="VendingMachine"
            style={{ backgroundImage: `url(${vendingMachineImg})` }}>
            <Message>
                <h1>Welcome to my Snacks. Please select your favorite</h1>
            </Message>
            <Message>
                <h1><Link to="/soda">Soda</Link></h1>
                <h1><Link to="/snacks">Snacks</Link></h1>
                <h1><Link to="/proteinbar">Protein Bar</Link></h1>
            </Message>
        </div> );
};

export default VendingMachine;
