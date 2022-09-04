import { readFileSync } from "fs"
import { join, dirname  } from "path"
import { fileURLToPath } from 'url'


const __dirname = dirname(fileURLToPath(import.meta.url));


const cert = {
  key: readFileSync(join(__dirname, "..", "..", "cert", "key.pem")),
  cert: readFileSync(join(__dirname, "..", "..", "cert","cert.pem"))
}

export { cert }