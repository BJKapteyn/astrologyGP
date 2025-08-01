import { useState } from 'react';
import { Blog } from '../../../../Types/ProjectTypes';
import './CreateBlogForm.css'
import { buildAzureFunctionURL } from '../../../../UtilityFunctions/urlUtility';

interface CreateBlogFormProps {
  // Define any props needed for the CreateBlogForm component     
  blog: Blog; // Allow blog to be null for creating a new blog
}

export const CreateBlogForm: React.FC<CreateBlogFormProps> = ({ blog = {} as Blog}) => {
  const [blogData, setBlogData] = useState<Blog>(blog);
  const endpoint = buildAzureFunctionURL('UpsertBlogPost', process.env.REACT_APP_UPSERT_BLOG)

  const getAllItems = async (endpointUrl: string, requestBody: string) => {
      await fetch(endpointUrl, {
          method: "post",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: requestBody
      })
      .then(response => {
        if(response.ok) {
          console.debug("Response received:", response);
          return response.json();
        }
      })
      .then(data => console.log("Data received:", data))
      .catch(err => console.debug(err));
  }

  const handleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    blogData.PublishDate = blogData?.PublishDate ?? new Date().toISOString().split('T')[0]; // Set default publish date if not provided
    await getAllItems(endpoint, JSON.stringify(blogData));
    console.log("Form submitted:", blogData);
  };

  return (
    <div className="blog-edit-form" >
      <h1>Create Blog Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input onChange={element => blogData.Title = element.target.value} type="text" id="title" name="title" defaultValue={blogData?.Title || ''} />
        <label htmlFor="content">Content:</label>
        <textarea onChange={element => blogData.Content = element.target.value} id="content" name="content" defaultValue={blogData?.Content || ''} />
        <label htmlFor="author">Author:</label>
        <input onChange={element => blogData.Author = element.target.value} type="text" id="author" name="author" defaultValue={blogData?.Author || ''} />
        <label htmlFor="publishDate">Publish Date</label>
        <input onChange={element => blogData.PublishDate = element.target.value} type="date" id="publishDate" name="publishDate" defaultValue={blogData?.PublishDate || new Date().toISOString().split('T')[0]} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
// function capitalize(key, value) {
//   if (value && typeof value === 'object') {
//     var replacement = {};
//     for (var k in value) {
//       if (Object.hasOwnProperty.call(value, k)) {
//         replacement[k && k.charAt(0).toUpperCase() + k.substring(1)] = value[k];
//       }
//     }
//     return replacement;
//   }
//   return value;
// }