import React, {FC, useEffect, useState} from "react";
import s from "./Paginator.module.css";
import btn from '../../common/styles/Button.module.css'


type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize: number
}

export const Paginator: FC<PaginatorType> = ({
                                                 totalUsersCount,
                                                 pageSize,
                                                 currentPage,
                                                 onPageChanged,
                                                 portionSize = 10
                                             }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(0)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize));
    }, [currentPage, portionSize]);


    return <div>
        {portionNumber > 1 &&
            <button className={btn.button} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
        <div>
            <div>
                {pages.filter(p=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span className={
                            currentPage === p ? s.selectedPage : ""}
                                     onClick={(e) => {
                                         onPageChanged(p)
                                     }}>{p}</span>
                    })}
                {portionCount > portionNumber &&
                <button className={btn.button} onClick={() => {setPortionNumber(portionNumber + 1)}
                }>NEXT</button>}
            </div>
        </div>
    </div>

}