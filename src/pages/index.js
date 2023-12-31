import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import HeroSection from "@/components/UI/HeroSection";

const HomePage = ({ categories, products }) => {
  return (
    <>
      <Head>
        <title>PC-BUILDER</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <HeroSection />
        <FeaturedProducts products={products} />
        <FeaturedCategories categories={categories} />
      </RootLayout>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return page;
};

export default HomePage;

export const getStaticProps = async () => {
  const categoryResponse = await fetch(`${process.env.URL}/api/categories`);
  const productRespons = await fetch(`${process.env.URL}/api/products`);

  const categories = await categoryResponse.json();
  const products = await productRespons.json();

  return {
    props: {
      categories,
      products
    }
  };
};
