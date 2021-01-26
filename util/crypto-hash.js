const crypto = require("crypto");

//... will add all items into an array called inputs
const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");

  hash.update(inputs.sort().join(""));

  return hash.digest("hex");
};

module.exports = cryptoHash;
