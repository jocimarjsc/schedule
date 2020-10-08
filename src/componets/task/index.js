import React from 'react'

import './style.css'

function Task({ service, open, status }) {
    
    return (
        <>
        <p
            key={service.id}
            className={status}
        >
            {service.name}
        </p>
        </>
    )
}

export default Task