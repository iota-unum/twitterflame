
import {MongoClient} from 'mongodb'
import {exampleTweet} from '../../exampleTweet'
async function handler(req, res) {

try {

    const client = await MongoClient.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log('Connected!')
    const db = client.db()
    
    const ratioedCollection = db.collection('ratioed')
    console.log(ratioedCollection)
    // const result = await ratioedCollection.insertOne(exampleTweet)
    const result = await ratioedCollection.find().toArray()
    client.close()
       res.status(200).json(result)


    
} catch (error) {
    console.log('error cazzo bastardi', error)
    res.send(error)
}


}


export default handler

// getMostdiscussedTweets of the day

// select only ratioed

// push on db collection ratioed

// get db collection ratioed from db


