import fetch from "node-fetch";

exports.handler = async (event, context) => {
  return fetch(event.queryStringParameters.url, { headers: { "Accept": "application/xml" } })
    // .then(response => response.text())
    // .then(data => ({
    //   statusCode: 200,
    //   body: data
    // }))
    // .catch(error => ({ statusCode: 422, body: String(error) }));
};
