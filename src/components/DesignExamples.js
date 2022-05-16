import React, { useState, useEffect } from 'react';
import DesignExamplesNav from './DesignExamplesNav.js';
import LongCarousel from './LongCarousel.js';
import webProjects from '../data/webProjectData.js';



const DesignExamples = (props) => {
  const [focusedExample, setFocusedExample] = useState(0)
  const [focusedImage, setFocusedImage] = useState(0)
  const [transition, setTransition] = useState(true)



  const checkFocusExample = () => {
    if (imagesArray[focusedImage].projectId !== focusedExample) {
        setTransition(false)
        setTimeout(() => {setFocusedExample(imagesArray[focusedImage].projectId)}, 100)
        setTimeout(()=>{setTransition(true)}, 100)
    }
  }
  useEffect(() => {
      checkFocusExample();
  }, [focusedImage])

  const checkImageSelect = () => {
    if (imagesArray[focusedImage].projectId !== focusedExample) {
      setFocusedImage(imagesArray.find(image => image.projectId === focusedExample).id)
    }
  }

  useEffect(() => {
    checkImageSelect()
  }, [focusedExample])

  //create an array of image objects including projectId info
  let imagesArray = []
  let imagecount = 0
  props.data.forEach((project, index) => {
      project.images.forEach(image => {
          let imageObj = {id: imagecount, 
          projectId: index,
          filename: image.filename,
          alt: image.alt
      }
      imagesArray.push(imageObj)
      imagecount++
      })
  })

  return <>
    <LongCarousel 
      data={webProjects}
      images={imagesArray}
      focusedExample={focusedExample}
      focusedImage={focusedImage}
      setFocusedExample={setFocusedExample}
      setFocusedImage={setFocusedImage}
      transition={transition}
      setTransition={setTransition}
      />
    <DesignExamplesNav 
      data={webProjects}
      images={imagesArray}
      focusedExample={focusedExample}
      focusedImage={focusedImage}
      setFocusedExample={setFocusedExample}
      setFocusedImage={setFocusedImage}
      transition={transition}
      setTransition={setTransition}
    />
    </>
}

export default DesignExamples