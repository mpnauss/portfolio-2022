import React from "react";
import SlideShow from "./SlideShow";
import { CSSTransition } from 'react-transition-group';

const LongCarousel = props => {

    let examplesMap = props.data.map((project, index) => {
        return (<div key={index} className="design-example-text">
            <h2>{project.title}</h2>
            <p className="role-info">{project.role}</p>
            <p>{project.body}</p>
            </div>)
    })

    return <div className="design-examples">
        <CSSTransition in={props.transition} classNames='example' timeout={100}  >
        {examplesMap[props.focusedExample]}
        </CSSTransition>
        <SlideShow 
        data={props.images}
        focusedImg={props.focusedImage}
        focusedExample={props.focusedExample}
        setFocusedImg={props.setFocusedImage}
        setFocusedExample={props.setFocusedExample}
        transition={props.transition}
        setTransition={props.setTransition}
        />
        </div>
}

export default LongCarousel