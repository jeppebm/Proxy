import fetch from "node-fetch";

exports.handler = async (event, context) => {
  return fetch(event.queryStringParameters.url, {})
    .then(response => response.text())
    .then(data => ({
      statusCode: 200,
      body: data,
      header: { 'Content-Type': event.contentType || 'text/xml' }
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
