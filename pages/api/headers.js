var rp = require('request-promise');
export default function handler(req, res) {
  var options = {
    uri: 'https://www.google.com/',
    resolveWithFullResponse: true,
    headers: {
        'User-Agent': 'Request-Promise'
    },
  };

  rp(options)
    .then(function (response) {
      console.log('DELETE succeeded with status %d', response);
      res.send('ciao');
    })
    .catch(function (err) {
      console.log(err);
      // Delete failed...
    });
}
