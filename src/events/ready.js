/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const { log } = require("../utils/Logger");
const { message: [{ ready }] } = require("../utils/Config");

module.exports = {
  name: "ready",
  execute() {
    log.info(ready);
  },
};
