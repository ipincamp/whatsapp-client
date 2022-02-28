/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const { Client } = require("whatsapp-web.js");
const { LOG } = require("../utils/Logger");
const { MSG } = require("../utils/Messages");
/**
 *
 * @param {Client} client
 */
module.exports = function (client) {
  client.on(
    "message",
    async (msg) => {
      if ((msg.body === MSG.prefix) || (msg.body === "P")) {
        msg.reply(MSG.message.reply);
      }

      const name = await msg.getContact();
      if (MSG.logging.enabled === true) {
        try {
          LOG.info(`${name.number} (${name.name ? name.name : name.pushname}): ${msg.body}`);
        } catch (err) {
          LOG.error(err);
        }
      }
    },
  );
};
