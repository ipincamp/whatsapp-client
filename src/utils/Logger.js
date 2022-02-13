/**
 * @name whatsapp-client
 * @version v1.0.0
 * @author ipincamp <support@nur-arifin.my.id>
 * @license Apache-2.0
 */

const logs = require("winston");

const { combine, printf } = logs.format;

let now = new Date();
let date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

const timeStamp = printf(({ level, message }) => `[${time}] ${level}: ${message}`);

const log = logs.createLogger({
  transports: [
    new logs.transports.File({
      dirname: "./logs",
      filename: `${date}.log`,
      format: combine(
        timeStamp,
      ),
      level: "error",
      maxFiles: 10,
      maxsize: 64000,
    }),
    new logs.transports.File({
      dirname: "./logs",
      filename: `${date}.log`,
      format: combine(
        timeStamp,
      ),
      level: "warn",
      maxFiles: 10,
      maxsize: 64000,
    }),
    new logs.transports.File({
      dirname: "./logs",
      filename: `${date}.log`,
      format: combine(
        timeStamp,
      ),
      level: "info",
      maxFiles: 10,
      maxsize: 64000,
    }),
    new logs.transports.Console({
      format: combine(
        logs.format.colorize(),
        logs.format.simple(),
      ),
      level: "error",
    }),
    new logs.transports.Console({
      format: combine(
        logs.format.colorize(),
        logs.format.simple(),
      ),
      level: "warn",
    }),
    new logs.transports.Console({
      format: combine(
        logs.format.colorize(),
        logs.format.simple(),
      ),
      level: "info",
    }),
  ],
});

exports.log = log;
