/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const express = require("express");
const fs = require("fs");
const { Client } = require("whatsapp-web.js");

const saved = "./config.json";
const { qrTries, restart, timeOut } = require("./src/utils/Config");

let sessionData;
if (fs.existsSync(saved)) {
  sessionData = require(saved);
}
const refresh = timeOut * 1000;

const client = new Client({
  puppeteer: {
    args: [
      "--no-sandbox",
    ],
  },
  qrRefreshIntervalMs: refresh,
  qrMaxRetries: qrTries,
  restartOnAuthFail: restart,
  session: sessionData,
});
module.exports = client;

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => res.sendStatus(200));
app.listen(process.env.PORT);

require("./src/utils/EventHandlers")(client);

client.initialize();
