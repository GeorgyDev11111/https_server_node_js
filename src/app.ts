import { createServer } from "https"
import { cert } from "./settings/cert.js"
import db  from "./settings/db.js"


const server = createServer(cert, async(req,res) => {
  const response = await db.query("SELECT * FROM castomer")

  res.writeHead(200)
  res.end(JSON.stringify(response.rows))
})


server.listen(3000)