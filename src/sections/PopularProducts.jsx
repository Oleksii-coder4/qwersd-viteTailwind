import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className="topic-title">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="description max-w-2xl mt-6">
          Experience top-notch quality and style with our sought-after
          selection. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cold-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
