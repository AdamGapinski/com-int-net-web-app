import React from "react";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";

export default class MainAppContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'home'
        }
    }

    onHomeClick = () => {
        if (this.state.active !== 'home') {
            this.setState({
                active: 'home'
            })
        }
    };

    onSubscriptionsClick = () => {
        if (this.state.active !== 'subscriptions') {
            this.setState({
                active: 'subscriptions'
            })
        }
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <Header classes={this.props.classes}/>
                <LeftPanel classes={this.props.classes}
                           onHomeClick={this.onHomeClick}
                           onSubscriptionsClick={this.onSubscriptionsClick}/>
                <MainPanel api={this.props.api}
                           user={this.props.user}
                           classes={this.props.classes}
                           active={this.state.active}/>
            </div>
        );
    }
}