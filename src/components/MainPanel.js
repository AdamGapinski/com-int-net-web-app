import React from "react";
import HomePanel from "./HomePanel";
import SubscriptionsPanel from "./SubscriptionsPanel";
import GroupsPanel from "./GroupsPanel";

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
        } else if (this.props.active === 'groups') {
            result = (<GroupsPanel api={this.props.api} classes={this.props.classes} fetchGroups={this.props.fetchGroups}/>);
        }
        return result;
    }
}

export default MainPanel;
