import { MongoClient } from 'mongodb';




export async function getRatioed(tweets){
try {
  const client = await MongoClient.connect(
    process.env.MONGODB_CONNECTION_STRING
  );
  console.log('Connected!');
  const db = await client.db();

  const ratioedCollection = await db.collection('ratioed');
  const ratioed = await tweets.filter(t => t.ratio > 1)
  // update with loop instead of insertMany
  // await ratioedCollection.insertMany(ratioed)

  // await ratioedCollection.updateOne({id_str:t.id_str}, {$set:{...t}} , {upsert:true})
console.log('RATIOED', ratioed)
const result = await updateRatioed(ratioed, ratioedCollection)

  return result

} catch (error) {
  
  console.log('ERRORE DB' , error)
}
}


async function updateRatioed(ratioed, ratioedCollection){

  for (const tweet of ratioed) {
    await ratioedCollection.updateOne({id_str:tweet.id_str}, {$set:{...tweet}} , {upsert:true})
  }
  const result = await ratioedCollection.find().toArray();
return result
}