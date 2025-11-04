import { Link } from "react-router-dom";
import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import './EditButtons.css';

export const EditButtons: React.FC = () => {

  return (
    <div className="edit-buttons">
      <Link to={'./editBlog'}><ActionButton buttonSettings={{ buttonText: 'Blog Posts'}}></ActionButton></Link>
      <Link to={'./editCalendarEvent'}><ActionButton buttonSettings={{ buttonText: 'Calendar Events'}}></ActionButton></Link>
    </div> 
  );
}