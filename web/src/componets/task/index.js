import React, { useState } from 'react';

import './style.css';
import ModalView from '../modalView';
import { useEffect } from 'react';

import api from '../../services/api';

function Task({ idService, status, year }) {
    const [isModalView, setIsModalView] = useState(false);
    const [service, setService] = useState([])

    useEffect(() => {
        async function getService(id) {
            await api.get(`/services/${id}`).then(response => setService(response.data));
        }

        getService(idService)
    }, [isModalView])

    function verifyStatus(serv) {
        if (serv === 'Espera') {
          return 'danger'
        } else if (serv === 'Aguardando') {
          return 'warning'
        } else {
          return 'success'
        }
      }

    function openModalView() {
        setIsModalView(true);
    }

    return (
        <>
            {isModalView ?
                <ModalView idService={service.id} close={() => setIsModalView(false)} year={year} />
                : null
            }
            <p
                key={service.id}
                className={verifyStatus(service.status)}
                onClick={() => openModalView()}
            >
                {service.id} - {service.name}
            </p>
        </>
    )
}

export default Task