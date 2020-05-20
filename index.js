const {MongoClient} = require('mongodb');
// const env = process.env.NODE_ENV || 'development';
// const config = require(`./${env}`);
// app.use()
// app.get('/', function (req, res) {
//   var responseDB = "we r in</br>"
//   res.send(responseDB)
// })


async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://brenna889988:brenna889988@cluster0-716ly.mongodb.net/test?retryWrites=true&w=majority"
    const client = new MongoClient(uri,  { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);




async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
console.log("Databases:");
databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// export default config;
