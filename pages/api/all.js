const { getAll } = require("../../requests/getAll")

async function handler(req, res) {

    const result = await getAll()

res.status(200).json(result)

}

export default handler