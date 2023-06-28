import DirectoryItem from "../directory-item/directory-item-component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {

  return (
 
    <div className="directory-container">
      {categories && categories.map((category) => {
        return (
          <DirectoryItem
            key={category.id}
            imageUrl={category.titleImageUrl}
            title={category.title}
          />
        );
      })}
    </div>
  );
};

export default Directory;
