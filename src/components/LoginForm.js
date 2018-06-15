import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import base64 from "base-64";

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

class LoginForm extends React.Component {
    handleSignIn = () => {
        let username = document.getElementById("username-input").value;
        document.getElementById("username-input").value = '';
        let password = document.getElementById("password-input").value;
        document.getElementById("password-input").value = '';
        if (!username || !password) {
            return;
        }
        let hdrs = new Headers();
        hdrs.append('Authorization', 'Basic ' + base64.encode("NllndsADVij93JDSvl" + ":" + "jlaCnlDS38jDMasdfOWF6"));
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        fetch("http://localhost:8080/oauth/token", {
            method: "POST",
            body: `grant_type=password&username=${username}&password=${password}`,
            headers: hdrs
        })
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.access_token) {
                    this.props.onLogin(jsonResponse);
                }
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
                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSignIn}>
                    Sign in
                </Button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
