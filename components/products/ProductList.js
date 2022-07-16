import Link from "next/link";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => (
  <div className='products' id='products'>
    {products.map((product) => (
      <Link href={`/product/${product.permalink}`} key={product.id}>
        <a>
          <ProductItem product={product} />
        </a>
      </Link>
    ))}
  </div>
);

export default ProductList;

// import Link from "next/link";

// function ProductList({ products }) {
//   if (!products || products.length === 0) return null;

//   return products.map(({ name, permalink }, index) => (
//     <span key={permalink}>
//       {index ? ", " : ""}
//       <Link href={`/products/${permalink}`}>
//         <a className='text-lg md:text-xl lg:text-2xl hover:italic'>{name}</a>
//       </Link>
//     </span>
//   ));
// }

// export default ProductList;
