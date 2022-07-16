import React from "react";

import Commerce from "../lib/commerce";
import ProductList from "../components/products/ProductList";
import Footer from "../components/common/Footer.js";
import Header from "../components/common/Header";
export async function getStaticProps() {
  const { data: products } = await Commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
  return (
    <React.Fragment>
      <Header />
      <h1 className='welcome-title'>Welcome</h1>
      <p className='welcome-text' style={{ textAlign: "center", margin: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <ProductList products={products} />
      <Footer />
    </React.Fragment>
  );
}
