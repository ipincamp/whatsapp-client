/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const messages = {
  auth: {
    fail: "Don't worry, creating new session...",
    success: "Authentication success!.",
  },
  disconnect: "Client logout, make a new session...",
  logging: {
    enabled: false,
    disable: "Logging system are disabled!",
  },
  message: {
    reply: "Pa pe pa pe, salam yang bener!",
  },
  prefix: "p",
  qr: "Scan this code, it will be regenerated in 1 minute 30 seconds",
  ready: "Client is ready!",
};

module.exports.MSG = messages;
