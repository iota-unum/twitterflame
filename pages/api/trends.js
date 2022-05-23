
import { getTrends } from "../../requests/getTrends";
export default async function handler(req, res) {

    
    const result = await getTrends()
    
    res.status(200).send(result)
    
     }