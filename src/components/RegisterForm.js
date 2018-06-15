import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

class RegisterForm extends React.Component {
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
            console.log("Passwords does not match.");
            return;
        }
        let hdrs = new Headers();
        hdrs.append('Content-Type', "application/json");
        fetch("http://localhost:8080/user/new", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: hdrs
        })
            .then(jsonResponse => {
                console.log(jsonResponse);
                this.props.onRegistered();
            })
            .catch(error => console.error("Error:", error));
    };

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="username-input"
                    label="Username"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="password-input"
                    requried
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <TextField
                    id="password-repeat-input"
                    requried
                    label="Repeat password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleSignUp}>
                    Sign up
                </Button>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);
