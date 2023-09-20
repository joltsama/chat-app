This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirement

- Chat interface like MS Teams/Slack/Whatsapp
- Display a list of user messages
- Type message input and hit send button
- New message visible in view
- Select user and spawn a threaded view
- New message added to the currently displayed messages list
- Support for group chat
- Message have user identifier, time stamp, content

## Getting Started

Environment: Ubuntu

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses:

- tailwind css
- react-icons

Assumptions have been made at certain places for API requests and backend data. Callback functions have been used for realtime update of data in different components which would normally be used done using backend/database service subscriptions in different components.

# Tests

Cypress is used for testing.
In case of os related lib errors please check [guide](https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies)

To run tests in headless cypress runner (no UI)

```
npm run e2e:headless
```

To run tests in cypress runner (UI)

```
npm run e2e
```
