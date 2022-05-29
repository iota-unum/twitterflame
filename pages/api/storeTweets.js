
import {MongoClient} from 'mongodb'
import {exampleTweet} from '../../exampleTweet'
async function handler(req, res) {

try {

    const client = await MongoClient.connect(process.env.MONGODB_CONNECTION_STRING)
    const db = client.db()
    
    const ratioedCollection = db.collection('ratioed')
    
    const result = await ratioedCollection.insertOne(exampleTweet)
    client.close()
       res.status(200).json(result)


    
} catch (error) {
    console.log('error cazzo bastardi', error)
    res.send(error)
}


}


export default handler