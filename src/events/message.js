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
  async run(message) {
    if (message.body == `${MSG.prefix}`) {
      message.reply(MSG.message.reply);
    }

    const contact = await message.getContact();

    LOG.info(`${contact.number} (${contact.name ? contact.name : contact.pushname}): ${message.body}`);
  },
};
