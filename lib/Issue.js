const Jira = require("./Jira");

class Issue extends Jira {
  constructor(email, apiKey, domain) {
    super(email, apiKey, domain);
  }

  get({ id }) {
    return this.send(`/issue/${id}`);
  }

  add({ project = "DEV", summary = "", description = "", issuetype = "Bug" }) {
    const issue = {
      fields: {
        project: { key: project },
        summary,
        description,
        issuetype: { name: issuetype }
      }
    };
    return this.send(`/issue`, { method: "POST", body: issue });
  }

  delete({ id }) {
    return this.send(`/issue/${id}`, { method: "DELETE" });
  }
}

module.exports = Issue;
