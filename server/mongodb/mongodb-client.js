"use strict";

// Import the dependency.
import  { MongoClient } from 'mongodb';
// const { MongoClient, Collection, ObjectId } = require('mongodb');
import env from './env.json';
// const mongoose = require('mongoose');
const uri = env.uri;
const options = {
   useUnifiedTopology: true,
   useNewUrlParser: true,
};

let client;
let clientPromise;
if (process.env.NODE_ENV === "development") {

  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (hot module replacement).
   if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
   }

   clientPromise = global._mongoClientPromise;
} else {

  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

  // Export a module-scoped MongoClient promise. By doing this in a
  // separate module, the client can be shared across functions.
  // clientPromis.then(res => {
  //   res.db().collection('list').find({});
  // })
// const test = clientPromise.collection("list").find();
export {clientPromise};