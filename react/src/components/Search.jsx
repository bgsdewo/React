import { useState } from "react"
function Search(props) {
    const [search,setSearch] =useState('')
    const onSearchChange = () => {
        props.onSearchChange(search)
    }
    const searchKeydown = e => {
    if(e.key === 'Enter') {
        onSearchChange()
    }
    }
    return (
        <>
        <div>Cari artikel: <input type="text" onChange={e => setSearch(e.target.value)} onKeyDown={searchKeydown} />
        <button onClick={onSearchChange}>Cari</button>
        </div>    

        <small>Ditemukan {props.totalPosts} data dengan pencarian {search}</small>
        </>
    )
}

export default Search