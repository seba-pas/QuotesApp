const server = require("./src/app");


server.listen(process.env.PORT | 3001, () => {
  console.log("Best Quotes are waiting at port 3001");
});
