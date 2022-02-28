/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const express = require("express");
const { Client, NoAuth } = require("whatsapp-web.js");
const { MSG } = require("./src/utils/Messages");

const client = new Client({
  puppeteer: {
    args: ["--no-sandbox"],
    /*
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    */
  },
  authStrategy: new NoAuth(),
});
module.exports = client;

const app = express();
const por = process.env.PORT || 8000;

app.use(express.static("public"));
app.get("/", (req, res) => res.sendStatus(200));
app.listen(por, () => `${MSG.ready.listen}${por}`);

require("./src/utils/Events")(client);

client.initialize();
