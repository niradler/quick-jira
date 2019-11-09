const rp = require("request-promise");

class Jira {
  constructor(email, apiKey, subDomain) {
    if (!email) throw new Error("missing email.");
    if (!apiKey) throw new Error("missing apiKey.");
    if (!subDomain) throw new Error("missing domain.");

    this.baseUrl = `https://${subDomain}.atlassian.net/rest/api/2`;
    let data = `${email}:${apiKey}`;
    let buff = new Buffer.from(data);
    let base64data = buff.toString("base64");
    this.authorization = `Basic ${base64data}`;
  }

  send(path, opt = {}) {
    const o = Object.assign(
      {
        method: "GET",
        json: true,
        uri: `${this.baseUrl}${path}`,
        headers: {
          Authorization: this.authorization
        }
      },
      opt
    );

    return rp(o);
  }
}

module.exports = Jira;
