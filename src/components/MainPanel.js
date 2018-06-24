import React from "react";
import HomePanel from "./HomePanel";
import SubscriptionsPanel from "./SubscriptionsPanel";

class MainPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let result = <div/>;
        if (this.props.active === 'home') {
            result = (<HomePanel api={this.props.api}
                                user={this.props.user}
                                classes={this.props.classes}/>);
        } else if (this.props.active === 'subscriptions') {
            result = (<SubscriptionsPanel api={this.props.api} classes={this.props.classes}/>);
        }
        return result;
    }
}

export default MainPanel;
