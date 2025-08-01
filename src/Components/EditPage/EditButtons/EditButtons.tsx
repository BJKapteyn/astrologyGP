import { Link } from "react-router-dom";
import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import './Edit.css';

export const EditButtons: React.FC = () => {

  return (
    <div className="edit-buttons">
      <Link to={'./'}><ActionButton buttonSettings={{ buttonText: 'Blog Posts'}}></ActionButton></Link>
    </div> 
  );
}