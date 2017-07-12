import React, {Component} from 'react';
import './Form.css';

class UserForm extends Component {
    render() {
        return (
            <div id="form-container">
                <h2>Formulario</h2>
                <form action="">
                    <div id="user-section">
                        <h3>Usuario</h3>
                        <div id="user-inputs" className="space-around-container">
                            <div>
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name"/>
                            </div>
                            <div>
                                <label htmlFor="last-name">Apellido</label>
                                <input type="text" id="last-name"/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email"/>
                            </div>
                            <div>
                                <label htmlFor="phone">Teléfono</label>
                                <input type="text" id="phone"/>
                            </div>
                        </div>
                    </div>
                    <div id="address-section">
                        <div>
                            <h3>Dirección</h3>
                            <div id="address-inputs" className="space-around-container">
                                <div>
                                    <label htmlFor="street">Calle</label>
                                    <input type="text" id="street"/>
                                </div>
                                <div>
                                    <label htmlFor="state">Provincia</label>
                                    <select id="state">
                                        <option value="capitalfederal">Capital Federal</option>
                                        <option value="buenosaires">Buenos Aires</option>
                                        <option value="formosa">Formosa</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="form-actions" className="form-footer">
                        <button type="button" id="send">Enviar</button>
                        <button type="button" id="cancel">Cancelar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserForm;