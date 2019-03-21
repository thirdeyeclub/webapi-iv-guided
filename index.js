require('dotenv').config();
const server = require('./api/server.js');

const PORT = process.env.PORT || 4000;
const greeting = process.env.GREETING;
server.listen(PORT, () => {
  console.log(`${greeting}\n*** Server Running on http://localhost:${PORT}***\n`);
});

