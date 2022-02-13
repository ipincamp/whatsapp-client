/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const express = require("express");
const fs = require("fs");
const { Client } = require("whatsapp-web.js");

const sessionPATH = "./config.json";

let sessionData;
if (fs.existsSync(sessionPATH)) {
  sessionData = require(sessionPATH);
}

const client = new Client({
  puppeteer: {
    args: [
      "--no-sandbox",
    ],
  },
  qrRefreshIntervalMs: 30000,
  qrMaxRetries: 15,
  session: sessionData,
});
module.exports = client;

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => res.sendStatus(200));
app.listen(process.env.PORT);

require("./src/utils/EventHandlers")(client);

client.initialize();
