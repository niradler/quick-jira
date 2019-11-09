# Quick Jira Cli
create api key: https://confluence.atlassian.com/cloud/api-tokens-938839638.html

## Setup
```
npm i -g quick-jira
```

```
qjira setup --email="info@company.com" --apiKey="asdsdfsd5sdhg" --subDomain="company"
```

```
qjira Issue --func="get" --id="10001"
```

```
qjira Issue --func="add" --project="DEV" --summary="my great ticket" --issuetype="Bug"
```