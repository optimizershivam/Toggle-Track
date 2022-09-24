const mongoose = require("mongoose");
require("dotenv").config();

// Typically a database connection pool should be created and used throughout the application.
// Having only a single connection limits the database operations that can be performed at once.
// A connection pool is a resource which manages multiple database connections so that as needed
// the APIs can acquire a connection, use it and return it back to the pool after use. The
// advantage of a pool is that you can perform multiple independent database operations at once,
// improving the performance of your application. Databases can support 100s of concurrent connections
// so using only one connection also leads to wasteage of compute and memory resources of the
// database server. Having only a single connection also means that in case of concurrent API
// invocations only one API call can effectively make progress (the one which is using the database
// connection at the moment). This means that the other API calls will have a much higher wait time
// and thus higher than expected latency.
// Mongoose supports connection pools. See - https://mongoosejs.com/docs/connections.html#connection_pools.
const connection = mongoose.connect(process.env.mongo_url);
module.exports = {
  connection,
};
