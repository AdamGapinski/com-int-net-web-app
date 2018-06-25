import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";
import Divider from "@material-ui/core/Divider/Divider";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import GroupsNestedListItem from "./GroupsNestedListItem";

class LeftPanel extends React.Component {
    render() {
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: this.props.classes.drawerPaper,
                }}
            >
                <div className={this.props.classes.toolbar}/>
                <List>
                    <ListItem button onClick={this.props.onHomeClick}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <GroupsNestedListItem groups={this.props.groups}
                                          onGroupsClick={this.props.onGroupsClick}
                                          fetchGroups={this.props.fetchGroups}
                                          onGroupClick={this.props.onGroupClick}
                                          onGroupLeaveClick={this.props.onGroupLeaveClick}/>
                </List>
                <Divider/>
                <List>
                    <ListItem button onClick={this.props.onSubscriptionsClick}>
                        <ListItemIcon>
                            <SubscriptionsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Subscriptions"/>
                    </ListItem>
                </List>
                <Divider/>
            </Drawer>
        );
    }
}

export default LeftPanel;