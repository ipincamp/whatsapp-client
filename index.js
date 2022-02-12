/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const fs = require("fs");
const { Client } = require("whatsapp-web.js");

const sessionPATH = "./config.json";

let sessionData;
if (fs.existsSync(sessionPATH)) {
  sessionData = require(sessionPATH);
}

const client = new Client({
  qrRefreshIntervalMs: 20000,
  qrMaxRetries: 10,
  session: sessionData,
});
module.exports = client;

require("./src/utils/EventHandlers")(client);

client.initialize();
