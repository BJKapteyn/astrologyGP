import { usePostAzureFunction } from 'CustomHooks/usePostAzureFunction';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getItemIdFromUrlPath } from 'UtilityFunctions/urlUtility';

interface BlogAPIKeys {
    id: string;
    partitionKey: string;
}

const SingleBlogPost: React.FC = () => {
    const [postId, setPostId] = useState<string>('');
    const location = useLocation();
    const id: string | undefined = getItemIdFromUrlPath(location.pathname);
    const blogPost = usePostAzureFunction('GetBlogPostById', { id: postId }, id);

    useEffect(() => {
        if (id) {
            setPostId(id);
        }
    }, [id]);

    return <></>;
};

export default SingleBlogPost;