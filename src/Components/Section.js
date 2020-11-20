import React from "react"
import "./css/Section.css"

const Section = ({ children, id }) => {
    return (
        <div>
            <div id={id} className="section">{children}</div>
        </div>
    )
}

export default Section