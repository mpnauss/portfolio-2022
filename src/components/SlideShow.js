import React from 'react';
import XboxScreens from '../images/xbox_screens_lg.png'

const SlideShow = (props) => {


     return (<>
        <div className="slide-image">
          {/* <div className='arrow left-arrow'>
            <div className='arrow-inside'></div>
          </div> */}
          <div className='slide'><img src={XboxScreens} /></div>
          {/* <div className='arrow right-arrow'>
            <div className='arrow-inside'></div>
          </div> */}
        </div>
      </>

    )
  }

export default SlideShow;