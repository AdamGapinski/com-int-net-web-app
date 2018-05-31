import React from "react";
import ChipsArray from "./ChipsArray";
import HomeSheet from "./HomeSheet";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import AddIcon from "@material-ui/icons/Add";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className={this.props.classes.content}>
                <div className={this.props.classes.toolbar}/>
                <ChipsArray/>
                <HomeSheet/>
                <Button variant="fab" color="primary" aria-label="add" className={this.props.classes.button}>
                    <AddIcon/>
                </Button>
                <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
            </main>
        );
    }
}

export default Main;