import React from "react";
import AddIcon from "@material-ui/icons/Add"
import Button from '@material-ui/core/Button';
import AddPostDialog from "./AddPostDialog";
import AddPostResultSnackbar from "./AddPostResultSnackbar";

class AddPostButton extends React.Component {
    handleClickOpen = () => {
        this.setState({
            openAddPostDialog: true,
            success: undefined
        });
    };
    handleClose = () => {
        this.setState({openAddPostDialog: false});
    };
    onSuccess = () => {
        this.setState({success: true});
    };
    onFailure = () => {
        this.setState({success: false});
    };
    constructor(props) {
        super(props);
        this.state = {
            openAddPostDialog: false
        };
    }

    render() {
        let snackbar = <div/>;
        if (this.state.success !== undefined) {
            if (this.state.success) {
                snackbar = <AddPostResultSnackbar text="Post added!"/>
            } else {
                snackbar = <AddPostResultSnackbar text="Failure while adding post"/>
            }
        }
        return (
            <div>
                <Button onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="add"
                        className={this.props.classes.addPostButton}>
                    <AddIcon/>
                </Button>
                <AddPostDialog open={this.state.openAddPostDialog}
                               handleClose={this.handleClose}
                               onPostAdd={this.props.onPostAdd}
                               onSuccess={this.onSuccess}
                               onFailure={this.onFailure}
                               api={this.props.api}/>
                {snackbar}
            </div>
        );
    }
}

export default AddPostButton;
