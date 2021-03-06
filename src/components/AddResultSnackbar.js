import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class AddResultSnackbar extends React.Component {
    handleClose = () => {
        this.setState({open: false});
        if (this.props.onSnackbarClose) {
            this.props.onSnackbarClose();
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            vertical: 'bottom',
            horizontal: 'right'
        };
    }

    render() {
        const {vertical, horizontal, open} = this.state;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{vertical, horizontal}}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.text}</span>}
                />
            </div>
        );
    }
}

export default AddResultSnackbar;