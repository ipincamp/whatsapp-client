/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const express = require("express");
const fs = require("fs");
const { Client } = require("whatsapp-web.js");

const saved = "./session.json";
let sessions;
if (fs.existsSync(saved)) {
  sessions = require(saved);
}

const client = new Client({
  puppeteer: {
    args: ["--no-sandbox"],
  },
  qrRefreshIntervalMs: 90000,
  restartOnAuthFail: true,
  session: sessions,
});
module.exports = client;

const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => res.sendStatus(200));
app.listen(process.env.PORT);

require("./src/utils/Events")(client);

client.initialize();
