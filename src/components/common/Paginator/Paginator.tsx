import React, {FC} from "react";
import s from "./Paginator.module.css";


type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export const Paginator:FC<PaginatorType> = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            <div>
                {pages.map(p => {
                    return <span className={currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => {
                                    onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
        </div>
    </div>

}