import ArrowRight from "../../public/icon/arrow-long-right.svg";
// import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <div className='product'>
      <div className='product-title'></div>
      <img
        className='product__image'
        // src={product.media.source}
        src='/images/concrete_pot_098754.jpeg'
        alt={product.name}
      />
      <div className='product__info'>
        <h2 className='product__name'>Store {product.name}</h2>
        <ArrowRight className='product__icon' width={48} height={48} />
      </div>
    </div>
  );
};

export default ProductItem;
