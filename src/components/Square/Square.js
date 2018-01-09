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
