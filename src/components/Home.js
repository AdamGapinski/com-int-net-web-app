import React from 'react';
import Login from '../components/Login'
import '../style/App.css';
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import MainPanel from "../components/MainPanel";
import Registration from "./Registration"
import Button from "@material-ui/core/Button/Button";

export default class Home extends React.Component {
    login = (user) => {
        this.setState({
            user: user
        })
    };
    logout = () => {
        this.setState({
            user: null
        })
    };
    signUp = () => {
        this.setState({
            registration: true
        })
    };
    registered = () => {
        this.setState({
            registration: false
        })
    };
    fetchPosts = () => {
        return fetch("http://localhost:8080/posts", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.user.access_token,
            }
        }).then(r => r.json())
            .catch(error => console.error('Error:', error));
    };

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            registration: false
        }
    }

    render() {
        if (this.state.user) {
            return (
                <div className={this.props.classes.root}>
                    <Header classes={this.props.classes}/>
                    <LeftPanel classes={this.props.classes}/>
                    <MainPanel fetchPosts={this.fetchPosts} classes={this.props.classes}/>
                </div>
            );
        } else if (this.state.registration) {
            return (
                <div className={this.props.classes.root}>
                    <Registration classes={this.props.classes} onRegistered={this.registered}/>
                </div>
            );
        } else {
            return (
                <div className={this.props.classes.root}>
                    <Login onLogin={this.login} classes={this.props.classes}/>
                    <Button onClick={this.signUp} variant="contained" color="secondary"
                            className={this.props.classes.button}>
                        Sign up
                    </Button>
                </div>
            );
        }
    }
}
