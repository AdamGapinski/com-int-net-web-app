import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import PostsList from "./PostsList";

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

function PostsSheet(props) {
    return (
        <div>
            <PostsList api={props.api} categories={props.categories}/>
        </div>
    );
}

PostsSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostsSheet);
