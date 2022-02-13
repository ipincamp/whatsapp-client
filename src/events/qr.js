/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const qrcode = require("qrcode-terminal");
const { log } = require("../utils/Logger");
const { message: [{ qrStr }] } = require("../utils/Config");

module.exports = {
  name: "qr",
  execute(qr) {
    qrcode.generate(qr, { small: true });
    log.info(qrStr);
  },
};
