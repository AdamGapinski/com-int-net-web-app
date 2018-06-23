import React from "react";
import PostsSheet from "./PostsSheet";
import AddPostButton from "./AddPostButton"
import CategorySearch from "./CategorySearch";

class MainPanel extends React.Component {
    onCategoryAdd = (categories) => {
        this.setState({
            categories: categories,
        })
    };
    onCategoryDelete = (categories) => {
        this.setState({
            categories: categories
        })
    };
    onPostAdd = () => {
        window.setTimeout(() => {
            this.fetchCategorySuggestions();
            this.refreshPostList();
        }, 1500)
    };

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            suggestions: [],
            forcePostListRefresh: false
        }
    }

    fetchCategorySuggestions() {
        this.props.api.fetchCategories().then(fetched => {
            if (fetched && Array.isArray(fetched)) {
                console.log(fetched);
                this.setState({
                    suggestions: fetched.map(category => category.name)
                })
            }
        })
    }

    refreshPostList() {
        this.setState({
            forcePostListRefresh: true
        })
    }

    componentDidMount() {
        this.fetchCategorySuggestions();
    }

    render() {
        let categories = [];
        if (this.state.forcePostListRefresh) {
            this.setState({
                forcePostListRefresh: false
            })
        } else {
            categories = this.state.categories;
        }
        return (
            <main className={this.props.classes.content}>
                <div className={this.props.classes.toolbar}/>
                <CategorySearch api={this.props.api}
                                onCategoryAdd={this.onCategoryAdd}
                                onCategoryDelete={this.onCategoryDelete}
                                suggestions={this.state.suggestions}/>
                <PostsSheet api={this.props.api}
                            categories={categories}
                            user={this.props.user}/>
                <AddPostButton api={this.props.api}
                               classes={this.props.classes}
                               onPostAdd={this.onPostAdd}
                               refreshPostList={this.refreshPostList}/>
            </main>
        );
    }
}

export default MainPanel;
