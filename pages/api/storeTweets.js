import { getAll } from "../../requests/getAll"
import { getRatioed } from "../../requests/getRatioedCollection"

async function handler(req, res) {

  try {


    const response = await getAll()
    const tweets = response.results
    const result = await getRatioed(tweets)
      res.status(200).json(result)
      
  } catch (error) {
      console.log('ERROREEEE', error )
      
  }


}

export default handler

































// import {exampleTweet} from '../../exampleTweet'
// import { getAll } from '../../requests/getAll';
// import { getMostDiscussedTweets } from '../../requests/getMostDiscussedTweets'
// import { getRatioedCollection, pushRatioed } from '../../requests/getRatioedCollection'
// async function handler(req, res) {
//     const tweets = await (await getAll()).results;

// const mostDiscussed = await getMostDiscussedTweets(tweets)
// const ratioed = mostDiscussed.filter(t => t.ratio > 1)
// await pushRatioed(ratioed)
// const result = await getRatioedCollection()

//     res.status(200).json(result)



// }


// export default handler

// getMostdiscussedTweets of the day

// select only ratioed

// push on db collection ratioed

// get db collection ratioed from db


