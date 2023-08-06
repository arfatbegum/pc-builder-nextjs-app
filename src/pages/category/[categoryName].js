import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";

const ProductCategory = ({ products }) => {

    return (
        <RootLayout>
            <section className="text-gray-700 body-font">
                <div className="container px-10 py-7 mx-auto">
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8">
                        {products?.data?.length ? products.data.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                            />
                        )) : (
                            <p>No products found for this category.</p>
                        )}
                    </div>
                </div>
            </section>
        </RootLayout>
    );
};

ProductCategory.getLayout = function getLayout(page) {
    return page;
};

export default ProductCategory;

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.URL}/api/categories`);
    const categories = await res.json();

    const paths = categories?.data?.map((category) => ({
        params: { categoryName: category?.name.toLowerCase() },
    }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const category = params.categoryName;
    const res = await fetch(`${process.env.URL}/api/products?category=${category}`);
    const products = await res.json();
    return {
        props: {
            products
        },
    };
};
