
import { getTweets } from "../../requests/getTweets";

export default async function handler(req, res) {
    
    const result =  await getTweets("orsini")
    
    
   res.send(result)
    
    
    
     }