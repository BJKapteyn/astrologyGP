import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Blog } from '../../../Types/ProjectTypes';
import { buildAzureFunctionURL } from '../../../UtilityFunctions/urlUtility';
import { sendAPIPost } from '../../../UtilityFunctions/apiUtility';
import './EditBlogForm.css'
import { FunctionNames } from 'Enums/FunctionNames';

interface EditBlogFormProps {
  blog: Blog; 
}

export const EditBlogForm: React.FC<EditBlogFormProps> = ({ blog = {} as Blog }) => {
  const [blogData, setBlogData] = useState<Blog>(blog);
  const [loadingText, setLoadingText] = useState<string | null>(null);
  const [deleteLoadingText, setDeleteLoadingText] = useState<string | null>(null);
  const upsertEndpoint = buildAzureFunctionURL(FunctionNames.UpsertBlogPost, process.env.REACT_APP_UPSERT_BLOG);
  const deleteEndpoint = buildAzureFunctionURL(FunctionNames.DeleteBlogPostById, process.env.REACT_APP_DELETE_BLOG_POST_BY_ID);
  const location = useLocation();
  const navigate = useNavigate();

  if(location.state && location.state.id !== blogData.id) {
    setBlogData(location.state as Blog);
  }

  function getBlogPublishDate() {
    let publishDate: string;
    if (blogData?.PublishDate) {
      publishDate = new Date(blogData.PublishDate).toLocaleString().split(',')[0];
    } else {
      publishDate = new Date(Date.now()).toLocaleString().split(',')[0];
    }
    return publishDate;
  }

  const handleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    blogData.PublishDate = blogData?.PublishDate ?? new Date().toISOString().split('T')[0]; 
    setLoadingText("Submitting blog post...");

    let upsertResponse: Response = await sendAPIPost(upsertEndpoint, JSON.stringify(blogData));

    if (upsertResponse.ok) {
      setLoadingText(null);
      let alertMessage = 'Blog post submitted successfully!';

      if (upsertResponse.status === 201) 
        alertMessage = 'Blog post created successfully!';
      
      alert(alertMessage);
      window.location.reload();
    }
    console.log("Form submitted:", blogData);
  };

  const handleDelete = async (formEvent: React.FormEvent<HTMLFormElement>, blogId: string, blogPartitionKey: string) => {
    formEvent.preventDefault();
    setDeleteLoadingText("Deleting blog post...");

    let deleteResponse: Response = await sendAPIPost(deleteEndpoint, JSON.stringify({ id: blogId, partitionKey: blogPartitionKey }));

    if (deleteResponse.ok) {
      setDeleteLoadingText(null);
      alert('Blog post deleted successfully!');
      setBlogData({} as Blog);

      navigate(-1);
    }
    console.log("Form submitted:", blogData);
  };

  return (
    <div className="blog-edit-form">
      <h1 className="blog-edit-form__title">Create/Edit Blog</h1>
      <form className="blog-edit-form__form" onSubmit={handleSubmit}>
        <label className="blog-edit-form__label" htmlFor="title">Title:</label>
        <input
          className="blog-edit-form__input"
          required
          onChange={element => blogData.Title = element.target.value}
          type="text"
          id="title"
          name="title"
          defaultValue={blogData?.Title || ''}
        />
        <label className="blog-edit-form__label" htmlFor="content">Content:</label>
        <textarea
          className="blog-edit-form__textarea"
          required
          onChange={element => blogData.Content = element.target.value}
          id="content"
          name="content"
          defaultValue={blogData?.Content || ''}
        />
        <label className="blog-edit-form__label" htmlFor="author">Author:</label>
        <input
          className="blog-edit-form__input"
          required
          onChange={element => blogData.Author = element.target.value}
          type="text"
          id="author"
          name="author"
          defaultValue={blogData?.Author || ''}
        />
        <label className="blog-edit-form__label" htmlFor="publishDate">Publish Date</label>
        <input
          className="blog-edit-form__input"
          required
          onChange={element => blogData.PublishDate = new Date(element.target.value)}
          type="date"
          id="publishDate"
          name="publishDate"
          defaultValue={new Date(getBlogPublishDate()).toISOString().split('T')[0]}
        />
        {loadingText ? (
          <p className="blog-edit-form__loading">{loadingText}</p>
        ) : (
          <button className="blog-edit-form__submit" type="submit">Submit</button>
        )}
      </form>
      {blogData?.id && (
        <form className="blog-edit-form__delete-form" onSubmit={(event) => handleDelete(event, blogData.id, blogData.PublishDate.toString())}>
          {deleteLoadingText ? (
            <p className="blog-edit-form__loading">{deleteLoadingText}</p>
          ) : (
            <button className="blog-edit-form__delete-button" type="submit">Delete</button>
          )}
        </form>
      )}
    </div>
  );
}
