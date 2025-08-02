import { useState } from 'react';
import { Blog } from '../../../../Types/ProjectTypes';
import { buildAzureFunctionURL } from '../../../../UtilityFunctions/urlUtility';
import './CreateBlogForm.css'

interface CreateBlogFormProps {
  // Define any props needed for the CreateBlogForm component     
  blog: Blog; // Allow blog to be null for creating a new blog
}

export const CreateBlogForm: React.FC<CreateBlogFormProps> = ({ blog = {} as Blog}) => {
  const [blogData] = useState<Blog>(blog);
  const [loadingText, setLoadingText] = useState<string | null>(null);
  const endpoint = buildAzureFunctionURL('UpsertBlogPost', process.env.REACT_APP_UPSERT_BLOG)

  const getAllItems = async (endpointUrl: string, requestBody: string): Promise<Response> => {
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

  const handleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    blogData.PublishDate = blogData?.PublishDate ?? new Date().toISOString().split('T')[0]; // Set default publish date if not provided
    setLoadingText("Submitting blog post...");

    let upsertResponse: Response = await getAllItems(endpoint, JSON.stringify(blogData));

    if (upsertResponse.ok) {
      setLoadingText(null);
      alert("Blog post submitted successfully!");
      window.location.reload(); 
    } else {
      setLoadingText("Error submitting blog post. Please refresh and try again.");
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
        <input required onChange={element => blogData.PublishDate = element.target.value} type="date" id="publishDate" name="publishDate" defaultValue={blogData?.PublishDate || new Date(Date.now()).toISOString().split('T')[0]} />
        { loadingText ? <p>{loadingText}</p> : <button type="submit">Submit</button> }
      </form>
    </div>
  );
}
