import React from 'react'
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import red from "@material-ui/core/colors/red";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";

export default class Comment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ListItem style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <Avatar style={{
                    backgroundColor: red[500]
                }}>
                    {this.props.comment.author.username[0].toUpperCase()}
                </Avatar>
                <ListItemText primary={this.props.comment.author.username} secondary={this.props.comment.contents}>
                </ListItemText>
            </ListItem>
        );
    }
}