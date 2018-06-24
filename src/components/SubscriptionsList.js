import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Subscription from "./Subscription";
import AddResultSnackbar from "./AddResultSnackbar";

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
        this.state = {
            deleted: undefined
        }
    }

    onSubscriptionDelete = (subscription) => {
        const category = subscription.name;
        this.props.api.deleteSubscription(
            {name: category},
            () => {
                this.setState({
                    deleted: true
                });
                this.props.onSubscriptionDelete();
            },
            () => {
                this.setState({
                    deleted: false
                })
            })
    };

    render() {
        let snackbar = <div/>;
        if (this.state.deleted) {
            snackbar = <AddResultSnackbar text={"Subscription deleted!"}
                                          onSnackbarClose={() => {this.setState({deleted: undefined})}}/>;
        } else if (this.state.deleted === false) {
            snackbar = <AddResultSnackbar text={"Deleting subscription failed"}
                                          onSnackbarClose={() => {this.setState({deleted: undefined})}}/>;
        }
        const subscriptions = [];
        if (this.props.subscriptions && Array.isArray(this.props.subscriptions)) {
            this.props.subscriptions.forEach(subscription => subscriptions.push(<Subscription key={subscription.id}
                                                                                              subscription={subscription}
                                                                                              onSubscriptionDelete={this.onSubscriptionDelete}/>));
        }
        return (
            <div>
                <List>
                    {subscriptions}
                </List>
                {snackbar}
            </div>
        );
    }
}

SubscriptionsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubscriptionsList);