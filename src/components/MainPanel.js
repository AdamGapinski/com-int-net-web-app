import React from "react";
import ChipsArray from "./ChipsArray";
import PostsSheet from "./PostsSheet";
import AddPostButton from "./AddPostButton"

class MainPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className={this.props.classes.content}>
                <div className={this.props.classes.toolbar}/>
                <ChipsArray/>
                <PostsSheet api={this.props.api}/>
                <AddPostButton classes={this.props.classes}/>
            </main>
        );
    }
}

export default MainPanel;
