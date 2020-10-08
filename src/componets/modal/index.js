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
                        <h3>Cadastrar serviço</h3>
                        <div className="date">
                            <input type="text" value={`${day}/${monthActual}/${getYear()}`} />
                        </div>
                        <span onClick={close}>&times;</span>
                    </div>
                    <div className="modal-line"></div>

                    <div className="modal-content">
                        <form action="" method="post">
                            <div className="modal-left">
                                <input type="text" placeholder='Nome' />
                            </div>

                            <div className="modal-right">
                                <div className="modal-left">
                                    <input type="text" placeholder='Nome' />
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