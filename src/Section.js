import React from 'react'
import './Section.css'
function Section({ Icon, title, selected }) {
    return (
        <div className={`section ${selected && "section--selected"}`}
            style={{
                borderBottom: '3px solid #0b57d0',
                color: `${selected && "#0b57d0"}`
            }}
        >
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default Section
