import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../Components/Breadcrumbs/BreadCrumbs';
import { ProductDisplay } from '../../Components/product-display/ProductDisplay';

export const ProductPage = () => {
     const  {arrivals_data} = useContext(ShopContext);
      const { productId } = useParams();
  const product = arrivals_data.find((item) => item.id === Number(productId));

  if (!product) return <div className="p-10">Product not found.</div>;

  // console.log(product);
  return (
    <div className=''>
       <Breadcrumbs product={product}/>
       <ProductDisplay product={product}/>

    </div>
  )
}
