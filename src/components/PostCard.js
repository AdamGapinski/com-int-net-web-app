import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExposurePlus1 from "@material-ui/icons/es/ExposurePlus1";
import Badge from "@material-ui/core/es/Badge/Badge";
import CommentsList from "./CommentsList";

const styles = theme => ({
    card: {
        maxWidth: 400,
        margin: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: `0 ${theme.spacing.unit * 2}px`,
    },
});

class PostCard extends React.Component {
    handleExpandClick = () => {
        this.setState({expanded: !this.state.expanded});
    };

    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar}>
                                {this.props.post.author.username[0].toUpperCase()}
                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={this.props.post.author.username}
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography component="p">
                            {this.props.post.contents}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <Badge color="primary" badgeContent={0}
                               className={classes.margin}>
                            <IconButton aria-label="Plus">
                                <ExposurePlus1/>
                            </IconButton>
                        </Badge>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon/>
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <CommentsList fetchComments={this.props.fetchComments} post={this.props.post}/>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

PostCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCard);