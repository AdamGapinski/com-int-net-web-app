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
        this.props.api.fetchPosts().then(fetched => {
            this.setState({
                posts: fetched
            });
        });
    }

    render() {
        const postCards = [];
        if (this.state.posts && Array.isArray(this.state.posts)) {
            this.state.posts.forEach(post => postCards.push(<PostCard key={post.id} post={post} api={this.props.api}/>));
        }
        return (
            <GridList>
                {postCards}
            </GridList>
        );
    }
}

export default PostsList;
