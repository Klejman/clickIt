import React from "react";
import "./nav.css";

const Nav = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
             Avatar ClickIt Game
            </li>
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
)

export default Nav;