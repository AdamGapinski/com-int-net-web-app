import React from "react";
import PostsSheet from "./PostsSheet";
import AddPostButton from "./AddPostButton"
import CategorySearch from "./CategorySearch";

class MainPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    onCategoryAdd = (categories) => {
        this.setState({
            categories: categories
        })
    };

    onCategoryDelete = (categories) => {
        this.setState({
            categories: categories
        })
    };

    render() {
        return (
            <main className={this.props.classes.content}>
                <div className={this.props.classes.toolbar}/>
                <CategorySearch api={this.props.api}
                                onCategoryAdd={this.onCategoryAdd}
                                onCategoryDelete={this.onCategoryDelete}/>
                <PostsSheet api={this.props.api} categories={this.state.categories}/>
                <AddPostButton classes={this.props.classes}/>
            </main>
        );
    }
}

export default MainPanel;
