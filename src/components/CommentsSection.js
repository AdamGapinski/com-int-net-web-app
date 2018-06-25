import React from "react";
import CommentsList from "./CommentsList";
import AddCommentField from "./AddCommentField";

export default class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        this.fetchComments();
    }

    commentAdded = () => {
        this.fetchComments();
    };

    fetchComments() {
        this.props.api.fetchComments(this.props.post.id, this.props.group).then(fetched => {
            this.setState({
                comments: fetched
            });
        });
    }

    render() {
        return (
            <div>
                <CommentsList api={this.props.api}
                              post={this.props.post}
                              comments={this.state.comments}/>
                <AddCommentField api={this.props.api} user={this.props.user} post={this.props.post}
                                 onSuccess={this.commentAdded}/>
            </div>
        );
    }
}