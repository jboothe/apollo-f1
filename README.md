#F1 Apollo Server Wrapper 

![Apollo Logo](./doc/images/apollo-64-opq.gif) ![GraphQL Logo](./doc/images/GraphQL_logo_64.png) A GraphQL wrapper around [Ergast F1 API](http://ergast.com/mrd/) built using Apollo Server.

![GitHub Logo](./doc/images/Apollo-F1.gif) 


##What is Apollo Server & GraphQL

Apollo Server is a data stack for modern applications built with [GraphQL](https://medium.com/apollo-stack/the-basics-of-graphql-in-5-links-9e1dc4cac055#.yr1awqpig),  
a technology developed and used by Facebook in 2012 and open sourced in July 2015. If you're using Facebook, 
you're getting your data via GraphQL. 

The benefits of using Apollo Server/GraphQL as a service layer are abundant; generally there are three main benefits:

1. **Exact Data** - fetch the precise data your view needs - no more, no less.
2. **Any Source** - retrieve data from SQL, Mongo, REST or all of the above in a single call.
3. **Unobtrusive** - slides into any server stack without significant integration. 


###What It's Not

Apollo/GraphQL is not a data storage engine. It is not a graph database. It is a data service layer that revolutionizes
data retrieval. Querying data is easy and straightforward with simple JSON notation - regardless of your data storage engine.

For example, here's a basic query to get a list of races' raceName. (Yes, commas are optional.)   

```
{
  allRaces {
    raceName
  }
}
```

The query above yields the JSON object below shaped exactly as your request. This eliminates over and under fetching.

```
{
  "data": {
    "allRaces": [
      { "raceName": "British Grand Prix" },
      { "raceName": "Monaco Grand Prix" },
      { n... }
    ]
  }
}
```

###Parameters

Refine results by passing arguments.

```
{
  allRaces(year:2016) {
    raceName
  }
}
```

###Nested Data

If you need nested data without myriad of round trips, no problem. 

```
{
  allRaces(year:1950) {
    raceName
    circuit {
      circuitName
      location {
        country
        lat
        long
      }
    }
  }
}
```

##Custom Endpoints

So often custom REST endpoints are needed to satisfy _view_ requirements and their variants. 
Apollo Server defines **one** endpoint and lets each view define the data it needs. This flexibility
eliminates the need to create a multitude of custom RPC (aka ad hoc) endpoints needed with REST API's.  


##Multiple Data Sources

Another beauty of Apollo Server is it's ability to access any data source including REST API's. 
What's more is any one call can be be mix of of data sources. 

##REST Wrapping

A side benefit of that is that you can wrap any existing REST API with Apollo Server/GraphQL 
so a once chatty or bloated call can now be tailored to the exact data a _view_ needs. 
You'll see more REST API's being wrapped with Apollo Server/GraphQL. Here are a few:

* [Apollo SWAPI](https://github.com/nnance/swapi-apollo)
* [GraphQL Hub](https://www.graphqlhub.com/)


This project is an Apollo Server wrap of the Ergast F1 REST API which is leans towards an RPC style API
as opposed to a Resource style API. Given that, the major benefit from wrapping this API is minimize 
response object bloat which is friendlier to mobile apps. 

Experience this revolutionary data retrieval technology for yourself and see the benefits.    

This project uses:

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

###Credits
This project was inspired by Nick Nance's [Apollo SWAPI](https://github.com/nnance/swapi-apollo).
