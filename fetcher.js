const request = require("request");
const fs = require("fs");

let fetcherArgs = process.argv.slice(2);
console.log('fetcher arguments: ', fetcherArgs);

request(fetcherArgs[0], (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }

  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(fetcherArgs[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${fetcherArgs[1]}`);
  });
});