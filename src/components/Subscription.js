import React from 'react'
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ListItemSecondaryAction from "@material-ui/core/es/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Subscription extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={this.props.subscription.name}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={this.props.onCategoryDelete}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}