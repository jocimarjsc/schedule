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
                        <div className="date">
                            <input type="text" value={`${day}/${monthActual}/${getYear()}`} />
                        </div>
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
                                                <label htmlFor="balao-cake">Balão cake</label>
                                                <input type='radio' id="balao-cake" value="balao-cake" name="balao" />
                                            </div>

                                            <div className="modal-check-radio">
                                                <label htmlFor="balao-arranjo">Balão arranjo</label>
                                                <input type='radio' id="balao-arranjo" value="balao-arranjo" name="balao" />
                                            </div>

                                            <div className="modal-check-radio">
                                                <label htmlFor="somente-balao">Somente balão</label>
                                                <input type='radio' id="somente-balao" value="somente-balao" name="balao" />
                                            </div>
                                        </div>
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
                                        <label htmlFor="description">Descrição</label>
                                        <textarea name="description" id="description" placeholder='descrição' />
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