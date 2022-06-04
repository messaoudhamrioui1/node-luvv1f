const https = require('https');
const options = {
  hostname: 'api.retail-vr.com',
  method: 'GET',
};
function intervalFunc() {
  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.end();
}
setInterval(intervalFunc, 1500);
