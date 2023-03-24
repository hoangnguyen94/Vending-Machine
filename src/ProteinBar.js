import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import ProteinBarImg from "./ProteinBar.png";
import "./ProteinBar.css";

const ProteinBar = () =>
{
    return (
        <div className="ProteinBar">
            <img src={ProteinBarImg} alt="clean bar" />
            <Message>
                <h1>Power ranger WUWUWU</h1>
                <h1><Link to="/">Go Back</Link></h1>
            </Message>
            <img src={ProteinBarImg} alt="clean bar" />
        </div>
    );
};

export default ProteinBar;
