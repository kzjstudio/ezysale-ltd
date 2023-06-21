import DirectoryItem from "../directory-item/directory-item-component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          imageUrl={category.imageUrl}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default Directory;
