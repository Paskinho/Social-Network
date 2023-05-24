import React, {FC, useState} from "react";
import s from "./Paginator.module.css";


type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize: number
}

export const Paginator:FC<PaginatorType> = ({totalUsersCount,pageSize,currentPage,onPageChanged, portionSize=10}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(0)
    const leftPortionPageNumber = (portionNumber - 1 ) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize

    return <div>
        {portionNumber > 1 &&
        <button></button>}
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