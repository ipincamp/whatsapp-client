/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const { log } = require("../utils/Logger");

module.exports = {
  name: "auth_failure",
  execute(message) {
    log.error(message);
  },
};
