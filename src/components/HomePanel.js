import React from "react";
import CategorySearch from "./CategorySearch";
import PostsSheet from "./PostsSheet";
import AddPostButton from "./AddPostButton";

export default class HomePanel extends React.Component {
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

    refreshPostList() {
        this.setState({
            forcePostListRefresh: true
        })
    }

    fetchCategorySuggestions() {
        this.props.api.fetchCategories().then(fetched => {
            if (fetched && Array.isArray(fetched)) {
                this.setState({
                    suggestions: fetched.map(category => category.name)
                })
            }
        })
    }

    fetchSubscriptions() {
        this.props.api.fetchSubscriptions().then(fetched => {
            if (fetched && Array.isArray(fetched)) {
                this.setState({
                    subscriptions: fetched.map(category => category.name)
                })
            }
        })
    }

    componentDidMount() {
        this.fetchCategorySuggestions();
        this.fetchSubscriptions();
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