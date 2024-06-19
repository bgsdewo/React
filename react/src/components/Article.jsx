function Article(props) {

    return (
        <>
            <div>{props.name}</div>
            <div>
                {props.titles.map(title => {
                    return <div>{title}</div>;
                })}
            </div>
        </>
    );
    // return <div>{nama}</div> //ini digunakakn ketika kita ingin meretrun satu elemen saja
}

export default Article