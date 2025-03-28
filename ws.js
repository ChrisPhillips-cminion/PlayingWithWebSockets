var urlopen = require('urlopen');
var requestheader = require('header-metadata');
var myheaders = requestheader.current.headers;



var urlopen = require('urlopen');

var options = {
            target: 'URL',
            method: 'get',
           headers: requestheader.current.headers,
       contentType: 'text/plain',
           timeout: 60
};

urlopen.open(options, function(error, response) {
  if (error) {
    // an error occurred during the request sending or response header parsing
    session.output.write("urlopen error: "+JSON.stringify(error));
  } else {
    // get the response status code
    var responseStatusCode = response.statusCode;
    var responseReasonPhrase = response.reasonPhrase;
    console.log("Response status code: " + responseStatusCode);
    console.log("Response reason phrase: " + responseReasonPhrase);
    // reading response data
    response.readAsBuffer(function(error, responseData){
      if (error){
        throw error ;
      } else {
        session.output.write(responseData) ;
      }
    });
  }
});
