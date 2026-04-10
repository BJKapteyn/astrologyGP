import { useState } from "react";
import { Link } from "react-router-dom";
import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import { useGetAzureFunction } from "../../../CustomHooks/useGetAzureFunction";
import { LoadingIndicator } from "../../PageElements/LoadingIndicator/LoadingIndicator";
import { buildAzureFunctionURL } from "../../../UtilityFunctions/urlUtility";
import { Blog } from "../../../Models/Types/types";
import '../EditButtons/EditButtons.css';
import { FunctionNames } from "../../../Enums/FunctionNames";

export const EditBlog: React.FC = () => {
    const getAllBlogPostsEndpoint = buildAzureFunctionURL(FunctionNames.GetAllBlogPosts, process.env.REACT_APP_GET_ALL_BLOG_POSTS);
    const [blogPosts, setBlogPosts] = useState<Blog[] | null>(null);
    
    const blogData = useGetAzureFunction(getAllBlogPostsEndpoint);

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
            {blogPosts ? 
                blogPosts.map((blogPost: Blog) => {
                return (
                    <div className="edit-blog-post" key={blogPost.id}>
                        <h4>{blogPost.Title}</h4>
                        <Link className="edit-blog-link" to={`./${blogPost.id}`} state={blogPost}>
                            <ActionButton buttonSettings={{ buttonText: 'Edit' }}></ActionButton>
                        </Link>
                    </div>
                );
            }) : 
            (
                <LoadingIndicator message="No Blog Posts Found" />
            )}
        </div>
    );
};
