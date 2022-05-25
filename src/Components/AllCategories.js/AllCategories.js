import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div className="categories">
      <h2>НАША ПРОДУКЦИЯ</h2>
      <div className="filter">
      {['ОРГАНАЙЗЕР', 'ЕЖЕНЕДЕЛЬНИК', 'ЕЖЕДНЕВНИК', 'РУЧКА', 'ВСE'].map((category, id) => (
         <Filter key={id} category = {category} />
        
      ))}
      </div>
    </div>
  );
};

export default AllCategories;
