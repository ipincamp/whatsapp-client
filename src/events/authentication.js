/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const fs = require("fs");
const { log } = require("../utils/Logger");

const saved = "./config.json";

module.exports = {
  name: "authenticated",
  execute(session) {
    try {
      fs.writeFileSync(saved, JSON.stringify(session));
    } catch (error) {
      log.error(error);
    }
  },
};
