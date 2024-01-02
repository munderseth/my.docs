---
sidebar_position: 5
title: Puppeteer
---

# Puppeteer
Running notes for GitHub.

- https://pptr.dev/
- [Checkly Puppeteer Examples](https://github.com/checkly/puppeteer-examples)
- [Checkly Scaping help](https://www.checklyhq.com/docs/browser-checks/scraping-onpage-elements/)


## Setup

```
npm i puppeteer
```

## Notes

- Scaping examples - https://www.checklyhq.com/docs/browser-checks/scraping-onpage-elements/
- `Node` - https://developer.mozilla.org/en-US/docs/Web/API/Node
- Required for evaluate based logging https://github.com/puppeteer/puppeteer/blob/v12.0.1/docs/api.md#event-console
  ```
  page.on('console', (msg) => {
      for (let i = 0; i < msg.args().length; ++i)
          console.log(`${i}: ${msg.args()[i]}`);
  });
  ```
