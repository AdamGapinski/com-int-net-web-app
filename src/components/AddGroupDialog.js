import Dialog from "@material-ui/core//Dialog/Dialog";
import DialogTitle from "@material-ui/core//DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core//DialogContent/DialogContent";
import TextField from "@material-ui/core//TextField/TextField";
import DialogActions from "@material-ui/core//DialogActions/DialogActions";
import Button from "@material-ui/core//Button/Button";
import React from "react";

export default class AddGroupDialog extends React.Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create group</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="add-group-text-field"
                        label="name"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.props.addGroup} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}