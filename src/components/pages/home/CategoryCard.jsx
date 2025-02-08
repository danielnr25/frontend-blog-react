
const CategoryCard = ({category}) => {
  return (
    <div className="bg-blue-950 text-white p-4 rounded-lg shadow-md hover:scale-105 transition">
        <h3 className="text-lg font-bold">{category.name}</h3>
        <p className="text-sm">{category.description}</p>
    </div>
  )
}

export default CategoryCard