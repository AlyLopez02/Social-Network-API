const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const connectionString =
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/networkDB'; //should this be networkDB?

// connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports = connection;
