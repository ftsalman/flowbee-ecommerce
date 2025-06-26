import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDisplay } from "../../Components/product-view/product-display/ProductDisplay";
import { CustomerReview } from "../../Components/product-view/customer-review/CustomerReview";
import Breadcrumbs from "../../Components/Breadcrumbs/BreadCrumbs";
import { ProductInfo } from "../../Components/product-view/product-info/ProductInfo";
import { ShopContext } from "../../context/ShopContext";

const ProductViewPage = () => {

    const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((item) => item.id === Number(productId));

  if (!product) return <div className="p-10">Product not found.</div>;

  return (
    <div className="">
      <div className="sticky top-0 z-50 ">
        <Breadcrumbs />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 space-y-4">
        <ProductDisplay data={product} />
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 space-y-4">
          <ProductInfo  />
        </div>

        <CustomerReview />
      </div>
    </div>
  );
};

export default ProductViewPage;

//   const { id } = useParams();

//   /* 2. Pull the full product list from context */
//   const { products = [] } = useContext(ShopContext);

//   /* 3. Memo‑lookup the product (string -> number just in case) */
//   const product = useMemo(
//     () => products.find((p) => String(p.id) === String(id)),
//     [products, id]
//   );

//   /* 4. Loading | Not‑found guards */
//   if (!products.length) {
//     return <div className="p-8 text-center">Loading product…</div>;
//   }
//   if (!product) {
//     return (
//       <div className="p-8 text-center text-red-500">Product not found.</div>
//     );
//   }
