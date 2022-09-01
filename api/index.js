const server = require("./src/app");
const dotenv = require('dotenv')
dotenv.config()


server.listen(process.env.PORT || 3001, () => {
  console.log("Best Quotes are waiting at port 3001");
});
