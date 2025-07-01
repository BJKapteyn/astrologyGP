import React, { useState } from 'react';
import BlogPost from '../BlogPost/BlogPost.tsx';
import { LoadingIndicator } from '../../PageElements/LoadingIndicator/LoadingIndicator.jsx';
import Posts from './blogPosts.json'
import { Blog } from '../../../Types/ProjectTypes';
import './BlogSection.css';

export const BlogSection: React.FC = () => {
    const [blogposts, setBlogPosts] = useState<Blog[] | null>(null);

    if(!blogposts) {
        const postsArray: Blog[] = JSON.parse(JSON.stringify(Posts));

        setBlogPosts(postsArray as Blog[]);
    }

    const blogSection = (
        <div className="blogsection" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {blogposts?.map(blogData => {
                return <BlogPost key={blogData.id} blog={blogData} />
            })}
        </div>
    )

    return (
        <>
            {blogposts ? blogSection : <LoadingIndicator />}
        </>
    );
};