import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from "./pagination.module.scss";

interface Props {
    currentPortion: number
    portionCount: number
    currentPage: number
    arrayPages: number[]
    onPageChanged: (pageNumber: number) => void
    portionSize: number
    isFriendsList?: boolean
    userSearchName?: string
}

function Pagination({
                        currentPortion,
                        portionCount,
                        currentPage,
                        arrayPages,
                        onPageChanged,
                        portionSize,
                        isFriendsList,
                        userSearchName
                    }: Props) {

    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = ((portionNumber - 1) * portionSize + 1);
    const rightPortionPageNumber = (portionNumber * portionSize);

    useEffect(() => setPortionNumber(currentPortion)
        , [isFriendsList, userSearchName, currentPortion])

    return (
        <div className={style.pageCount}>
            {portionNumber > 1 &&
            <>
                <span className={style.arrow}
                      onClick={() => setPortionNumber(1)}
                      title="To the first portion pages"
                >
                    <FontAwesomeIcon icon="angle-double-left"/>
                </span>
                <span className={style.arrow}
                      onClick={() => setPortionNumber(portionNumber - 1)}
                      title="Previous portion of pages"
                >
                    <FontAwesomeIcon icon="angle-left"/>
                </span>
            </>
            }
            {arrayPages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span className={classNames(currentPage === p && style.current, style.numberPage)}
                                onClick={() => onPageChanged(p)}
                                key={p}
                                title={currentPage !== p ? "Click to select a page" : "Current page"}
                >{p}</span>)}
            {portionCount > portionNumber &&
            <>
                <span className={style.arrow}
                      onClick={() => setPortionNumber(portionNumber + 1)}
                      title="Next portion of pages"
                >
                    <FontAwesomeIcon icon="angle-right"/>
                </span>
                <span className={style.arrow}
                      onClick={() => setPortionNumber(portionCount)}
                      title="To the last portion pages"
                >
                <FontAwesomeIcon icon="angle-double-right"/>
            </span>
            </>}

        </div>
    )
}

export default Pagination