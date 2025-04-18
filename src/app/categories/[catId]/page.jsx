const CategoryDetailsPage = async ({ params }) => {
  const { catId } = params;

  // Fetch detailed data from DB based on category ID
  const res = await fetch(`http://localhost:3000/api/categories/${catId}`, {
    cache: "no-store",
  });
  const category = await res.json();

  console.log(category);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
      <p>{category.description}</p>
      {/* You can add more detail fields here */}
    </div>
  );
};

export default CategoryDetailsPage;
