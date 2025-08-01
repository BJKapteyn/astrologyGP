import { useState } from 'react';
import { Blog } from '../../../../Types/ProjectTypes';

interface CreateBlogFormProps {
  // Define any props needed for the CreateBlogForm component     
  blog: Blog | null; // Allow blog to be null for creating a new blog
}

export const CreateBlogForm: React.FC<CreateBlogFormProps> = ({ blog = null }) => {
  const [blogData, setBlogData] = useState<Blog | null>(blog);

    const handleSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
        formEvent.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", blogData);
    };

    return (
        <div className="edit-form" >
            <h1>Create Blog Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Form elements will go here */}
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" defaultValue={blogData?.title || ''} />
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" defaultValue={blogData?.content || ''} />
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" defaultValue={blogData?.author || ''} />
                <label htmlFor="publishDate">Publish Date</label>
                <input type="date" id="publishDate" name="publishDate" defaultValue={blogData?.publishDate || ''} />
                <button type="submit">Submit</button>
            </form>
            {/* Add form elements here */}
        </div>
    );
}