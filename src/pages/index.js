import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = () => {
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
      </RootLayout>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return page;
};

export default HomePage;
