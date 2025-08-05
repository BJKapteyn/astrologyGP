import { useState } from "react";
import { Link } from "react-router-dom";
import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import { useGetAzureFunction } from "../../../CustomHooks/useGetAzureFunction";
import { buildAzureFunctionURL } from "../../../UtilityFunctions/urlUtility";
import '../EditButtons/EditButtons.css';
import { Blog } from "../../../Types/ProjectTypes";

export const EditBlog: React.FC = () => {
    // const endpointUrl = process.env.REACT_APP_GET_ALL_BLOG_POSTS
    const getAllBlogPostsUrl = buildAzureFunctionURL('GetAllBlogPosts', process.env.REACT_APP_GET_ALL_BLOG_POSTS);
    const [blogPosts, setBlogPosts] = useState<Blog[] | null>(null);
    
    const blogData = useGetAzureFunction(getAllBlogPostsUrl);

    if (!!blogData && !!blogPosts === false) {
        setBlogPosts(blogData);
    }

    return (
        <div className="edit-buttons">  
            <h2 style={{ marginBottom: '0px' }}>Blog Post Content</h2>
            <h3>Create New</h3>
            <Link to={'./editBlogForm'}>
                <ActionButton buttonSettings={{ buttonText: 'New Blog Post' }}></ActionButton>
            </Link>
            <h3>Edit Existing</h3>
            {blogPosts && blogPosts.map((blogPost: Blog) => {
                return (
                    <div className="edit-blog-post" key={blogPost.id}>
                        <h4>{blogPost.Title}</h4>
                        <Link className="edit-blog-link" to={`./${blogPost.id}`} state={blogPost}>
                            <ActionButton buttonSettings={{ buttonText: 'Edit' }}></ActionButton>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
