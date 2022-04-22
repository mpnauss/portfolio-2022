import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const SlideShow = (props) => {
    const [focusedImg, setFocusedImg] = useState(0)

    useEffect(() => {
        setFocusedImg(0)
    }, [props.data])    

        const handleSwipe = useSwipeable({
            onSwipedLeft: () => determineFocus(focusedImg +1),
            onSwipedRight: () => determineFocus(focusedImg -1)
        })


    const slideshowMap = props.data.map((image, index) => {
        return (<div key={index} className='slide' >
            <img src={image.src} alt={image.alt} />
        </div>)
    })

    const determineFocus = (index) => {
        if (index < 0) {
            index = 0
        } else if (index > props.data.length - 1) {
            index = props.data.length - 1
        }
        setFocusedImg(index)
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
            <div className="arrow left-arrow" id={activateArrow('prev', focusedImg)} onClick={() => { determineFocus(focusedImg - 1) }}><div className="arrow-inside"></div></div>
            <div className="carousel-container">
                <div  {...handleSwipe} className="carousel-inner" style={{ transform: `translateX(-${focusedImg * 100}%)` }}>
                    {slideshowMap}
                </div>
            </div>
            <div className="arrow right-arrow" id={activateArrow('next', focusedImg)} onClick={() => { determineFocus(focusedImg + 1) }}><div className="arrow-inside"></div></div>
        </div>
    </>)
}

export default SlideShow;