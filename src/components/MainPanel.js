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
    onPostAdd = () => {
        window.setTimeout(() => {
            this.fetchCategorySuggestions();
        }, 1000)
    };
    componentDidMount() {
        this.fetchCategorySuggestions();
    }
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            suggestions: []
        }
    }

    render() {
        return (
            <main className={this.props.classes.content}>
                <div className={this.props.classes.toolbar}/>
                <CategorySearch api={this.props.api}
                                onCategoryAdd={this.onCategoryAdd}
                                onCategoryDelete={this.onCategoryDelete}
                                suggestions={this.state.suggestions}/>
                <PostsSheet api={this.props.api} categories={this.state.categories}/>
                <AddPostButton api={this.props.api} classes={this.props.classes} onPostAdd={this.onPostAdd}/>
            </main>
        );
    }
}

export default MainPanel;
