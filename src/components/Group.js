import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import React from "react";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/es/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import GroupIcon from "@material-ui/icons/Group";
import RemoveIcon from "@material-ui/icons/Remove";

export default class Group extends React.Component {
    constructor(props) {
        super(props);
    }

    onGroupClick = () => {
        this.props.onGroupClick(this.props.group);
    };

    onGroupLeaveClick = () => {
        this.props.onGroupLeaveClick(this.props.group);
    };

    render() {
        return (
            <ListItem button className={this.props.classes.nested} key={this.props.group.id} onClick={this.onGroupClick}>
                <ListItemIcon>
                    <GroupIcon/>
                </ListItemIcon>
                <ListItemText inset primary={this.props.group.name}/>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Remove" onClick={this.onGroupLeaveClick}>
                        <RemoveIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}