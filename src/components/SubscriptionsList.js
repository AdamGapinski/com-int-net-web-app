import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Subscription from "./Subscription";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class SubscriptionsList extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubscriptionDelete = (event) => {
        console.log(event);
    };

    render() {
        const subscriptions = [];
        if (this.props.subscriptions && Array.isArray(this.props.subscriptions)) {
            this.props.subscriptions.forEach(subscription => subscriptions.push(<Subscription key={subscription.id}
                                                                                              subscription={subscription}
                                                                                              onSubscriptionDelete={this.onSubscriptionDelete}/>));
        }
        return (
            <List>
                {subscriptions}
            </List>
        );
    }
}

SubscriptionsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubscriptionsList);