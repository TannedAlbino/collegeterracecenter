var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "index.html";
  } else {
    filePath = request.url;
  }

  var absPath = "./" + filePath;
  serverWorking(response, absPath);
});