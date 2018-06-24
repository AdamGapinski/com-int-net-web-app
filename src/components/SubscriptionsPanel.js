import React from "react";
import SubscriptionsList from "./SubscriptionsList";
import CategorySearch from "./CategorySearch";
import SubscribeButton from "./SubscribeButton";
import AddResultSnackbar from "./AddResultSnackbar";

export default class SubscriptionsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriptions: [],
            selectedCategories: [],
            suggestions: [],
            subscribed: undefined
        }
    }

    fetchSubscriptions() {
        this.props.api.fetchSubscriptions().then(fetched => {
            if (fetched && Array.isArray(fetched)) {
                this.setState({
                    subscriptions: fetched
                })
            }
        })
    }

    fetchCategorySuggestions() {
        this.props.api.fetchCategories().then(fetched => {
            if (fetched && Array.isArray(fetched)) {
                this.setState({
                    suggestions: fetched.map(category => category.name)
                })
            }
        })
    }

    componentDidMount() {
        this.fetchSubscriptions();
        this.fetchCategorySuggestions();
    }

    onCategoryAdd = (categories) => {
        this.setState({
            selectedCategories: categories,
        })
    };

    onCategoryDelete = (categories) => {
        this.setState({
            selectedCategories: categories
        })
    };

    onSubscribe = () => {
        this.state.selectedCategories.forEach(category => {
            this.props.api.addSubscription({
                name: category
            }, () => {
                this.setState({
                    subscribed: true
                })
            }, () => {
                this.setState({
                    subscribed: false
                })
            })
        })
    };

    render() {
        let snackbar = <div/>;
        if (this.state.subscribed) {
            snackbar = <AddResultSnackbar text={"Subscriptions added!"}
                                          onSnackbarClose={() => this.setState({subscribed: undefined})}/>;
        } else if (this.state.subscribed === false) {
            snackbar = <AddResultSnackbar text={"Adding subscriptions failed"}
                                          onSnackbarClose={() => this.setState({subscribed: undefined})}/>;
        }
        return (
            <div className={this.props.classes.content}>
                <div className={this.props.classes.toolbar}/>
                <CategorySearch api={this.props.api}
                                onCategoryAdd={this.onCategoryAdd}
                                onCategoryDelete={this.onCategoryDelete}
                                suggestions={this.state.suggestions}/>
                <SubscribeButton onSubscribe={this.onSubscribe}/>
                <SubscriptionsList subscriptions={this.state.subscriptions}/>
                {snackbar}
            </div>
        );
    }
}