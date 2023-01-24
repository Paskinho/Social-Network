import axios from "axios";

type GetUsersPropsType = {
    currentPage: number,
    pageSize: number
}


export const getUsers = (props: GetUsersPropsType) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}$count=${props.pageSize}`,
        {
            withCredentials: true
        }
    )
}