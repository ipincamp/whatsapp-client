/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const { LOG } = require("../utils/Logger");
const { MSG } = require("../utils/Messages");

module.exports = {
  name: "message",
  /**
   *
   * @param {import("whatsapp-web.js").Message} message
   */
  async run(message) {
    if (message.body == `${MSG.prefix}`) {
      message.reply(MSG.message.reply);
    }

    const contact = await message.getContact();

    if (MSG.logging.enabled === true) {
      try {
        LOG.info(`${contact.number} (${contact.name ? contact.name : contact.pushname}): ${message.body}`);
      } catch (err) {
        LOG.error(err);
      }
    }
  },
};
