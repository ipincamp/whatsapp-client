/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const fs = require("fs");
const { LOG } = require("../utils/Logger");
const { MSG } = require("../utils/Messages");

const saved = "./session.json";

module.exports = {
  name: "authenticated",
  run(session) {
    try {
      fs.writeFileSync(saved, JSON.stringify(session));

      LOG.info(MSG.auth.success);
    } catch (err) {
      LOG.error(err);
    }
  },
};
