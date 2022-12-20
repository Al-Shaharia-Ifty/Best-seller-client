import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductCart from "../Components/ProductCart";
import Loading from "../Shared/LoadingPage";

const CategoryProduct = () => {
  const params = useParams();
  const { data: category, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch(`https://seller-server.vercel.app/category/${params.name}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl text-center my-10">
        Category Name{" "}
        <span className="text-blue-600 font-semibold">{params.name}</span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-10 gap-4">
        {category.map((p, i) => (
          <ProductCart key={i} p={p} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
