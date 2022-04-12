import React from "react";

const ImageSlide = (props) => {
    return <><div className='slide' id={props.idName}>
    <img src={props.image} alt={props.alt} />
</div></>
}

export default ImageSlide