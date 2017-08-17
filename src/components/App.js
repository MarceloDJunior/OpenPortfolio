import React from 'react'
import UserAPI from './../api/userApi'
import Header from './Header'
import Main from './Main'
import './../css/bootstrap.min.css'
import './../css/font-awesome.css'
import './../css/style.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: ''
        };
    }

    componentWillMount() {
        if (localStorage.getItem("user_id")) {
            UserAPI.getUser(localStorage.getItem("user_id"))
                .then((data) => {
                    this.setState({usuario: data});
                });
        }
    }

    render() {
        return (
            <div>
                <Header usuario={this.state.usuario}/>
                <Main usuario={this.state.usuario}/>
            </div>
        )
    }
}
export default App
