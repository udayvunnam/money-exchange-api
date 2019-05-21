# Money Exchange API

API for currency conversions in real time and historical usage trends.
https://api-moneyexchange.herokuapp.com/

Tech stack:

- [Node](https://angular.io): Runtime
- [Docker](https://www.docker.com): Container
- [Swagger](https://swagger.io): API specification and documentation
- [Firestore](https://firebase.google.com/docs/firestore): NoSql cloud database
- [Jest](https://jestjs.io), [Chai](https://www.chaijs.com): Testing
- [TypeScript](https://www.typescriptlang.org): Language
- [Express](https://expressjs.com): REST API
- [Winston](https://github.com/winstonjs/winston): Logging
- [Morgan](https://github.com/expressjs/morgan): HTTP Request logger
- [Heroku](https://devcenter.heroku.com/): Cloud Deploymnet

## Features

- [/convert](https://api-moneyexchange.herokuapp.com/v1/convert): convert any money value from one currency to another
- [/usage](https://api-moneyexchange.herokuapp.com/v1/usage): get recent history of conversions and repeat.
- [/currency](https://api-moneyexchange.herokuapp.com/v1/currency): get list of currency symbols along with full names

## Install

- `https://github.com/udayvunnam/money-exchange-api.git`
- `cd money-exchange-api && npm install`

### Running in development mode

- `npm run dev`

### Running with Docker

- Start docker application
- `npm run docker-start`

## Swagger Documentation

After starting the server, swagger is available at http://localhost:8080/api-docs/

- [Deployed swagger url](https://api-moneyexchange.herokuapp.com/api-docs/)

## Running tests

Run `npm run test`
