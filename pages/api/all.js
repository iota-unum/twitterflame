import { getEverything } from "../../requests/getEverything"

export default async function handler(req, res) {

    
    const result = await getEverything()
    
    res.status(200).send(result)
    
     }