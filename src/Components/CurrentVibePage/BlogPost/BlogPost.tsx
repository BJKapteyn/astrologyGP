import React from 'react';
import { Blog } from '../../../Types/ProjectTypes';

type BlogPostProps = {
    blog: Blog;
};

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
    return (
        <div
            className="blogpost-container"
            style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}
        >
            <h2 className="blogpost-title">{blog.title}</h2>
            <p className="blogpost-meta">
                <strong className="blogpost-author">{blog.author}</strong> &middot; <em className="blogpost-date">{blog.date}</em>
            </p>
            <div className="blogpost-content">{blog.content}</div>
        </div>
    );
};

export default BlogPost;