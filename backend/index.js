import { ScrapingBeeClient } from "scrapingbee";
async function get(url) {
  var client = new ScrapingBeeClient('IP5P8F61CCZ4IPHMO8IRDGF45MBF4TO98UO2V9LTNRG9X83FP49IYR5N5ARHW8C16LEKA6OSBFEFATR4');
  var response = await client.get({
    url: url,
    params: {  
    },
  })
  return response
}

function getTextInsideBodyTags(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const bodyElement = doc.querySelector("body");
  
    if (bodyElement) {
      return bodyElement.textContent.trim();
    } else {
      return ""; 
    }
  }
  
  

get('https://whc.unesco.org/en/list/').then(function (response) {
    var decoder = new TextDecoder();
    var text = decoder.decode(response.data);

    console.log(text);
}).catch((e) => console.log('A problem occurs : ' + e.response.data));



