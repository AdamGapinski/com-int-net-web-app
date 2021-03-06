import React from 'react';
import '../style/App.css';
import Button from '@material-ui/core/Button';
import LoginForm from "./LoginForm";
import base64 from "base-64";
import HomeLayout from "./HomeLayout";
import HomeAppBar from "./HomeAppBar";
import RegisterForm from "./RegisterForm";
import Api from "./Api";
import HomeRegisterLayout from "./HomeRegisterLayout";
import CONFIG from "./../config.json";
import MainAppContent from "./MainAppContent";

export default class Home extends React.Component {
    login = (response) => {
        const api = new Api(response.access_token);
        api.fetchUser().then(fetched => {
            this.setState({
                user: fetched,
                api: api
            })
        });
    };
    logout = () => {
        this.setState({
            user: null,
            api: null
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
    handleSignIn = () => {
        let username = document.getElementById("username-input").value;
        document.getElementById("username-input").value = '';
        let password = document.getElementById("password-input").value;
        document.getElementById("password-input").value = '';
        if (!username || !password) {
            return;
        }
        let hdrs = new Headers();
        hdrs.append('Authorization', 'Basic ' + base64.encode(CONFIG.id + ":" + CONFIG.secret));
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        fetch(CONFIG.serverUrl+"/oauth/token", {
            method: "POST",
            body: `grant_type=password&username=${username}&password=${password}`,
            headers: hdrs
        })
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.access_token) {
                    this.login(jsonResponse);
                }
            })
            .catch(error => console.error("Error:", error));
    };
    handleSignUp = () => {
        let username = document.getElementById("username-input").value;
        document.getElementById("username-input").value = '';
        let password = document.getElementById("password-input").value;
        document.getElementById("password-input").value = '';
        let password_repeat = document.getElementById("password-repeat-input").value;
        document.getElementById("password-repeat-input").value = '';
        if (!username || !password || !password_repeat) {
            return;
        }
        if (password !== password_repeat) {
            return;
        }
        let hdrs = new Headers();
        hdrs.append('Content-Type', "application/json");
        fetch(CONFIG.serverUrl+"/user/new", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: hdrs
        })
            .then(jsonResponse => {
                this.registered();
            })
            .catch(error => console.error("Error:", error));
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
                    <MainAppContent api={this.state.api} user={this.state.user} classes={this.props.classes}/>
                </div>
            );
        } else if (this.state.registration) {
            const registerForm = <RegisterForm/>;
            const signUpButton = <Button variant="raised" color="primary" className={this.props.classes.button}
                                         onClick={this.handleSignUp}>Sign up</Button>;

            return (
                <div>
                    <HomeAppBar/>
                    <main className={this.props.classes.content}>
                        <HomeRegisterLayout registerForm={registerForm} signUpButton={signUpButton}/>
                    </main>
                </div>
            );
        } else {
            const loginForm = <LoginForm/>;
            const signInButton = <Button variant="raised" color="primary" className={this.props.classes.button}
                                         onClick={this.handleSignIn}>Sign in</Button>;
            const signUpButton = <Button onClick={this.signUp} variant="raised" color="secondary"
                                         className={this.props.classes.button}>Sign up</Button>;

            return (
                <div>
                    <HomeAppBar/>
                    <main className={this.props.classes.content}>
                        <HomeLayout loginForm={loginForm} signInButton={signInButton} signUpButton={signUpButton}/>
                    </main>
                </div>
            );
        }
    }
}
