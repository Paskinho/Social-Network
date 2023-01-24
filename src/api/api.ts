import axios from "axios";

export const getUsers = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}$count=${this.props.pageSize}`,
        {
            withCredentials: true
        }
    )
}