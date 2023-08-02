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
            const products = await productsCollection.find({}).toArray();
            res.send({
                message: "success",
                status: 200,
                data: products
            });
        }

    } finally {
        // await client.close();
    }
}

export default run;