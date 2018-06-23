import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/es/Grid/Grid";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import TextField from "@material-ui/core/es/TextField/TextField";
import AddResultSnackbar from "./AddResultSnackbar";

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

class AddCommentField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: undefined
        }
    }

    onSuccess = () => {
        this.setState({
            success: true
        });
        document.getElementById("input-comment").value = "";
        this.props.onSuccess();
    };

    onFailure = () => {
        this.setState({
            success: false
        })
    };

    onSnackbarClose = () => {
        this.setState({
            success: undefined
        })
    };

    enterComment = (event) => {
        if (event.charCode === 13) {
            let commentContents = document.getElementById("input-comment").value.trim();
            if (commentContents) {
                const comment = {
                    contents: commentContents
                };
                this.props.api.addComment(comment, this.props.post,
                    this.onSuccess, this.onFailure)
            }
        }
    };

    render() {
        let resultSnackbar = <div/>;
        if (this.state.success) {
            resultSnackbar = <AddResultSnackbar text={"Comment added!"}
                                                      onSnackbarClose={this.onSnackbarClose}/>;
        } else if(this.state.success === false) {
            resultSnackbar = <AddResultSnackbar text={"Adding comment failed"}
                                                      onSnackbarClose={this.onSnackbarClose}/>;
        }
        return (
            <div>
                <div className={this.props.classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Avatar className={this.props.classes.avatar}>
                                {this.props.user.username[0].toUpperCase()}
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <TextField id="input-comment"
                                       label="Your comment"
                                       onKeyPress={this.enterComment}/>
                        </Grid>
                    </Grid>
                </div>
                {resultSnackbar}
            </div>
        );
    }
}

AddCommentField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCommentField);