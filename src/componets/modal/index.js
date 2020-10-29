import React, { useState } from 'react';

import './index.css'
import api from '../../services/api';
import { useEffect } from 'react';

const Modal = ({ close, id = 'modal', monthActual, day }) => {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [model_checked, setModel_checked] = useState('');
    const [observations, setObservations] = useState('');
    const [written_balloon, setWritten_balloon] = useState('');
    const [balloon_symbol, setBalloon_symbol] = useState('');
    const [amount, setAmount] = useState();
    const [delivery_date, setDelivery_date] = useState('');
    const [delivery_hours, setDelivery_hours] = useState('');
    const [value, setValue] = useState();
    const [entry_value, setEntry_value] = useState();
    const [falta, setFalta] = useState();

    useEffect(() => {
        setDelivery_date(`${day}/${monthActual}/${getYear()}`)
    },[delivery_date])

    function getYear() {
        const d = new Date()
        const year = d.getFullYear()
        return year
    }

    const handleOutsideClick = e => {
        if (e.target.id === id) close()
    }


    const handleRadioClicked = e => {
        setModel_checked(e.target.value);
    }

    const calcvalue = (value, entryValue) => {
        return setFalta(value - entryValue)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const data = {
            name, telephone, address, model_checked, written_balloon,
            balloon_symbol, delivery_date, delivery_hours, observations,
            amount, value, entry_value
        }
        await api.post('/services', data)
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
                                    <input 
                                        type="text" 
                                        placeholder='Nome' 
                                        value={name}
                                        onChange={event => setName(event.target.value)}
                                    />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="phone">Telefone</label>
                                    <input 
                                        type="text" 
                                        placeholder='Telefone'
                                        value={telephone}
                                        onChange={event => setTelephone(event.target.value)} 
                                    />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="address">Endereço</label>
                                    <input 
                                        type="text" 
                                        placeholder='Endereço' 
                                        value={address}
                                        onChange={event => setAddress(event.target.value)}
                                    />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="model">Modelo</label>
                                    <div
                                        className="modal-check"
                                        onChange={handleRadioClicked}
                                    >
                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Mesa</label>
                                            <input type='radio' id="floor" value="Mesa" name="model" />
                                        </div>

                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Chão</label>
                                            <input type='radio' id="floor" value="Chão" name="model" />
                                        </div>

                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Base fixa</label>
                                            <input type='radio' id="floor" value="Base fixa" name="model" />
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="written">Escrito no balão</label>
                                    <input 
                                        type="text" 
                                        placeholder='Escrito no Balão' 
                                        value={written_balloon}
                                        onChange={event => setWritten_balloon(event.target.value)}
                                    />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="symbol-photo">Algum símbolo ou foto</label>
                                    <input 
                                        type="text" 
                                        placeholder='Algum símbolo ou foto'
                                        value={balloon_symbol}
                                        onChange={event => setBalloon_symbol(event.target.value)} 
                                    />
                                </div>
                            </div>

                            <div className="modal-right">
                                <div className="modal-line-item">
                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-date">Data entrega</label>
                                        <input 
                                            type="text"
                                            value={delivery_date}
                                        />
                                    </div>

                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-time">Hora para entrega</label>
                                        <input 
                                            type="text" 
                                            placeholder='00:00' 
                                            value={delivery_hours}
                                            onChange={event => setDelivery_hours(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="observation">Observação</label>
                                    <textarea 
                                        name="observation" 
                                        id="observation" 
                                        placeholder='Observação' 
                                        value={observations}
                                        onChange={event => setObservations(event.target.value)}
                                    />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="amount">Quantidade</label>
                                    <input 
                                        type='number' 
                                        id="amount" 
                                        name="amount" 
                                        value={amount}
                                        onChange={event => setAmount(event.target.value)}
                                    />
                                </div>

                                <div className="modal-line-item">
                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-date">Valor</label>
                                        <input 
                                            type="text" 
                                            placeholder="R$ 0,00" 
                                            value={value}
                                            onChange={event => setValue(event.target.value)}
                                        />
                                    </div>

                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-time">Entrada</label>
                                        <input 
                                            type="text" 
                                            placeholder="R$ 0,00"
                                            value={entry_value}
                                            onChange={event => setEntry_value(event.target.value)}
                                            onBlur={() => calcvalue(value, entry_value)}
                                        />
                                    </div>

                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-time">Falta pagar</label>
                                        <input 
                                            type="text" 
                                            placeholder="R$ 0,00"  
                                            value={falta}
                                            onClick={() => calcvalue(value, entry_value)}
                                        />
                                    </div>
                                </div>

                                <div className="footer">
                                    <button onClick={handleSubmit} className="success-dark">Salvar</button>
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