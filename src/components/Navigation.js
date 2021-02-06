import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    return (
    <div className="nav">
        <Link id="nav" to="/">Home</Link>
        <Link id="nav" to= "/about">
            About
        </Link>
    </div>
    );
}

export default Navigation;