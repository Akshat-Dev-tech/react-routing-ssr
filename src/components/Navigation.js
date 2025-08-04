import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/about/nested1">Nested Route 1</Link>
        <Link to="/about/nested2">Nested Route 2</Link> */}
    </div>
)

export default Navigation;