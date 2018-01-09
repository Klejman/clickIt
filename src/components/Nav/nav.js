import React from "react";
import "./nav.css";

const Nav = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Avatar ClickIt Game</a>
            </li>
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
)

export default Nav;