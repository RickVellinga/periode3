function cityOfChicago(json) {
  console.log(json);
}

function covid19(json) {
  console.log(json);
}

var url = 'https://data.cityofchicago.org/resource/f7f2-ggz5.json?';
createGetRequest(url, cityOfChicago);
var url = 'https://covid19-api.weedmark.systems/api/v1/stats';
createGetRequest(url, covid19);
