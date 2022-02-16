/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const client = require("../..");
const { LOG } = require("../utils/Logger");
const { MSG } = require("../utils/Messages");

module.exports = {
  name: "ready",
  run() {
    LOG.info(MSG.ready);

    try {
      const device = client.info.phone;

      const info = `Hardware Information:
            Manufacturer     : ${device.device_manufacturer}
            Model            : ${device.device_model}
            OS Build         : ${device.os_build_number}
            OS Version       : ${device.os_version}
            WhatsApp Version : ${device.wa_version}
      `;
      LOG.info(info);
    } catch (err) {
      LOG.error(err);
    }
  },
};
