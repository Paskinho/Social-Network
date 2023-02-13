import axios from "axios";



const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "aeefc5de-7fbe-47c0-93be-ce3a4d1e3ad8"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get( `users?page=${currentPage}$count=${pageSize}`,
        )
            .then(response => response.data);
    },
    follow(userId: string) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/unfollow/${userId}`,
        )
    },
    unfollow(userId: string) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        )
    },
    getProfile(userId: string) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId);
    }
}

