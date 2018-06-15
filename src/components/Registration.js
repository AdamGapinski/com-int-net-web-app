import React from "react"
import RegisterForm from "./RegisterForm";

export default class Registration extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <main className={this.props.classes.content}>
                    <RegisterForm onRegistered={this.props.onRegistered} classes={this.props.classes}/>
                </main>
            </div>
        );
    }
}
