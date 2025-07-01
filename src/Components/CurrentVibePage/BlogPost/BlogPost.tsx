import { Blog } from '../../../Types/ProjectTypes';
import { useRandomImageUrl } from '../../../CustomHooks/useRandomImageUrl';

type BlogPostProps = {
    blog: Blog;
};

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
    const randomImageUrl = useRandomImageUrl();
    const imageUrl = blog.imageUrl || randomImageUrl;
    return (
        <div className="blogpost-container">
            <div
                className="blogpost-header"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h2 className="blogpost-title">{blog.title}</h2>
                <p className="blogpost-meta">
                    <strong className="blogpost-author">{blog.author}</strong>
                    <em className="blogpost-date">{blog.date}</em>
                </p>
            </div>
            <div className="blogpost-content">{blog.content}</div>
        </div>
    );
};

export default BlogPost;