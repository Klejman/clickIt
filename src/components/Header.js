import React from 'react';

const Nav = (props)=> (
    <nav style={{background: 'linear-gradient(124deg,#91B4B2,#F4FBFD,pink)'}} className={"navbar navbar-default sticky-top"}>
        <div className={"container"}>
            <div>Avatar Mix-up Game</div>
            <br/>
            <div>Score:{props.score}| Top Score: {props.topScore}</div>
        </div>
    </nav>
);

export default Nav;