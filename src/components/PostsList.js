import GridList from "@material-ui/core/GridList/GridList";
import React from "react";
import PostCard from "./PostCard";


class PostsList extends React.Component {
    equalsWithFetched = () => {
        if (this.props.categories.length !== this.state.fetchedCategories.length) {
            return false;
        }
        this.props.categories.forEach(category => {
            if (!this.state.fetchedCategories.includes(category)) {
                return false;
            }
        });
        return true;
    };

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            fetchedCategories: []
        }
    }

    render() {
        if (this.props.categories.length > 0 &&
            !this.equalsWithFetched()) {
            this.props.api.fetchPostsByCategories(this.props.categories, this.props.group).then(fetched => {
                if (fetched && Array.isArray(fetched)) {
                    this.setState({
                        posts: fetched.map(post => <PostCard key={post.id} post={post} user={this.props.user}
                                                             group={this.props.group}
                                                             api={this.props.api}/>),
                        fetchedCategories: this.props.categories.slice(0)
                    });
                }
            });
        } else if (this.props.categories.length === 0 &&
            !this.equalsWithFetched()) {
            this.setState({
                posts: [],
                fetchedCategories: []
            })
        }

        return (
            <GridList>
                {this.state.posts}
            </GridList>
        );
    }
}

export default PostsList;
