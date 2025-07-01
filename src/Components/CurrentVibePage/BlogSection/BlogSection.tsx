import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import { Blog } from '../../../Types/ProjectTypes';

type BlogSectionProps = {
    blogs: Blog[];
};

const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {blogs.map((blog) => (
                <BlogPost key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default BlogSection;