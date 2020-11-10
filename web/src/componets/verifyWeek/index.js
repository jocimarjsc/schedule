import React from 'react'

import './style.css'
import Days from '../days'

function VerifyWeek({ week, date, service, monthActual, month }) {
    return (
        <Days
            week={week}
            date={date}
            service={service}
            monthActual={monthActual}
            month={month}
        />
    )
}

export default VerifyWeek