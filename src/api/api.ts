import axios from "axios";
import {getUsersThunkCreator} from "../redux/users-reducer";



const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ac3ca72e-2bdb-4b9d-af5b-dc2086da7d35"
    }
})

export const usersAPI = {
    requestUsers(page: number, pageSize: number) {
        return instance.get( `users?page=${page}$count=${pageSize}`,
        )
            .then(response => response.data);
    },
    follow(userId: string) {
        return instance.post(`unfollow/${userId}`,
        )
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`,
        )
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}




export const profileAPI = {

    getProfile(userId: string) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status});
    }


}


export const authAPI = {
    me() {
    return instance.get(`auth/me`,)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}