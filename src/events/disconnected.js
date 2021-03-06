/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const { LOG } = require("../utils/Logger");
const { MSG } = require("../utils/Messages");

module.exports = function (client) {
  client.on("disconnected", () => {
    try {
      LOG.info(MSG.disconnect);
      client.initialize();
    } catch (err) {
      LOG.error(err);
      client.logout();
    }
  });
};
