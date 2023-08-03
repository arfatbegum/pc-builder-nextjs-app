const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
            const { productId } = req.query; // Use req.query instead of req.params

            if (!productId) {
                return res.status(400).send({
                    message: "Product ID not provided.",
                });
            }

            const product = await productsCollection.findOne({ _id: new ObjectId(productId) });

            if (!product) {
                return res.status(404).send({
                    message: "Product not found.",
                });
            }

            return res.send({
                message: "success",
                status: 200,
                data: product,
            });
        }
    } finally {
        // await client.close();
    }
}

export default run;
