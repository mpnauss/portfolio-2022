import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const SlideShow = (props) => {
        const handleSwipe = useSwipeable({
            onSwipedLeft: () => determineFocus(props.focusedImg +1),
            onSwipedRight: () => determineFocus(props.focusedImg -1)
        })

    let slideshowMap = props.data.map((image, index) => {
        let imgsrc=`images/${image.filename}.jpg`
        let imgsrcset=`images/${image.filename}_360.jpg 360w, images/${image.filename}_650.jpg 650w, images/${image.filename}_810.jpg 810w, images/${image.filename}.jpg 1000w`
        return (<div key={index} className='slide' >
            <img alt={image.alt} srcSet={imgsrcset} sizes='(max-width: 428px) 360px, (max-width: 1258px) 650px, (max-width: 1534px) 809px, 999px' />
        </div>)
    })

    useEffect(() => {
        slideshowMap = []  
    }, [props.data])    

    const determineFocus = (index) => {
        if (index < 0) {
            index = 0
        } else if (index > props.data.length - 1) {
            index = props.data.length - 1
        }
        props.setFocusedImg(index)

    }
    const activateArrow = (dir, focusedIndex) => {
        if (dir === "next" && focusedIndex === props.data.length - 1) {
            return ' '
        } else if (dir === 'prev' && focusedIndex === 0) {
            return ' '
        } else {
            return 'active-arrow'
        }
    }
    return (<>
        <div className="image-carousel">
            <div className="arrow left-arrow" id={activateArrow('prev', props.focusedImg)} onClick={() => { determineFocus(props.focusedImg - 1) }}><div className="arrow-inside"></div></div>
            <div className="carousel-container">
                <div  {...handleSwipe} className="carousel-inner" style={{ transform: `translateX(-${props.focusedImg * 100}%)` }}>
                    {slideshowMap}
                </div>
            </div>
            <div className="arrow right-arrow" id={activateArrow('next', props.focusedImg)} onClick={() => { determineFocus(props.focusedImg + 1) }}><div className="arrow-inside"></div></div>
        </div>
    </>)
}

export default SlideShow;