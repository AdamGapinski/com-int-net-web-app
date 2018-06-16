import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBar position="absolute" className={this.props.classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>
                        Common Interests Network
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
