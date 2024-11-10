// /server.js

const app = require("./src/app");

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
