import axios from "axios";
import {LoginFormType} from "../components/Login/Login";
import {ProfileType} from "../components/Profile/ProfileContainer";


type AuthMeResponseDataType = {
    id: number
    login: string
    email: string
}

type ResponseType<D = {}> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "62f5ab85-ff47-472d-b076-68aee8" // Мой ID 26952
    }
})

export const usersAPI = {
    getUsers(page: number, pageSize: number) {
        return instance.get(`users?page=${page}$count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id: number) {
        return instance.post(`follow/${id}`,
        ).then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`,
        ).then(response => response.data);
    },
    // getProfile(userId: string) {
    //     // console.warn('Obsolete method. Please profileAPI object.')
    //     return profileAPI.getProfile(userId);
    // }
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`).then(res => res.data);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`).then(res => res.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status}).then(res => res.data);
        ;
    },
    savePhoto(photoFile: string) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        })
    },
    saveProfile(profile: ProfileType) {
      return instance.put('profile', profile)
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(loginData: LoginFormType) {
        return instance.post(`auth/login`, loginData)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}