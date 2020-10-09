import React from 'react';

import './index.css'

const Modal = ({ close, id = 'modal', monthActual, day }) => {
    function getYear() {
        const d = new Date()
        const year = d.getFullYear()
        return year
    }
    const handleOutsideClick = e => {
        if (e.target.id === id) close()
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
                                    <input type="text" placeholder='Nome' />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="phone">Nome</label>
                                    <input type="text" placeholder='Telefone' />
                                </div>

                                <div className="modal-label-input">
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" placeholder='Endereço' />
                                </div>
                            </div>

                            <div className="modal-right">
                                <div className="modal-left">
                                    <div className="modal-label-input">
                                        <label htmlFor="model">Modelo</label>
                                        <div className="modal-check">
                                            <div className="modal-check-radio">
                                                <label htmlFor="table">Mesa</label>
                                                <input type='radio' id="table" value="table" name="model" />
                                            </div>

                                            <div className="modal-check-radio">
                                                <label htmlFor="floor">Chão</label>
                                                <input type='radio' id="floor" value="floor" name="model" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="observation">Observação</label>
                                        <textarea name="observation" id="observation" placeholder='Observação' />
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="color">Cores</label>
                                        <input type="text" placeholder='Cores' />
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="written">Escrito no balão</label>
                                        <input type="text" placeholder='Escrito no Balão' />
                                    </div>

                                    <div className="modal-label-input">
                                        <label htmlFor="symbol-photo">Algum símbolo ou foto</label>
                                        <input type="text" placeholder='Algum símbolo ou foto' />
                                    </div>

                                    <div className="modal-line-item">
                                        <div className="modal-label-input">
                                            <label htmlFor="delivery-date">Data entrega</label>
                                            <input type="text" value={`${day}/${monthActual}/${getYear()}`} />
                                        </div>

                                        <div className="modal-label-input">
                                            <label htmlFor="delivery-time">Hora para entrega</label>
                                            <input type="text" placeholder='00:00' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="footer">
                        <button>Salvar</button>
                        <button>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal