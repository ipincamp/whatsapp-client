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
  client.on("ready", () => LOG.info(MSG.ready.success));
};
