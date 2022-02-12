/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const fs = require("fs");

const sessionPATH = "./config.json";

module.exports = {
  name: "authenticated",
  execute(session) {
    fs.writeFile(sessionPATH, JSON.stringify(session), (err) => {
      if (err) {
        console.error(err);
      }
    });
  },
};
