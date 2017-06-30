import React from 'react';
import calendar from './img/calendar.gif';
import erase from './img/delete.jpg';
import edit from './img/edit.jpg';
import './Table.css';

const UserTable = ({users = [], expandFun, editFun, eraseFun}) =>
    <div id="table-container" className="centered-container">
        {
            (users.length === 0) ?
                <h3>No hay usuarios disponibles.</h3> :
                <table>
                    <thead>
                    <tr>
                        <th rowSpan="2">Nombre</th>
                        <th rowSpan="2">Apellido</th>
                        <th rowSpan="2">Email</th>
                        <th rowSpan="2">Teléfono</th>
                        <th colSpan="3" className="hide-by-size">Acciones</th>
                    </tr>
                    <tr className="hide-by-size">
                        <th>Ver</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => <UserTableRow key={user.id}
                                                     expandFun={expandFun}
                                                     editFun={editFun}
                                                     eraseFun={eraseFun}
                                                     {...user}/>)}
                    </tbody>
                </table>
        }
    </div>;

const UserTableRow = ({id, firstname, lastname, mail, phone, expandFun, editFun, eraseFun}) => {
    this.a = id;
    return <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{mail}</td>
        <td>{phone}</td>
        <td className="hide-by-size">
            <img className="icon" src={calendar} alt="expandir" onClick={expandFun.bind(this, id)}/>
        </td>
        <td className="hide-by-size">
            <img className="icon" src={edit} alt="edición" onClick={editFun.bind(this, id)}/>
        </td>
        <td className="hide-by-size">
            <img className="icon" src={erase} alt="borrar" onClick={eraseFun.bind(this, id)}/>
        </td>
    </tr>;
};

export default UserTable;