// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

module.exports = async (client, e) => {
  client.logger.log("warn", `A warn event was sent by Discord.js: \n${e}`);
};
