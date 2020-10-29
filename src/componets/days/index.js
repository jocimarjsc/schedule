import React, { useState } from 'react';

import './style.css';
import Task from '../task';
import Modal from '../modal';

function Days({ week, date, service, monthActual }) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [oneDay, setOneDay] = useState('')

    function verifyStatus(serv) {
        if (serv === 'Espera') {
            return 'danger'
        } else if (serv === 'Aguardando') {
            return 'warning'
        } else {
            return 'success'
        }
    }

    function openModal(day) {
        setIsModalVisible(true)
        setOneDay(day)
    }

    return week === 4 ?
        <>
            {isModalVisible ?
                <Modal day={oneDay} monthActual={monthActual} close={() => setIsModalVisible(false)} />
                : null
            }
            <div className="tasks"></div>
            <div className="tasks"></div>
            <div className="tasks"></div>
            <div className="tasks"></div>
            {date.map(day => (
                <div key={day} className="tasks">
                    <span>{day}</span>
                    <div className="task">
                        {service.map(serv => (
                            serv.delivery_date.substr(0,2) == day ?
                                <Task
                                    key={serv.id}
                                    service={serv}
                                    status={verifyStatus(serv.status)}
                                />
                                : null
                        ))}
                        <div className='add-modal' onClick={() => openModal(day)}>Adicionar</div>
                    </div>
                </div>
            ))}
        </> : null
}

export default Days