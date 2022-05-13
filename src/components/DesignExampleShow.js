import React from "react";
import SlideShow from "./SlideShow";

const DesignExampleShow = (props) => {
   
    return <>
        <div className="design-example-text"><h2>{props.data.title}</h2><p className="role-info">{props.data.role}</p><p>{props.data.body}</p></div>
        <SlideShow 
            data={props.data.images} 
            focusedImg={props.focusedImg} 
            setFocusedImg={props.setFocusedImg} 
        />
        </>
}

export default DesignExampleShow