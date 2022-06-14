import React from 'react'
import style from './searchBar.module.scss'
import searchIcon from '../../../assets/images/loupe.png'

function SearchBar() {
    return (
        <div className={style.searchBox}>
            <input type="text" placeholder="Search Friend" />
            <button type='button'>
                <img className={style.searchIcon} src={searchIcon} alt="search" />
            </button>
        </div>
    )
}

export default SearchBar
