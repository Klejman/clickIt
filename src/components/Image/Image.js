import React from 'react';

const Image = (props) => (

    <img className={"img-thumbnail"} src={require(`../../../../clickngo/public/assets/img`)} alt={props.imgSrc}/>

);

export default Image;