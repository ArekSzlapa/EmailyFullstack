// keys.js figure out what credentials to return
if (process.env.NODE_ENV === "production") {
  // we are in prd
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
  // we are in dev
}
