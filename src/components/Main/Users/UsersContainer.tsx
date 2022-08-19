import React, {useEffect} from 'react'
import {NumberParam, StringParam, useQueryParams} from 'use-query-params';
import Users from './Users'
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {follow, requestUsers, unfollow} from '../../../store/userThunks'
import {UserFilter} from '../../../store/userSlice'


type QueryParamsType = {
    term?: string
    page?: number
    friend?: string
}

function UsersContainer() {
    const dispatch = useAppDispatch()
    const {pageSize, currentPage, filter} = useAppSelector((state) => state.user)

    const [query, setQuery] = useQueryParams({
        page: NumberParam,
        term: StringParam,
        friend: StringParam
    });
    const {page, term, friend} = query

    useEffect(() => {
        const actualPage = page || currentPage
        let actualFilter = filter
        if (term) actualFilter = {...actualFilter, term}
        if (friend !== undefined) {
            switch (friend) {
                case "null":
                    actualFilter = {...actualFilter, friend: null}
                    break;
                case "true":
                    actualFilter = {...actualFilter, friend: true}
                    break;
                case "false":
                    actualFilter = {...actualFilter, friend: false}
                    break;
                default:
                    actualFilter = {...actualFilter, friend: true}
            }
        }
        dispatch(requestUsers(pageSize, actualPage, actualFilter))
    }, [])

    useEffect(() => {
        const actualQuery: QueryParamsType = {}
        filter.term ? actualQuery.term = filter.term : actualQuery.term = undefined
        if (filter.friend !== undefined) actualQuery.friend = String(filter.friend)
        currentPage !== 1 ? actualQuery.page = currentPage : actualQuery.page = undefined
        setQuery(actualQuery)
    }, [filter, currentPage])

    const followDispatch = (id: number) => {
        dispatch(follow(id))
    }
    const unfollowDispatch = (id: number) => {
        dispatch(unfollow(id))
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageSize, pageNumber, filter))
    }
    const onFilterChanged = (filters: UserFilter) => {
        dispatch(requestUsers(pageSize, 1, filters))
    }

    return (
        <Users
            onPageChanged={onPageChanged}
            follow={followDispatch}
            unfollow={unfollowDispatch}
            onFilterChanged={onFilterChanged}
        />
    )
}

export default UsersContainer
