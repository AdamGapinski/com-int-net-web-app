import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function SubscribeButton(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="raised" color="primary" className={classes.button} onClick={props.onSubscribe}>
                Subscribe selected
            </Button>
        </div>
    );
}

SubscribeButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubscribeButton);