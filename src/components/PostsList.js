import GridList from "@material-ui/core/GridList/GridList";
import React from "react";
import PostCard from "./PostCard";

class CategoryPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.props.api.fetchPostsByCategory(this.props.category).then(fetched => {
            if (fetched && Array.isArray(fetched)) {
                this.setState({
                    posts: fetched.map(post => <PostCard key={post.id} post={post} api={this.props.api}/>)
                });
            }
        });
    }

    render() {
        const postCards = [];
        if (this.state.posts && Array.isArray(this.state.posts)) {
            this.state.posts.forEach(post => postCards.push(<PostCard key={post.id} post={post} api={this.props.api}/>));
        }
        return (
            <div key={this.props.key}>
                {this.state ? this.state.posts : []}
            </div>
        );
    }
}

class PostsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let posts = [];
        let key = 0;
        this.props.categories.forEach(value => posts.push(<CategoryPosts key={key++} api={this.props.api} category={value}/>));
        return (
            <GridList>
                {posts}
            </GridList>
        );
    }
}

export default PostsList;
