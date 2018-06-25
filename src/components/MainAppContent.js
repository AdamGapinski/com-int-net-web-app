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

    onGroupsClick = () => {
        if (this.state.active !== 'groups') {
            this.setState({
                active: 'groups'
            })
        }
    };

    onGroupClick = (group) => {
        if (this.state.active !== 'group') {
            this.setState({
                active: 'group',
                name: group.name
            })
        }
    };

    onGroupLeaveClick = (group) => {
        this.props.api.leaveGroup(group, () => this.fetchGroups());
    };

    fetchGroups = () => {
        this.props.api.fetchUserGroups().then(fetched => {
            if (fetched && Array.isArray(fetched)) {
                this.setState({
                    groups: fetched
                })
            }
        })
    };

    componentDidMount() {
        this.fetchGroups();
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Header classes={this.props.classes}/>
                <LeftPanel classes={this.props.classes}
                           onHomeClick={this.onHomeClick}
                           onSubscriptionsClick={this.onSubscriptionsClick}
                           onGroupsClick={this.onGroupsClick}
                           onGroupClick={this.onGroupClick}
                           onGroupLeaveClick={this.onGroupLeaveClick}
                           groups={this.state.groups}
                           fetchGroups={this.fetchGroups}/>
                <MainPanel api={this.props.api}
                           user={this.props.user}
                           classes={this.props.classes}
                           active={this.state.active}
                           fetchGroups={this.fetchGroups}/>
            </div>
        );
    }
}