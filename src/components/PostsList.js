import GridList from "@material-ui/core/GridList/GridList";
import React from "react";
import PostCard from "./PostCard";

class PostsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        PostsList.fetchPosts().then(fetched => {
            this.setState({
                posts: fetched
            });
        });
    }

    static fetchPosts() {
        return fetch("http://localhost:8080/posts")
            .then(r => r.json())
            .catch(error => console.error('Error:', error));
    }

    render() {
        const posts = [];
        this.state.posts.forEach(post => posts.push(<PostCard key={post.id} post={post} />));
        return (
            <GridList>
                {posts}
            </GridList>
        );
    }
}

export default PostsList;