import React from "react";
// import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TextItem from "../components/Text";
import Form from "../components/Form";
import Footer from "../components/Footer";
import commerce from "../lib/commerce";
// import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductListing";

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
    <React.Fragment>
      <Header merchant={merchant} />
      <Hero />
      {/* <CategoryList categories={categories} /> */}
      <TextItem />
      <ProductList products={products} />
      <Form />
      <Footer />
    </React.Fragment>
  );
}
