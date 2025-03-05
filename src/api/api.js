const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return fetch(`${baseURL}users?page=${currentPage}&count=${pageSize}`, {
            headers: {'API-KEY' : '6ecb6a05-6db0-4eb7-8512-1150f3ad73dd'},
            credentials: "include"
        }).then(response => response.json())
    }
};

export const followAPI = {
    follow(userId) {
        return fetch(`${baseURL}follow/${userId}`, {
            method: 'POST',
            headers: {'API-KEY' : '6ecb6a05-6db0-4eb7-8512-1150f3ad73dd'},
            credentials: "include"
        }).then(response => response.json())
    },
    unfollow(userId) {
        return fetch(`${baseURL}follow/${userId}`, {
            method: 'DELETE',
            headers: {'API-KEY' : '6ecb6a05-6db0-4eb7-8512-1150f3ad73dd'},
            credentials: "include"
        }).then(response => response.json())
    }
};

export const profileAPI = {
    getProfileInfo(profileID) {
        return fetch(`${baseURL}profile/${profileID}`, {
            headers: {'API-KEY' : '6ecb6a05-6db0-4eb7-8512-1150f3ad73dd'},
            credentials: "include"
        })
            .then(response=>response.json())
    },
    getStatus(profileID) {
        return fetch(`${baseURL}profile/status/${profileID}`, {
            headers: {'API-KEY' : '6ecb6a05-6db0-4eb7-8512-1150f3ad73dd'},
            credentials: "include"
        })
            .then(response=>response.json())
    },
    updateStatus(newStatus) {
        return fetch(`${baseURL}profile/status`, {
            method: 'PUT',
            headers: {
                'API-KEY' : '6ecb6a05-6db0-4eb7-8512-1150f3ad73dd',
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({status: newStatus})
        })
            .then(response=>response.json())
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo);

        return fetch(`${baseURL}profile/photo`, {
            method: 'PUT',
            headers: {
                'API-KEY' : '6ecb6a05-6db0-4eb7-8512-1150f3ad73dd'
            },
            credentials: "include",
            body: formData
        })
            .then(response=>response.json())
    },
    saveProfile(profile) {
        return fetch(`${baseURL}profile`, {
            method: 'PUT',
            headers: {
                'API-KEY' : '6ecb6a05-6db0-4eb7-8512-1150f3ad73dd',
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(profile)
        })
            .then(response=>response.json())
    }
};

export const authAPI = {
    authMe() {
        return  fetch(`${baseURL}auth/me/`, {
            credentials: "include"
        }).then(response => response.json())
    },
    login(login, password, rememberMe = false) {
        return fetch(`${baseURL}auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: login,
                password,
                rememberMe
            }),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then(response => response.json())
    },
    logout() {
        return fetch(`${baseURL}auth/login/`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
};