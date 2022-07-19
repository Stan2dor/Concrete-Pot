import React from "react";

import Commerce from "../lib/commerce";
import HomeBanner from "../components/homepage/HomeBanner";
// import ProductsBanner from "../components/homepage/ProductsBanner";
import ProductList from "../components/products/ProductList";
import Footer from "../components/common/Footer.js";
import Header from "../components/common/Header";
// import { Provider } from "react-redux";
// import createStore from "../context/cart";

export async function getStaticProps() {
  const { data: products } = await Commerce.products.list();

  return {
    props: {
      products,
    },
  };
}
// const store = createStore();

export default function ProductsPage({ products }) {
  return (
    <React.Fragment>
      <Header />
      {/* <Provider store={store}> */}
      <div className='welcome'>
        <div className='welcome-title'>
          <h1>Welcome</h1>
          <div className='welcome-text'>
            <p>
              aiiii Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* <h1 className='welcome-title'>Welcome</h1> */}
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <HomeBanner />
      {/* <ProductsBanner /> */}
      <ProductList products={products} />
      {/* </Provider> */}
      <Footer />
    </React.Fragment>
  );
}
