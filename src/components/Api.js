import CONFIG from "./../config.json";

export default class Api {
    addPost = (post, onSuccess, onFailure) => {
        return fetch(`${CONFIG.serverUrl}/posts`, {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(response => {
                if (response.status === 201) {
                    onSuccess();
                } else {
                    onFailure();
                }
            })
            .catch(error => console.error('Error:', error));
    };
    addComment = (comment, post, onSuccess, onFailure) => {
        return fetch(`${CONFIG.serverUrl}/posts/${post.id}/comments`, {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(response => {
                if (response.status === 201) {
                    onSuccess();
                } else {
                    onFailure();
                }
            })
            .catch(error => console.error('Error:', error));
    };
    addLike = (post, onSuccess) => {
        return fetch(`${CONFIG.serverUrl}/posts/${post.id}/likes`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(response => {
                if (response.status === 201) {
                    onSuccess();
                }
            })
            .catch(error => console.error('Error:', error));
    };
    addSubscription = (category, onSuccess, onFailure) => {
        return fetch(`${CONFIG.serverUrl}/user/subscriptions`, {
            method: "POST",
            body: JSON.stringify(category),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(response => {
                if (response.status === 201) {
                    onSuccess();
                } else {
                    onFailure();
                }
            })
            .catch(error => console.error('Error:', error));
    };
    addGroup = (group, onSuccess, onFailure) => {
        return fetch(`${CONFIG.serverUrl}/groups`, {
            method: "POST",
            body: JSON.stringify(group),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(response => {
                if (response.status === 201) {
                    onSuccess();
                } else {
                    onFailure();
                }
            })
            .catch(error => console.error('Error:', error));
    };
    deleteSubscription = (category, onSuccess, onFailure) => {
        return fetch(`${CONFIG.serverUrl}/user/subscriptions`, {
            method: "DELETE",
            body: JSON.stringify(category),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(response => {
                if (response.status === 204) {
                    onSuccess();
                } else {
                    onFailure();
                }
            })
            .catch(error => console.error('Error:', error));
    };
    fetchUser() {
        return fetch(`${CONFIG.serverUrl}/user/me`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            }
        }).then(r => r.json())
            .catch(error => console.error('Error:', error));
    }
    fetchPostsByCategory = (category) => {
        return fetch(`${CONFIG.serverUrl}/categories/${category}/posts`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            }
        }).then(r => r.json())
            .catch(error => console.error('Error:', error));
    };
    fetchPostsByCategories = (categories) => {
        if (Array.isArray(categories)) {
            let categoryList = categories.join("3");
            console.log(`${CONFIG.serverUrl}/categories/list/${categoryList}/posts`);
            return fetch(`${CONFIG.serverUrl}/categories/list/${categoryList}/posts`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token,
                }
            }).then(r => r.json())
                .catch(error => console.error('Error:', error));
        }
    };
    fetchComments = (postId) => {
        return fetch(`${CONFIG.serverUrl}/posts/${postId}/comments`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            }
        }).then(r => r.json())
            .catch(error => console.error('Error:', error));
    };
    fetchLikes = (post) => {
        return fetch(`${CONFIG.serverUrl}/posts/${post.id}/likes`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            }
        }).then(r => r.json())
            .catch(error => console.error('Error:', error));
    };
    fetchCategories = () => {
        return fetch(`${CONFIG.serverUrl}/categories`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            }
        }).then(r => r.json())
            .catch(error => console.error('Error:', error));
    };
    fetchSubscriptions = () => {
        return fetch(`${CONFIG.serverUrl}/user/subscriptions`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            }
        }).then(r => r.json())
            .catch(error => console.error('Error:', error));
    };
    fetchUserGroups = () => {
        return fetch(`${CONFIG.serverUrl}/user/groups`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            }
        }).then(r => r.json())
            .catch(error => console.error('Error:', error));
    };
    fetchGroups = () => {
        return fetch(`${CONFIG.serverUrl}/groups`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            }
        }).then(r => r.json())
            .catch(error => console.error('Error:', error));
    };
    joinGroup = (group, onSuccess, onFailure) => {
        return fetch(`${CONFIG.serverUrl}/user/groups`, {
            method: "POST",
            body: JSON.stringify(group),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(response => {
                if (response.status === 204) {
                    onSuccess();
                } else {
                    onFailure();
                }
            })
            .catch(error => console.error('Error:', error));
    };
    constructor(token) {
        this.token = token;
    }
}