import React from "react";
import AddResultSnackbar from "./AddResultSnackbar";
import CategorySearch from "./CategorySearch";
import Button from "@material-ui/core/es/Button/Button";
import AddGroupDialog from "./AddGroupDialog";

export default class GroupsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroups: [],
            suggestions: [],
            joined: undefined,
            created: undefined
        }
    }

    fetchGroupSuggestions() {
        this.props.api.fetchGroups().then(fetched => {
            if (fetched && Array.isArray(fetched)) {
                this.setState({
                    suggestions: fetched.map(group => group.name)
                })
            }
        })
    }

    componentDidMount() {
        this.fetchGroupSuggestions();
    }

    onGroupAdd = (groups) => {
        this.setState({
            selectedGroups: groups,
        })
    };

    onGroupDelete = (groups) => {
        this.setState({
            selectedGroups: groups
        })
    };

    joinGroup = (name) => {
        this.props.api.joinGroup({
            name: name
        }, () => {
            this.setState({
                joined: true
            });
            this.props.fetchGroups();
        }, () => {
            this.setState({
                joined: false
            })
        })
    };

    onGroupJoin = () => {
        this.state.selectedGroups.forEach(group => {
            this.joinGroup(group);
        })
    };

    onGroupCreate = () => {
        this.setState({
            openAddGroupDialog: true
        })
    };

    addGroup = () => {
        const inputEl = document.getElementById("add-group-text-field");
        if (inputEl) {
            const input = inputEl.value.trim();
            this.props.api.addGroup({
                name: input,
            }, () => {
                this.setState({
                    created: true
                });
                this.props.fetchGroups();
            }, () => {
                this.setState({
                    created: false
                })
            });
        }
        this.setState({
            openAddGroupDialog: false
        })
    };

    render() {
        let snackbar = <div/>;
        if (this.state.joined) {
            snackbar = <AddResultSnackbar text={"You have joined the group"}
                                          onSnackbarClose={() => this.setState({joined: undefined})}/>;
        } else if (this.state.subscribed === false) {
            snackbar = <AddResultSnackbar text={"Joining group failed"}
                                          onSnackbarClose={() => this.setState({joined: undefined})}/>;
        } else if (this.state.openAddGroupDialog) {
            return (
                <AddGroupDialog open={true} handleClose={() => this.setState({openAddGroupDialog: false})} addGroup={this.addGroup}/>
            );
        }
        return (
            <div className={this.props.classes.content}>
                <div className={this.props.classes.toolbar}/>
                <CategorySearch api={this.props.api}
                                onAdd={this.onGroupAdd}
                                onDelete={this.onGroupDelete}
                                suggestions={this.state.suggestions}
                                selectedItem={this.state.selectedGroups}
                                placeholder="select group"/>
                <Button variant="raised" color="primary" onClick={this.onGroupJoin}>
                    Join selected
                </Button>
                <br/><br/>
                <Button variant="raised" color="primary" onClick={this.onGroupCreate}>
                    Create group
                </Button>
                {snackbar}
            </div>
        );
    }
}