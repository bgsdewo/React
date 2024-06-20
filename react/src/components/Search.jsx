import { useState } from "react"
function Search(props) {
    const [search,setSearch] =useState('')
    const onSearchChange = (event) => {
        setSearch(event.target.value)
        props.onSearchChange(event.target.value)
    }
    return (
        <>
        <div>Cari artikel: <input type="text" onChange={onSearchChange} /></div>
        <small>Ditemukan 0 data dengan pencarian {search}</small>
        </>
    )
}

export default Search