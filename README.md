#F1 Apollo Server Wrapper 
![Apollo Logo](./doc/images/apollo-64-opq.gif) ![GraphQL Logo](./doc/images/GraphQL_logo_64.png)

A GraphQL wrapper around [Ergast F1 API](http://ergast.com/mrd/) built using Apollo Server.

![GitHub Logo](./doc/images/Apollo-F1.gif) 

Inspired by Nick Nance's [Apollo SWAPI](https://github.com/nnance/swapi-apollo).

Uses:

* [apollo-server](https://github.com/apollostack/apollo-server) - Apollo server GraphQL middleware for express.
* [graphql-js](https://github.com/graphql/graphql-js) - a JavaScript GraphQL runtime.
* [DataLoader](https://github.com/facebook/dataloader) - for coalescing and caching fetches.
* [GraphiQL](https://github.com/graphql/graphiql) - for easy exploration of this GraphQL server.

## Getting Started

Install dependencies with

```sh
npm install
```

## Local Server

A local express server is in `./src`. It can be run with:

```sh
npm start
```

A GraphiQL instance is available at http://localhost:3030/graphql to
explore the API.

## Development Server

A development server that watches for changes can be run with:

```sh
npm run dev
```
