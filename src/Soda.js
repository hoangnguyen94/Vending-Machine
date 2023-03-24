import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import sodaImg from "./Soda.png";
import "./Soda.css";

const Soda = () =>
{
    return (
        <div className="Soda">
          <img src={sodaImg} alt="pepsi can" />
          <Message>
            <h1>Sweet Drink</h1>
            <h1><Link to="/">go back</Link></h1>
          </Message>
          <img src={sodaImg} alt="pepsi can" />
        </div>
      );
};

export default Soda;