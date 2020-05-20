// Retrieve
var MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_CONNECT;


//{ useUnifiedTopology: true }

function getSpots(hotelID, callback){
  // replace the uri string with your connection string.
   MongoClient.connect(
      uri,
      {
        useUnifiedTopology: true
      },
     function(err, client) {
     if(err) {
          console.log('Error occurred while connecting to MongoDB Atlas...\n',err)
          callback(err, null)
     }
     console.log('Connected...');
     const collection = client.db("evealed_dev").collection("spots");

     collection.find( {
       hotelID: hotelID
     } ).toArray(function(err, result) {
       if (!err){
         if(Object.keys(result).length > 0){
           console.log(result);
          callback(null, result);
          client.close();
         }
          else {
            callback(null, 'no results found');
          }
       }
       else {
        callback(err, null);
        client.close();
       }
     });
  });
}

function updateSpot(spotNum, update, callback){
  // replace the uri string with your connection string.
  console.log(spotNum);
  console.log(update);
   MongoClient.connect(
      uri,
      {
        useUnifiedTopology: true
      },
     function(err, client) {
     if(err) {
          console.log('Error occurred while connecting to MongoDB Atlas...\n',err)
          callback(err, null)
     }
     console.log('Connected...');
     const collection = client.db("evealed_dev").collection("spots");
     collection.updateOne(spotNum, update, function(err, res){
       if (!err){
         console.log('updated one spot')
        callback(null, true);
        client.close();
       }
       else {
        callback(err, null);
        client.close();
       }
     });
   })
}

function createSpots(numSpots){
  // replace the uri string with your connection string.
  const timeStamp = Date.now();

   MongoClient.connect(
      uri,
      {
        useUnifiedTopology: true
      },
     function(err, client) {
     if(err) {
          console.log('Error occurred while connecting to MongoDB Atlas...\n',err)
          callback(err, null)
     }
     console.log('Connected...');
     const collection = client.db("evealed_dev").collection("spots");
     let spotsObject = {};
     for (let i = 0; i<numSpots; i++){
        spotsObject = {
          spotNumber: i,
          hotelID: 1111,
          dateStamp: timeStamp,
          status: 'open',
          predictedEndTime: timeStamp + 14400000,
          network: 'Volta',
          queue: 'object with details of the queue'
        //  spot_number: i,
        //  status: 'free',
        //  chargeStartTime: timeStamp,
        //  estDoneTime: timeStamp + 14400000,
        //  carId: 0
       }
        collection.insertOne(spotsObject, function(err, res){
          if (err) throw err;
          console.log("1 document inserted");

        });
     }
     client.close();
   });

}

exports.getSpots = getSpots;
exports.updateSpot = updateSpot;
exports.createSpots = createSpots;
