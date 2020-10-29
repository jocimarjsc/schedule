import React from 'react'

import './style.css'
import Days from '../days'

function VerifyWeek({ week, date, service, monthActual }) {
    return (
        <Days
            week={week}
            date={date}
            service={service}
            monthActual={monthActual}
        />
    )
}

export default VerifyWeek