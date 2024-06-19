function Article() {
    const nama = 'Bagus'
    const titles = ['HTML','JS','CSS']
    // titles.map(item => item)
    return (
        <>
        <div>{nama}</div>
        {/* <div>
            {titles.map(title => <div>{title}</div>)}  */}
            {/* kalo me returnnya satu elemen menggunakan ini */}
        {/* </div> */}
        
        <div>{titles.map(title => {
            return (
                <>
                <div>{title}</div>
                <div>{title}</div>
                {/* jika ingin mereturn dua elemen gunakanlah cara ini! */}
                </>
            )
        })}</div>
        </>
    )
    // return <div>{nama}</div> //ini digunakakn ketika kita ingin meretrun satu elemen saja
}

export default Article