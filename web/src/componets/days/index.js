import React, { useState } from 'react';

import './style.css';
import Task from '../task';
import Modal from '../modal';

function Days({ week, date, service, monthActual, month }) {
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

    return week === 0 ?
        <>
            {isModalVisible ?
                <Modal day={oneDay} monthActual={monthActual} close={() => setIsModalVisible(false)} />
                : null
            }

            {date.map(day => (
                <div key={day} className="tasks">
                    <span>{day}</span>
                    <div className="task">
                        {service.map(serv => (
                            service.day == day && service.month === month ?
                                <Task
                                    key={serv.id}
                                    service={serv}
                                    status={verifyStatus(serv.status)}
                                    months={month}
                                />
                                : null
                        ))}
                        <div className='add-modal' onClick={() => openModal(day)}>Adicionar</div>
                    </div>
                </div>
            ))}
        </> :
        week === 1 ?
            <>
                {isModalVisible ?
                    <Modal day={oneDay} monthActual={monthActual} close={() => setIsModalVisible(false)} />
                    : null
                }
                <div className="tasks"></div>
                {date.map(day => (
                    <div key={day} className="tasks">
                        <span>{day}</span>
                        <div className="task">
                            {service.map(serv => (
                                serv.day == day ?
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
            </> :
            week === 2 ?
                <>
                    {isModalVisible ?
                        <Modal day={oneDay} monthActual={monthActual} close={() => setIsModalVisible(false)} />
                        : null
                    }
                    <div className="tasks"></div>
                    <div className="tasks"></div>
                    {date.map(day => (
                        <div key={day} className="tasks">
                            <span>{day}</span>
                            <div className="task">
                                {service.map(serv => (
                                    serv.day == day ?
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
                </> :
                week === 3 ?
                    <>
                        {isModalVisible ?
                            <Modal day={oneDay} monthActual={monthActual} close={() => setIsModalVisible(false)} />
                            : null
                        }
                        <div className="tasks"></div>
                        <div className="tasks"></div>
                        <div className="tasks"></div>
                        {date.map(day => (
                            <div key={day} className="tasks">
                                <span>{day}</span>
                                <div className="task">
                                    {service.map(serv => (
                                        serv.day == day ?
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
                    </> :
                    week === 4 ?
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
                                            serv.day == day ?
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
                        </> :
                        week === 5 ?
                            <>
                                {isModalVisible ?
                                    <Modal day={oneDay} monthActual={monthActual} close={() => setIsModalVisible(false)} />
                                    : null
                                }
                                <div className="tasks"></div>
                                <div className="tasks"></div>
                                <div className="tasks"></div>
                                <div className="tasks"></div>
                                <div className="tasks"></div>
                                {date.map(day => (
                                    <div key={day} className="tasks">
                                        <span>{day}</span>
                                        <div className="task">
                                            {service.map(serv => (
                                                serv.day == day ?
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
                            </> :
                            week === 6 ?
                                <>
                                    {isModalVisible ?
                                        <Modal day={oneDay} monthActual={monthActual} close={() => setIsModalVisible(false)} />
                                        : null
                                    }
                                    <div className="tasks"></div>
                                    <div className="tasks"></div>
                                    <div className="tasks"></div>
                                    <div className="tasks"></div>
                                    <div className="tasks"></div>
                                    <div className="tasks"></div>
                                    {date.map(day => (
                                        <div key={day} className="tasks">
                                            <span>{day}</span>
                                            <div className="task">
                                                {service.map(serv => (
                                                    serv.day == day ?
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