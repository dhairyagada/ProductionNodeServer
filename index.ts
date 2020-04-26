import { mkdirSync } from "fs-extra"

require('module-alias/register')
import { server } from "./src/core/Server";

let aps = server()
export const apserver = aps

