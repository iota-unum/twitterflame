import { getAll } from "../../requests/getAll"
import { getEverything } from "../../requests/getEverything"

export default async function handler(req, res) {

    
    const result = await getAll()
    
    res.status(200).send(result)
    
     }