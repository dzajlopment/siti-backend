import { MongoClient } from "mongodb";
import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const url = process.env.MONGO_URL;
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);