import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";
import Divider from "@material-ui/core/Divider/Divider";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WebIcon from "@material-ui/icons/Web";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

class LeftPanel extends React.Component {
    constructor(props) {
        super(props);
    }

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
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Groups"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <WebIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Recommended"/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button>
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