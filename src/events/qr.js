/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
const { LOG } = require("../utils/Logger");
const { MSG } = require("../utils/Messages");
/**
 *
 * @param {Client} client
 */
module.exports = function (client) {
  client.on("qr", (qr) => {
    try {
      qrcode.generate(qr, { small: true });
      LOG.info(MSG.qr);
    } catch (err) {
      LOG.error(err);
    }
  });
};
