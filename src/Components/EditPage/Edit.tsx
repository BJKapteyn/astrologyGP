import { CreateBlogForm } from "./EditForm/CreateBlogForm/CreateBlogForm";

export const Edit = () => {
  return (
    <div>
      <h1>Edit Page</h1>
      <p>This is the edit page where you can modify content.</p>
      {/* Add your edit functionality here */}
      <CreateBlogForm blog={null} />
    </div>
  );
}