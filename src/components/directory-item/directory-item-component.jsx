import "./directory-item-styles.scss";
import { Link } from "react-router-dom";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <Link to={`/category/${title}`} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
