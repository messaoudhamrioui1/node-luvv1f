const https = require('https');
const options = {
  hostname: 'https://back.dev-web-retail-vr.com/',
  method: 'GET',
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
