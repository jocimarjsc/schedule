import React, { useEffect, useState } from 'react';

import './index.css';
import api from '../../services/api';

const Modal = ({ close, id = 'modal', idService }) => {
    const [service, setService] = useState([]);

    useEffect( () => {
        async function data(){
            await api.get(`/services/${idService}`).then(response => {
                setService(response.data)
            });
        }
        data()
    },[idService])


    const handleOutsideClick = e => {
        if (e.target.id === id) close()
        console.log(e.target.id)
    }

    const calcvalue = (value = 0, entryValue = 0) => {
        return value - entryValue
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
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
                                    <input type="text" value={service.name} />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="phone">Telefone</label>
                                    <input type="text" value={service.telephone} />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" value={service.address} />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="model">Modelo</label>
                                    <div className="modal-check" >
                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Mesa</label>
                                            <input
                                                type='radio'
                                                id="floor"
                                                value="Mesa"
                                                name="model"
                                                checked={service.model_checked === 'Mesa' ? true : false}
                                            />
                                        </div>

                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Chão</label>
                                            <input
                                                type='radio'
                                                id="floor"
                                                value="Chão"
                                                name="model"
                                                checked={service.model_checked === 'Chão' ? true : false}
                                            />
                                        </div>

                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Base fixa</label>
                                            <input
                                                type='radio'
                                                id="floor"
                                                value="Base fixa"
                                                name="model"
                                                checked={service.model_checked === 'Base fixa' ? true : false}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="written">Escrito no balão</label>
                                    <input type="text" value={service.written_balloon} />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="symbol-photo">Algum símbolo ou foto</label>
                                    <input type="text" value={service.balloon_symbol} />
                                </div>
                            </div>

                            <div className="modal-right">
                                <div className="modal-line-item">
                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-date">Data entrega</label>
                                        <input type="text" value={service.delivery_date} />
                                    </div>

                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-time">Hora para entrega</label>
                                        <input type="text" value={service.delivery_hours} />
                                    </div>
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="observation">Observação</label>
                                    <textarea name="observation" id="observation" value={service.observations} />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="amount">Quantidade</label>
                                    <input type='number' id="amount" name="amount" value={service.amount} />
                                </div>

                                <div className="modal-line-item">
                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-date">Valor</label>
                                        <input type="text" value={service.value} />
                                    </div>

                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-time">Entrada</label>
                                        <input type="text" value={service.entry_value} />
                                    </div>

                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-time">Falta pagar</label>
                                        <input type="text" placeholder="R$ 0,00" value={calcvalue(service.value, service.entry_value)} />
                                    </div>
                                </div>

                                <div className="footer">
                                    <button onClick={handleSubmit} className="warning-dark">Etidar</button>
                                    <button onClick={close} className="danger-dark">Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal