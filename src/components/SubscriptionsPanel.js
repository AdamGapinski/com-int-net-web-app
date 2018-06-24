import React from "react";

export default class SubscriptionsPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div className={this.props.classes.content}/>)
    }
}