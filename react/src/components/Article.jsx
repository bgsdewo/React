//rendering dlaam component
const ArticleStatus = ({isNew}) => {
    return isNew && <span>Baru</span>
}

//cara baru utk merendering di luar
const NewArticle = () => {
    return <span>-- Baru</span>
}
function Article(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <small>Date: {props.date}, tags: {props.tags && props.tags.length > 0 ? props.tags.join(", ") : "No tags"}
                <ArticleStatus isNew={props.isNew}/>
                {props.isNew && <NewArticle />}
            </small>
        </>
    );
}

export default Article;