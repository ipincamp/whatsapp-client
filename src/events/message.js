/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const { Message } = require("whatsapp-web.js");
const { prefixs } = require("../utils/Config");

module.exports = {
  name: "message",
  /**
   *
   * @param {Message} message
   */
  async execute(message) {
    if (message.body == `${prefixs}hai`) {
      message.reply("Apa?");
    }
  },
};
