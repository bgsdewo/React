import { useState } from 'react';
import posts from '../post.json';
import Article from '../components/Article';

function Homepage() {
    // let search = ''
    const [search,setSearch] =useState('')
    const changeSearch = (event) => {
        console.log(event.target.value)
        // search = event.target.value
        setSearch(event.target.value)
    }
    return (
        <>
            <h1>Simple blog</h1>
            <div>Cari artikel: <input type="text" onChange={changeSearch} /></div>
            <small>Ditemukan 0 data dengan pencarian {search}</small>
            {posts.map(({title,tags,date},index) => 
                // <Article key={index} title={title} tags={tags} date={date} />
                <Article {...{title,tags,date}}  key={index}/>
            )}
        </>
    );
}

export default Homepage;
