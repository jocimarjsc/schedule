import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './index.css'
import api from '../../services/api';

const Modal = ({ close, id = 'modal', idService }) => {
    const [create, setCreate] = useState('');
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [model_checked, setModel_checked] = useState('');
    const [status, setStatus] = useState('');
    const [observations, setObservations] = useState('');
    const [written_balloon, setWritten_balloon] = useState('');
    const [balloon_symbol, setBalloon_symbol] = useState('');
    const [amount, setAmount] = useState();
    const [delivery_date, setDelivery_date] = useState('');
    const [delivery_hours, setDelivery_hours] = useState('');
    const [value, setValue] = useState();
    const [entry_value, setEntry_value] = useState();
    const [lack, setLack] = useState();
    const [service, setService] = useState([])

    const day = service.day < 10 ? `0${service.day}` : service.day;
    const month = service.month < 10 ? `0${service.month}` : service.month;

    const history = useHistory();

    useEffect(() => {
        async function data() {
            await api.get(`/services/${idService}`).then(response => {
                setService(response.data);
            });
        };
        data()
    }, [idService])

    useEffect(() => {
        setCreate(service.create);
        setName(service.name);
        setTelephone(service.telephone);
        setAddress(service.address);
        setModel_checked(service.model_checked);
        setStatus(service.status);
        setObservations(service.observations);
        setWritten_balloon(service.written_balloon);
        setBalloon_symbol(service.balloon_symbol);
        setAmount(service.amount);
        setDelivery_date(`${day}/${month}/${service.year}`);
        setDelivery_hours(service.delivery_hours);
        setValue(service.value);
        setEntry_value(service.entry_value);
        calcvalue(service.value, service.entry_value);
    }, [service])

    const handleOutsideClick = e => {
        if (e.target.id === id) close()
    }

    const handleRadioClickeCreated = e => {
        setCreate(e.target.value);
    }

    const handleRadioClickedModel = e => {
        setModel_checked(e.target.value);
    }

    const handleRadioClickedStatus = e => {
        setStatus(e.target.value);
    }

    const calcvalue = (value, entryValue) => {
        return setLack(parseFloat((value - entryValue).toFixed(2)))
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const day = parseInt(delivery_date.substr(0, 2));
        const month = parseInt(delivery_date.substr(3, 2));
        const year = parseInt(delivery_date.substr(6, 4));
        const data = {
            create, name, telephone, address, model_checked, status, written_balloon,
            balloon_symbol, day, month, year, delivery_date, delivery_hours, observations,
            amount, value, entry_value
        }
        await api.put(`/services/${idService}`, data);

        close();
        history.push('/');

    }

    const handleDelete = async e => {
        e.preventDefault()
        await api.delete(`/services/${idService}`);
        close()
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
                        <form>
                            <div className="modal-left">
                                <div
                                    className="created"
                                    onChange={handleRadioClickeCreated}
                                >
                                    <label htmlFor="created-label">Criado por: </label>
                                    <div className="created-check-radio">
                                        <label htmlFor="floor">Edineia</label>
                                        <input
                                            type='radio'
                                            id="floor"
                                            value="Edineia"
                                            name="create"
                                            checked={create === 'Edineia' ? "Edineia" : ''}
                                        />
                                    </div>

                                    <div className="created-check-radio">
                                        <label htmlFor="floor">Eldirene</label>
                                        <input
                                            type='radio'
                                            id="floor"
                                            value="Eldirene"
                                            name="create"
                                            checked={create === 'Eldirene' ? "Eldirene" : ''}
                                        />
                                    </div>

                                    <div className="created-check-radio">
                                        <label htmlFor="floor">Luana</label>
                                        <input
                                            type='radio'
                                            id="floor"
                                            value="Luana"
                                            name="create"
                                            checked={create === 'Luana' ? "Luana" : ''}
                                        />
                                    </div>
                                    <div className="created-check-radio">
                                        <label htmlFor="floor">Tamires</label>
                                        <input
                                            type='radio'
                                            id="floor"
                                            value="Tamires"
                                            name="create"
                                            checked={create === 'Tamires' ? "Tamires" : ''}
                                        />
                                    </div>
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="name">Nome</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={event => setName(event.target.value)}
                                    />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="phone">Telefone</label>
                                    <input
                                        type="text"
                                        value={telephone}
                                        onChange={event => setTelephone(event.target.value)}
                                    />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="address">Endereço</label>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={event => setAddress(event.target.value)}
                                    />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="model">Modelo</label>
                                    <div
                                        className="modal-check"
                                        onChange={handleRadioClickedModel}
                                    >
                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Mesa</label>
                                            <input
                                                type='radio'
                                                id="floor"
                                                value="Mesa"
                                                name="model"
                                                checked={model_checked === 'Mesa' ? "Mesa" : ''}
                                            />
                                        </div>

                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Chão</label>
                                            <input
                                                type='radio'
                                                id="floor"
                                                value="Chão"
                                                name="model"
                                                checked={model_checked === 'Chão' ? "Chão" : ''}
                                            />
                                        </div>

                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Base fixa</label>
                                            <input
                                                type='radio'
                                                id="floor"
                                                value="Base fixa"
                                                name="model"
                                                checked={model_checked === 'Base fixa' ? "Base fixa" : ''}
                                            />
                                        </div>

                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Balão Cake</label>
                                            <input
                                                type='radio'
                                                id="floor"
                                                value="Balão Cake"
                                                name="model"
                                                checked={model_checked === 'Balão Cake' ? "Balão Cake" : ''}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="model">Estatus</label>
                                    <div
                                        className="modal-check"
                                        onChange={handleRadioClickedStatus}
                                    >
                                        <div className="modal-check-radio">
                                            <label htmlFor="floor">Espera</label>
                                            <input
                                                type='radio'
                                                id="status"
                                                value="Espera"
                                                name="status"
                                                checked={status === 'Espera' ? "Espera" : ''}
                                            />
                                        </div>

                                        <div className="modal-check-radio">
                                            <label htmlFor="status">Aguardando</label>
                                            <input
                                                type='radio'
                                                id="status"
                                                value="Aguardando"
                                                name="status"
                                                checked={status === 'Aguardando' ? "Aguardando" : ''}
                                            />
                                        </div>

                                        <div className="modal-check-radio">
                                            <label htmlFor="status">Entregue</label>
                                            <input
                                                type='radio'
                                                id="status"
                                                value="Entregue"
                                                name="status"
                                                checked={status === 'Entregue' ? "Entregue" : ''}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="written">Escrito no balão</label>
                                    <input
                                        type="text"
                                        value={written_balloon}
                                        onChange={event => setWritten_balloon(event.target.value)}
                                    />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="symbol-photo">Algum símbolo ou foto</label>
                                    <input
                                        type="text"
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
                                            onChange={event => setDelivery_date(event.target.value)}
                                        />
                                    </div>

                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-time">Hora para entrega</label>
                                        <input
                                            type="text"
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
                                            value={value}
                                            onChange={event => setValue(event.target.value)}
                                        />
                                    </div>

                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-time">Entrada</label>
                                        <input
                                            type="text"
                                            value={entry_value}
                                            onChange={event => setEntry_value(event.target.value)}
                                            onBlur={() => calcvalue(value, entry_value)}
                                        />
                                    </div>

                                    <div className="modal-label-input modal-item">
                                        <label htmlFor="delivery-time">Falta pagar</label>
                                        <input
                                            type="text"
                                            value="R$ 0,00"
                                            value={lack}
                                            onChange={event => setLack(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="footer">
                                    <button onClick={handleSubmit} className="success-dark">Alterar</button>
                                    <button onClick={close} className="warning-dark text-gray">Cancelar</button>
                                    <button onClick={handleDelete} className="danger-dark">Excluir</button>
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