import React, {Component} from 'react';
import Modal from './components/modal/Modal';
import UserTable from './components/users/table/Table';
import listUsers from './components/users/UserUtils'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users:[],
            loadingData: true
        };

        this.successfulLoading = this.successfulLoading.bind(this);

        listUsers().then(
            response => {
                this.successfulLoading(JSON.parse(response).payload.items)
            },
            error => console.error("Failed!", error)
        );
    }

    successfulLoading(users) {
        console.log(users);
       this.setState({
           loadingData: false,
           users: users
       });
    }

    render() {
        const {users, loadingData} = this.state;
        const tableActions = {
            expandFun: f => console.log(f),
            editFun: f => console.log(f),
            eraseFun: f => console.log(f)
        };

        return (
            <div>
                <header>
                    <h1>Usuarios</h1>
                </header>
                <section>
                    <UserTable users={users} {...tableActions}/>
                </section>
                <footer>
                    <h4>Gracias Spock por haberme pasado tu TP 1</h4>
                </footer>
                <Modal show={loadingData}><h2>Cargando...</h2></Modal>
            </div>
        );
    }
}

export default App;
