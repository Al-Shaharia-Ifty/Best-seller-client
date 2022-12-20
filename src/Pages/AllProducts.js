import React from "react";
import { useQuery } from "react-query";
import ProductCart from "../Components/ProductCart";
import Loading from "../Shared/LoadingPage";

const AllProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://seller-server.vercel.app/products`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl text-center my-5">All Laptop are Here</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-10">
        {products.map((p, i) => (
          <ProductCart key={i} p={p} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
