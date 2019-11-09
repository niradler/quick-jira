#!/usr/bin/env node

const argv = require("minimist")(process.argv.slice(2));
const _ = require("lodash");
const config = require("./config");

// config.set({ email, apiKey, subDomain });
const main = async () => {
  try {
    const { email, apiKey, subDomain } = config.all();
    const model = _.get(argv, "_.[0]");
    const _model = require(`./lib/${model}`);
    const func = _.get(argv, "func");
    const i = new _model(email, apiKey, subDomain);
    const res = await i[func](argv);
    console.log(res);
  } catch (error) {
    console.error(error.message);
  }
};
main();
