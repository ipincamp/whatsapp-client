/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const fs = require("fs");
const { join } = require("path");

module.exports = (client) => {
  /**
   * Events Handler
   */
  const eventFiles = fs.readdirSync(join(__dirname, "../events")).filter((f) => f.endsWith(".js"));

  for (const file of eventFiles) {
    const event = require(join(__dirname, "../events", `${file}`));

    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
};
