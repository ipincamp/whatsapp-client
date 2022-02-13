/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const { Message } = require("whatsapp-web.js");

const prefix = "p";

module.exports = {
  name: "message",
  /**
   *
   * @param {Message} message
   */
  async execute(message) {
    if (message.body == `${prefix}hai`) {
      message.reply("Apa?");
    }
  },
};
