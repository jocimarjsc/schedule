import React, { useState } from 'react';

import './style.css';
import ModalView from '../modalView';

function Task({ service, status }) {
    const [isModalView, setIsModalView] = useState(false);

    function openModalView() {
        setIsModalView(true);
    }

    return (
        <>
            {isModalView ?
                <ModalView idService={service.id} close={() => setIsModalView(false)} />
                : null
            }
            <p
                key={service.id}
                className={status}
                onClick={() => openModalView()}
            >
                {service.id} - {service.name}
            </p>
        </>
    )
}

export default Task