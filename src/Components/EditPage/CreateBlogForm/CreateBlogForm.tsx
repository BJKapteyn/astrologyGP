import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Blog } from '../../../Types/ProjectTypes';
import { buildAzureFunctionURL } from '../../../UtilityFunctions/urlUtility';
import './CreateBlogForm.css'

interface CreateBlogFormProps {
  blog: Blog; 
}

export const CreateBlogForm: React.FC<CreateBlogFormProps> = ({ blog = {} as Blog }) => {
  const [blogData, setBlogData] = useState<Blog>(blog);
  const [loadingText, setLoadingText] = useState<string | null>(null);
  const endpoint = buildAzureFunctionURL('UpsertBlogPost', process.env.REACT_APP_UPSERT_BLOG)
  const location = useLocation();

  if(location.state && location.state.id !== blogData.id) {
    setBlogData(location.state as Blog);
  }

  const upsertItem = async (endpointUrl: string, requestBody: string): Promise<Response> => {
    let upsertResponse: Response = {} as Response;

    await fetch(endpointUrl, {
      method: "post",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: requestBody
    })
    .then(response => {
      console.debug("Response received:", response);
      upsertResponse = response;
      return response.json();
    })
    .then(data => console.log("Data received:", data))
    .catch(err => console.debug(err));

    return upsertResponse;
  }

  function getDate() {
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
    blogData.PublishDate = blogData?.PublishDate ?? new Date().toLocaleString().split('T')[0]; 
    setLoadingText("Submitting blog post...");

    let upsertResponse: Response = await upsertItem(endpoint, JSON.stringify(blogData));

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

  return (
    <div className="blog-edit-form" >
      <h1>Create Blog Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input required onChange={element => blogData.Title = element.target.value} type="text" id="title" name="title" defaultValue={blogData?.Title || ''} />
        <textarea required onChange={element => blogData.Content = element.target.value} id="content" name="content" defaultValue={blogData?.Content || ''} />
        <label htmlFor="author">Author:</label>
        <input required onChange={element => blogData.Author = element.target.value} type="text" id="author" name="author" defaultValue={blogData?.Author || ''} />
        <label htmlFor="publishDate">Publish Date</label>
        <input required onChange={element => blogData.PublishDate = new Date(element.target.value)} type="date" id="publishDate" name="publishDate" defaultValue={new Date(getDate()).toISOString().split('T')[0]} />
        { loadingText ? <p>{loadingText}</p> : <button type="submit">Submit</button> }
      </form>
    </div>
  );
}
