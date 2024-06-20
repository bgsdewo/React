

function Article(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <small>Date: {props.date}, tags: {props.tags && props.tags.length > 0 ? props.tags.join(", ") : "No tags"}</small>
        </>
    );
}

export default Article;