import React from 'react';
import Hero from './Hero';
import DesignExamples from './DesignExamples'
import webProjectData from '../data/webProjectData.js'

function Portfolio() {
    return(
        <div>
            <Hero />
            <DesignExamples 
                data={webProjectData}
                name="Web Projects" 
            />
        </div>
    )
};

export default Portfolio;