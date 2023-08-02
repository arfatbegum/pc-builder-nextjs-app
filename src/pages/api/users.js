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
        const usersCollection = client.db("pc-builder").collection("users");

        if (req.method === "GET") {
            const users = await usersCollection.find({}).toArray();
            res.send({
                message: "success",
                status: 200,
                data: users
            });
        }

    } finally {
        // await client.close();
    }
}

export default run;