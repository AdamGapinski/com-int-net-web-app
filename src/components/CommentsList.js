import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Comment from "./Comment";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        this.props.api.fetchComments(this.props.post.id).then(fetched => {
            this.setState({
                comments: fetched
            });
        });
    }

    render() {
        const comments = [];
        if (this.state.comments && Array.isArray(this.state.comments)) {
            this.state.comments.forEach(comment => comments.push(<Comment key={comment.id} comment={comment}/>));
        }

        return (
            <div className={this.props.classes.root}>
                <List>
                    {comments}
                </List>
            </div>
        );
    }
}

CommentsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentsList);