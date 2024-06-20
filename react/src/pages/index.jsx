
import posts from '../post.json';
import Article from '../components/Article';

function Homepage() {
    return (
        <>
            <h1>Simple blog</h1>
            {posts.map((blog, index) => 
                <Article key={index} title={blog.title} tags={blog.tags} date={blog.date} />
            )}
        </>
    );
}

export default Homepage;
