import React from "react";
// import Head from "next/head";

// import Link from "next/link";
import Root from "../components/common/Root";
import Header from "../components/common/Header";
import Hero from "../components/Hero";
import TextItem from "../components/common/Text";
import Form from "../components/common/Form";
import Footer from "../components/common/Footer";
// import commerce from "../lib/commerce";
// import CategoryList from "../components/CategoryList";
// import ProductList from "../components/ProductListing";

const Home = () => (
  <Root transparentHeader={true}>
    <Header />
    <Hero />
    <TextItem />
    {/* <ProductList /> */}
    <Form />
    {/* <SocialMedia /> */}
    <Footer />
  </Root>
);

export default Home;

// export async function getStaticProps() {
//   const merchant = await commerce.merchants.about();
//   // const { data: categories } = await commerce.categories.list();
//   const { data: products } = await commerce.products.list();

//   return {
//     props: {
//       merchant,
//       // categories,
//       products,
//     },
//   };
// }

// export default function IndexPage({ merchant, products }) {
//   return (
//     <React.Fragment>
//       <Header merchant={merchant} />
//       <Hero />
//       {/* <CategoryList categories={categories} /> */}
//       <TextItem />
//       <ProductList products={products} />
//       <Form />
//       <Footer />
//     </React.Fragment>
//   );
// }
