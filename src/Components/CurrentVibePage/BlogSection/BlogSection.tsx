import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import * as Posts from './blogPosts.json'
import { Blog } from '../../../Types/ProjectTypes';
import './BlogSection.css';

type BlogSectionProps = {
    blogs: Blog[];
};

const BlogSection: React.FC<BlogSectionProps> = () => {
    return (
        <div className="blogsection" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {Posts.map((blog) => (
                <BlogPost key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default BlogSection;