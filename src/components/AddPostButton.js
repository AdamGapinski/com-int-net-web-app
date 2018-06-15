import React from "react";
import AddIcon from "@material-ui/icons/Add"
import Button from '@material-ui/core/Button';
import AddPostDialog from "./AddPostDialog";

class AddPostButton extends React.Component {
    handleClickOpen = () => {
        this.setState({openAddPostDialog: true});
    };
    handleClose = () => {
        this.setState({openAddPostDialog: false});
    };

    constructor(props) {
        super(props);
        this.state = {
            openAddPostDialog: false
        };
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="add"
                        className={this.props.classes.addPostButton}>
                    <AddIcon/>
                </Button>
                <AddPostDialog open={this.state.openAddPostDialog} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default AddPostButton;
