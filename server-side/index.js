const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

//----------middleware----------
app.use(cors());
app.use(express.json());

//----------mongo db----------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1yvkcvu.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //----------db & collection----------
        const productCollection = client
            .db("productsDb")
            .collection("products");

        //----------http methods----------
        app.get("/", (req, res) => {
            res.send(" This is AnC Global Ltd server side");
        });

        app.post("/addproduct", async (req, res) => {
            const newProduct = req.body;
            console.log("product added:", newProduct);
            const result = await productCollection.insertOne(newProduct);
            res.send(result);
        });

        app.get("/products", async (req, res) => {
            const result = await productCollection.find().toArray();
            res.send(result);
        });

        app.delete("/products/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await productCollection.deleteOne(query);
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);

//----------server listener----------
app.listen(port, () => {
    console.log(`AnC server running on port :${port}`);
});
