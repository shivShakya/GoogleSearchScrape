import express, { json } from 'express';
import cors from 'cors';
import env from 'dotenv';
import { ScrapingBeeClient } from 'scrapingbee';
import { google } from 'googleapis';

const customSearch = google.customsearch('v1');
env.config();

const app = express();

const GOOGLE_SEARCH_KEY = process.env.GOOGLE_SEARCH_KEY;
const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID;

app.use(cors());
app.use(json());

async function getWebUrls(query, numResults) {
    try {
        const response = await customSearch.cse.list({
            cx: SEARCH_ENGINE_ID,
            q: query,
            auth: GOOGLE_SEARCH_KEY,
            num: numResults,
        });
        const results = response.data.items;
        const urls = results.map((result) => result.link);
        return urls;
    } catch (err) {
        console.log(err);
        return [];
    }
}

async function getResults(url) {
    let client = new ScrapingBeeClient(process.env.API_KEY);

    let response = await client.get({
        url: url,
        params: {},
    });
    return response;
}

let urlList ;

app.post('/post', async (req, res ) => {
    const query = req.body.data;
    console.log(query);
    try {
      const urls = await getWebUrls(query, 5);
      console.log('URLs:', urls);
      res.send(urls);
  } catch (err) {
      console.log(err);
      res.status(500).send({ error: 'Error occurred during scraping' });
  }
});


app.get('/get1Url',(req,res)=>{
  try {  
 
    console.log({ 'Urls' :url});
    getResults(url[0]).then(function (response) {
      var decoder = new TextDecoder();
      var text = decoder.decode(response.data);
      var body = text.match(/<body[^>]*>[\s\S]*<\/body>/gi);
      res.send(body);
  }).
  catch((e) => 
         res.send("Error occured")
    );
} catch (err) {
  console.log(err);
  res.status(500).send({ error: 'Error occurred during scraping' });
}
});


app.get('/get2Url',(req,res)=>{
  try {  
 
    console.log({ 'Urls' :urlList[1]});
    getResults(url[1]).then(function (response) {
      var decoder = new TextDecoder();
      var text = decoder.decode(response.data);
      var body = text.match(/<body[^>]*>[\s\S]*<\/body>/gi);
      res.send(body);
  }).
  catch((e) => 
        res.send("Error occured")
    );
} catch (err) {
  console.log(err);
  res.status(500).send({ error: 'Error occurred during scraping' });
}
});

app.get('/get3Url',(req,res)=>{
  try {  
 
    console.log({ 'Urls' :urlList[2]});
    getResults(url[2]).then(function (response) {
      var decoder = new TextDecoder();
      var text = decoder.decode(response.data);
      var body = text.match(/<body[^>]*>[\s\S]*<\/body>/gi);
      res.send(body);
  }).
  catch((e) => 
         res.send("Error occured")
    );
} catch (err) {
  console.log(err);
  res.status(500).send({ error: 'Error occurred during scraping' });
}
});


app.get('/get4Url',(req,res)=>{
  try {  
 
    console.log({ 'Urls' :urlList[3]});
    getResults(url[3]).then(function (response) {
      var decoder = new TextDecoder();
      var text = decoder.decode(response.data);
      var body = text.match(/<body[^>]*>[\s\S]*<\/body>/gi);
      res.send(body);
  }).
  catch((e) => 
          res.send("Error occured")
    );
} catch (err) {
  console.log(err);
  res.status(500).send({ error: 'Error occurred during scraping' });
}
});



app.get('/get5Url',(req,res)=>{
  try {  
 
    console.log({ 'Urls' :urlList[4]});
    getResults(url[4]).then(function (response) {
      var decoder = new TextDecoder();
      var text = decoder.decode(response.data);
      var body = text.match(/<body[^>]*>[\s\S]*<\/body>/gi);
      res.send(body);
  }).
  catch((e) => 
          res.send("Error occured")
    );
} catch (err) {
  console.log(err);
  res.status(500).send({ error: 'Error occurred during scraping' });
}
});




app.listen(5000, () => {
    console.log("Server is started at the 'http://localhost:5000'");
});
