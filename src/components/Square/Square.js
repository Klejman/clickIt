import React from 'react';

const Square= props => {
    return(
        <div
            style={{backgroundImage: `url($(props.image`}}
            className = "square"
            onClick{() =>  props.handleClick(props.id)}
        />
    )
};




export default Square;

//props how  data is passed from a parent to a child
//whatever props square has it in is passed from Game
// connect by having square components in render function
// parent is connected through the