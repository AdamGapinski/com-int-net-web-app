import React from "react"
import LoginForm from "./LoginForm";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <main className={this.props.classes.content}>
                    <LoginForm onLogin={this.props.onLogin} classes={this.props.classes}/>
                </main>
            </div>
        );
    }
}
