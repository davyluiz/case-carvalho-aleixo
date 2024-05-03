const express = require('express');
const app = express();
const keyword = res.query.keyword;

const data = await scrapeAmazon(keyword)

app.get('/api/scrape', async (req, res) =>{
    scrapeAmazon(keyword)// call scraper
});


app.listen(3000, () => {
    console.log('Server listening on port 3000.')
})

res.json(data);