var ​imgTopo = document.querySelector('assets');

var assets = new Request('top2.png');

fetch(assets).then(function(response) {
  return response.blob();
}).then(function(response) {
  var objectURL = URL.createObjectURL(response);
  imgTopo.src = objectURL;
});

Data.exports("kotlin.json");