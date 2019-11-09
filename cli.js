#!/usr/bin/env node

const argv = require("minimist")(process.argv.slice(2));
const _ = require("lodash");
const config = require("./config");

const main = async () => {
  try {
    const { email, apiKey, subDomain } = config.all();
    const model = _.get(argv, "_.[0]");

    if (model == "setup") {
      const { email, apiKey, subDomain } = argv;
      const o = {};
      if (email) o.email;
      if (apiKey) o.apiKey;
      if (subDomain) o.subDomain;
      config.set(o);
      return;
    }

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
