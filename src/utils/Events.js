/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

module.exports = (client) => {
  require("../events/authFailure")(client);
  require("../events/disconnected")(client);
  require("../events/message")(client);
  require("../events/qr")(client);
  require("../events/ready")(client);
};
