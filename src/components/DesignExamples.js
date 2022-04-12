import React, { useState } from 'react';
import DesignExamplesNav from './DesignExamplesNav.js';
import DesignExampleShow from './DesignExampleShow.js';

const DesignExamples = (props) => {
  const [focusedEx, setFocusedEx] = useState(0)

  const selectExample = (index) => {
    setFocusedEx(index)
  }

  return (
    <>
      <div className="none">
        <div className="design-examples">
          <DesignExampleShow data={props.data[focusedEx]} />
        </div>
          <DesignExamplesNav 
          data={props.data}
          selectExample={selectExample} />
      </div>
    </>
  )
}

export default DesignExamples