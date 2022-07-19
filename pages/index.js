import React from "react";
// import Head from "next/head";

// import Link from "next/link";
import Root from "../components/common/Root";
import Header from "../components/common/Header";
import Hero from "./_hero";
// import HeroSection from "../components/homepage/HeroSection";
import TextItem from "../components/common/Text";
import Form from "../components/common/Form";
import Footer from "../components/common/Footer";
import commerce from "../lib/commerce";
// import CategoryList from "../components/CategoryList";
import ProductList from "../components/products/ProductList";
// import ProductsBanner from "../components/homepage/ProductsBanner";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  // const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      // categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, products }) {
  return (
    <Root transparentHeader={true}>
      <React.Fragment>
        <Header merchant={merchant} />
        <React.StrictMode>
          <Hero />
          {/* <HeroSection /> */}
          {/* <CategoryList categories={categories} /> */}
          <TextItem />
          <ProductList products={products} />
          {/* <ProductsBanner /> */}
          <Form />
        </React.StrictMode>
        <Footer />
      </React.Fragment>
    </Root>
  );
}

// const Home = () => (
//   <Root transparentHeader={true}>
//     <Header />
//     <Hero />
//     <TextItem />
//     <ProductList products={products} />
//     <Form />
//     {/* <SocialMedia /> */}
//     <Footer />
//   </Root>
// );

// export default Home;
