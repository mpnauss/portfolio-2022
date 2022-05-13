import React from "react";

const DesignExamplesNav = (props) => {

    const navMap = props.data.map((example, index) => {
        let classValue="unselected-nav"
        if (index === props.focusedExample) {
            classValue = "selected-nav"
        } else {
            classValue = "unselected-nav"
        }
        let linkText
        if (window.screen.width <= 768) {
            linkText=example.id
        } else {
            linkText=example.title
        }
        return (
            <div key={index} className={classValue}>
                <div className="examples-nav-item" onClick={
                    (e) => {
                        props.setTransition(false)
                        // props.setFocusedExample(index)
                        setTimeout(() => {props.setFocusedExample(index)}, 100)
                        setTimeout(() => {props.setTransition(true)}, 100)
                    }}>{linkText}</div>
            </div>
        )
    })

    return <div className="design-examples-title"><h2>Design Examples</h2><div className="examples-nav-list">{navMap}</div></div>
}

export default DesignExamplesNav