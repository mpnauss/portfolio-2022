import React, { useState } from 'react';
import DesignExamplesNav from './DesignExamplesNav.js';
import DesignExampleShow from './DesignExampleShow.js';
import { CSSTransition } from 'react-transition-group';

const DesignExamples = (props) => {
  const [focusedEx, setFocusedEx] = useState(0)
  const [transition, setTransition] = useState(true)
  // const [focusedImg, setFocusedImg] = useState(0)

  const transitionTime = 600

  const selectExample = (index) => {
    setFocusedEx(index)
  }

  return (
    <>
      <div>
        <CSSTransition in={transition} classNames='example' timeout={transitionTime}>
        <div className="design-examples">
          <DesignExampleShow 
          data={props.data[focusedEx]} 
          focusChange={focusedEx}
          // setFocusedImg={setFocusedImg} 
          // focusedImg={focusedImg}
           />
        </div>
        </CSSTransition>
        
          <DesignExamplesNav 
          data={props.data}
          selectExample={selectExample}
          selected={focusedEx} 
          transitionState={setTransition}
          timing={transitionTime/2}
          // setFocusedImg={setFocusedImg}
          />
      </div>
    </>
  )
}

export default DesignExamples