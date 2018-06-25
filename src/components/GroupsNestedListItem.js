import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import GroupIcon from "@material-ui/icons/Group";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class GroupsNestedListItem extends React.Component {
    state = {open: false};

    handleClick = () => {
        this.props.onGroupsClick();
        this.setState({open: !this.state.open});
    };

    render() {
        const {classes} = this.props;
        const groups = [];
        if (Array.isArray(this.props.groups)) {
            this.props.groups.forEach(group => {
                groups.push(
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary={group.name}/>
                    </ListItem>
                )
            })
        }
        return (
            <div>
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <GroupIcon/>
                    </ListItemIcon>
                    <ListItemText inset primary="Groups"/>
                    {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {groups}
                    </List>
                </Collapse>
            </div>
        );
    }
}

GroupsNestedListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupsNestedListItem);