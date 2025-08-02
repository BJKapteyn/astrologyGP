import { useState } from "react";
import { Link } from "react-router-dom";
import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import { usePostAzureFunction } from "../../../CustomHooks/usePostAzureFunction";
import { buildAzureFunctionURL } from "../../../UtilityFunctions/urlUtility";
import '../EditButtons/EditButtons.css';

export const EditBlog: React.FC = () => {
    // const endpointUrl = process.env.REACT_APP_GET_ALL_BLOG_POSTS
    const getAllBlogPostsUrl = buildAzureFunctionURL('GetAllBlogPosts', process.env.REACT_APP_GET_ALL_BLOG_POSTS);
    const [blogPosts, setBlogPosts] = useState(null);
    
    const blogData = usePostAzureFunction(getAllBlogPostsUrl, '');

    if (!!blogData && !!blogPosts === false) {
        setBlogPosts(blogData);
    }

    return (
        <div className="edit-buttons">  
            <h1 style={{ marginBottom: '0px' }}>Blog Post Content</h1>
            <h3>Create New</h3>
            <Link to={'./editBlogForm'}>
                <ActionButton buttonSettings={{ buttonText: 'New Blog Post' }}></ActionButton>
            </Link>
            <h3>Edit Existing</h3>
        </div>
    );
};
