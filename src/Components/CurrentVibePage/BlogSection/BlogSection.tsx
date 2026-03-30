import { useState } from 'react';
import { LoadingIndicator } from '../../PageElements/LoadingIndicator/LoadingIndicator.jsx';
import { Blog } from '../../../Models/Types/types';
import { ReactComponent as Eye } from '../../../Pics/SvgDrawings/EYE-VECTOR.svg'
import { BlogPost } from '../BlogPost/BlogPost';
import { TitleCard } from '../../PageElements/TitleCard/TitleCard.jsx';
import { usePostAzureFunction } from '../../../CustomHooks/usePostAzureFunction';
import { buildAzureFunctionURL } from '../../../UtilityFunctions/urlUtility.js';
import { Link } from 'react-router-dom';
import './BlogSection.css';

export const BlogSection: React.FC = () => {
    const [externalBlogPosts, setExternalBlogPosts] = useState<Blog[] | null>(null); 
    const getAllBlogPostsUrl = buildAzureFunctionURL('GetAllBlogPosts', process.env.REACT_APP_GET_ALL_BLOG_POSTS);
    
    const blogPostsData: Blog[] | null = usePostAzureFunction(getAllBlogPostsUrl, process.env.REACT_APP_GET_ALL_BLOG_POSTS ?? "") as Blog[] | null;

    if (!!blogPostsData && !!externalBlogPosts === false && blogPostsData.length > 0) {
        if (blogPostsData.length > 1) {
            // Set only the most recent blog post
            setExternalBlogPosts(blogPostsData.sort((post1, post2) => {
                return new Date(post2.PublishDate).getTime() - new Date(post1.PublishDate).getTime();
            }));
        } else {
            setExternalBlogPosts(blogPostsData as Blog[]);
        }   
    }

    const titleConfiguration = {
        titleText: 'The Current Vibe',
        styleId: 'blogsection-titlecard',
        svgElement: <Eye style={{width: '4em', height: '4em', margin: '0 auto', justifyContent: 'center'}} />,
    };

    const blogSection = (
        <div className="blogsection" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TitleCard titleData={titleConfiguration} />
            {externalBlogPosts ? 
            externalBlogPosts?.map(blogData => {
                const blogLink = (
                    <Link key={blogData.id} to={`./${blogData.id}/${blogData.PublishDate}`}>
                        <BlogPost blog={blogData} />
                    </Link>);

                return blogLink;
            }) : 
            <LoadingIndicator message="No blogs currently available please check back later." />}
        </div>
    );

    return (
        <>
            {blogSection}
        </>
    );
};