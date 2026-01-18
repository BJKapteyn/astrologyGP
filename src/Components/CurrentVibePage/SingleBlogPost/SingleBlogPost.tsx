import { usePostAzureFunction } from 'CustomHooks/usePostAzureFunction';
import { useParams } from 'react-router-dom';
import { BlogPost } from '../BlogPost/BlogPost';
import { buildAzureFunctionURL } from 'UtilityFunctions/urlUtility';
import { LoadingIndicator } from 'Components/PageElements/LoadingIndicator/LoadingIndicator';
import { Blog } from 'Models/Types/types';

export const SingleBlogPost: React.FC = () => {
    const url: string = buildAzureFunctionURL('GetBlogPostById', process.env.REACT_APP_GET_BLOG_POST_BY_ID);
    const {blogId, partKey} = useParams();
    const blogPost: Blog | null = usePostAzureFunction(url, { id: blogId, partitionKey: partKey }, blogId);

    if (!!blogPost) {
        return <BlogPost blog={blogPost} />;
    } else {
        return <LoadingIndicator />;
    }
};
