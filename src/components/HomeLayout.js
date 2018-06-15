import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function LoginLayout(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={4}/>
                <Grid item xs={3}>
                    {props.loginForm}
                </Grid>
                <Grid item xs={5}/>
                <Grid item xs={4}/>
                <Grid item xs={1}>
                    {props.signInButton}
                </Grid>
                <Grid item xs={1}>
                    {props.signUpButton}
                </Grid>
                <Grid item xs={6}/>
            </Grid>
        </div>
    );
}

LoginLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginLayout);
