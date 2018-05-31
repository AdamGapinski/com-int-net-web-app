import Dialog from "@material-ui/core//Dialog/Dialog";
import DialogTitle from "@material-ui/core//DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core//DialogContent/DialogContent";
import TextField from "@material-ui/core//TextField/TextField";
import DialogActions from "@material-ui/core//DialogActions/DialogActions";
import Button from "@material-ui/core//Button/Button";
import React from "react";

export default class AddPostDialog extends React.Component {
    addPost = () => {
        fetch("http://localhost:8080/posts",
            {
                method: "POST",
                body: JSON.stringify({contents: document.getElementById("add-post-text-field").value}),
                headers: {
                    'content-type': 'application/json'
                },
            })
            .catch(error => console.error("Error:", error));
        this.props.handleClose();
    };

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add post</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="add-post-text-field"
                        label="Post"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.addPost} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}