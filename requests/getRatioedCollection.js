import { MongoClient } from 'mongodb';

export async function getRatioedCollection() {
  try {
    const client = await MongoClient.connect(
      process.env.MONGODB_CONNECTION_STRING
    );
    console.log('Connected!');
    const db = client.db();

    const ratioedCollection = db.collection('ratioed');
    // const result = await ratioedCollection.insertOne(exampleTweet)
    const result = await ratioedCollection.find().toArray();
    client.close();

    return result;
  } catch (error) {
    console.log('error cazzo bastardi', error);
  }
}
export async function pushRatioed(tweets) {
  try {
    const client = await MongoClient.connect(
      process.env.MONGODB_CONNECTION_STRING
    );
    console.log('Connected!');
    const db = client.db();

    const ratioedCollection = db.collection('ratioed');
    // const result = await ratioedCollection.insertOne(exampleTweet)
    const result = await ratioedCollection.insertMany(tweets)
    client.close();

    return result;
  } catch (error) {
    console.log('error cazzo bastardi', error);
  }
}
