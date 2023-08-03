const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DATABASE_URL;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run(req, res) {
    try {
        await client.connect();
        const productsCollection = client.db("pc-builder").collection("products");

        if (req.method === "GET") {
            const { category } = req.query;

            const categoryRegex = new RegExp(category, "i");

            const products = await productsCollection.find({ category: categoryRegex }).toArray();
            res.send({
                message: "success",
                status: 200,
                data: products
            });
        }

    } catch (error) {
        return res.status(500).send({
            message: "Internal server error.",
        });
    } finally {
        // await client.close();
    }
}

export default run;
