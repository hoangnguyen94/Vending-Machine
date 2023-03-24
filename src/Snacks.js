import React, { useState } from "react";
import snacksImg from "./Snacks.png";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Snacks.css";

const Snacks = () =>
{
    const [ bags, setBags ] = useState( [] );

    const handleClick = () =>
    {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setBags( lastBags => [ ...lastBags, { x, y } ] );
    };

    const b = bags.map((bag, i) => (
        <img
          key={i}
          src={snacksImg}
          className="bag"
          style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
          alt="bag of lay's chips"
        />
      ));
      return (
        <div className="Snacks">
          <Message>
            <h1>bags eaten: {bags.length}</h1>
            <button onClick={handleClick}>yummy yummy</button>
            <h1>
              <Link to="/">go back</Link>
            </h1>
          </Message>
          {b}
        </div>
      );
};

export default Snacks;