import React, { useEffect, useState } from 'react';

import './index.css';
import api from '../../services/api';

const Modal = ({ close, id = 'modalView', idService }) => {
    const [service, setService] = useState([]);

    useEffect(() => {
        async function data() {
            await api.get(`/services/${idService}`).then(response => {
                setService(response.data)
            });
        };
        data()

    }, [idService])


    const handleOutsideClick = e => {
        if (e.target.id === id) close()
    }

    const calcvalue = (value = 0, entryValue = 0) => {
        return value - entryValue
    }

    const handleSubmit = e => {
        e.preventDefault()
    }


    return (
        <>
            <div className="modal-wrapper">
                <div id={id} onClick={handleOutsideClick} className="modal-backdrop">
                    <div className="modal-box">
                        <div className="modal-header">
                            <h3>Pedido arranjos de balões</h3>
                            <span onClick={close}>&times;</span>
                        </div>
                        <div className="modal-line"></div>

                        <div className="modal-content">
                            <form action="" method="post">
                                <div className="modal-left">
                                    <div className="modal-label-input">
                                        <label htmlFor="name">Nome</label>
                                        <div className="input">{service.name}</div>
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="phone">Telefone</label>
                                        <div className="input">{service.telephone}</div>
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="address">Endereço</label>
                                        <div className="input">{service.address}</div>
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="model">Modelo</label>
                                        <div className="modal-check" >
                                            <div className="input">{service.model_checked}</div>
                                        </div>
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="model">Estatus</label>
                                        <div className="modal-check">
                                            <div className="input">{service.status}</div>
                                        </div>
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="written">Escrito no balão</label>
                                        <div className="input">{service.written_balloon}</div>
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="symbol-photo">Algum símbolo ou foto</label>
                                        <div className="input">{service.balloon_symbol}</div>
                                    </div>
                                </div>

                                <div className="modal-right">
                                    <div className="modal-line-item">
                                        <div className="modal-label-input modal-item">
                                            <label htmlFor="delivery-date">Data entrega</label>
                                            <div className="input">{service.delivery_date}</div>
                                        </div>

                                        <div className="modal-label-input modal-item">
                                            <label htmlFor="delivery-time">Hora para entrega</label>
                                            <div className="input">{service.delivery_hours}</div>
                                        </div>
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="observation">Observação</label>
                                        <textarea name="observation" id="observation" value={service.observations} />
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="amount">Quantidade</label>
                                        <div className="input">{service.amount}</div>
                                    </div>

                                    <div className="modal-line-item">
                                        <div className="modal-label-input modal-item">
                                            <label htmlFor="delivery-date">Valor</label>
                                            <div className="input">R$ {service.value}</div>
                                        </div>

                                        <div className="modal-label-input modal-item">
                                            <label htmlFor="delivery-time">Entrada</label>
                                            <div className="input">R$ {service.entry_value}</div>
                                        </div>

                                        <div className="modal-label-input modal-item">
                                            <label htmlFor="delivery-time">Falta pagar</label>
                                            <div className="input">R$ {calcvalue(service.value, service.entry_value)}</div>
                                        </div>
                                    </div>

                                    <div className="footer">
                                        <button onClick={handleSubmit} className="warning-dark">Alterar</button>
                                        <button onClick={close} className="danger-dark">Cancelar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal