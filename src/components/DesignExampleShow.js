import React, { useState } from "react";

const DesignExampleShow = (props) => {
    const [focusedImg, setFocusedImg] = useState(0)
    
    function checkFocus(slideIndex) {
        let idSelection = " "
        if (slideIndex === focusedImg) {
            idSelection = 'focused'
        } else if (slideIndex === focusedImg - 1) {
            idSelection = 'prev'
        } else if (slideIndex === focusedImg + 1) {
            idSelection = 'next'
        }
        return idSelection
    }
    
        const nextClick = event => {
            if (focusedImg === props.data.images.length-1) {
                setFocusedImg(0)
            } else {
                setFocusedImg(focusedImg +1)
            }
        }

        const prevClick = event => {
            if (focusedImg === 0) {
                setFocusedImg(props.data.images.length-1)
            } else {
                setFocusedImg(focusedImg -1)
            }
        }
        
        const slideshowMap = props.data.images.map((image, index) => {
            return (<div key={index} id={checkFocus(index)} className='slide' >
                <img src={image.src} alt={image.alt} />
            </div>)
        })

    return <>
        <div className="design-example-text"><h2>{props.data.title}</h2><p>{props.data.body}</p></div>
        <div className="image-carousel">
            <div onClick={prevClick}>P</div>
                <div className="carousel-container">
                    {slideshowMap}
                </div>
            <div onClick={nextClick}>N</div>
        </div>
        </>
}

export default DesignExampleShow