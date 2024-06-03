export const AllCategories = ({ categories, setCategoryState, categoryState }) => (
    <div className="categories">
        {categories.map(category => (
          <div key={category} onClick={() => setCategoryState(category)} className={categoryState === category ? 'category-item selected-category-item' : 'category-item'}>
            {category}
          </div>
        ))}
    </div>
  );