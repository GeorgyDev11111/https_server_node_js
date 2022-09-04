import nconf from "nconf"
import { join, dirname } from "path"
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// The configuration file in folder "config"
const config_name = "config.dev.json"

interface Config {
  site: {
    host: string,
    port: number
  }
  db: {
    host: string,
    port: number,
    user: string,
    passwd: string,
    name: string
  }
}

nconf.use("file", { file: join(__dirname , "..", "..", "config", config_name) })
const config: Config = nconf.stores.file.store


export { config }