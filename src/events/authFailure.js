/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const { LOG } = require("../utils/Logger");
const { MSG } = require("../utils/Messages");

module.exports = {
  name: "auth_failure",
  run(message) {
    LOG.error(message);
    LOG.info(MSG.auth.fail);
  },
};
