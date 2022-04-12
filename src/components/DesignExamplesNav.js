import React from "react";

const DesignExamplesNav = (props) => {

    const navMap = props.data.map((example, index) => {
        return (
            <div key={index} className="unselected-nav">
                <div className="examples-nav-item" onClick={(e) => {props.selectExample(index)}}>{example.title}</div>
            </div>
        )
    })

    return <div className="design-examples-title"><h2>Design Examples</h2>{navMap}</div>
}

export default DesignExamplesNav