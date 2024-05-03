const axios = required('axios');
const cheerio = require('cheerio');

async function scrapeAmazon(keyword){
    const url = 'https://www.amazon.com/s?k=${keyword}';
    const response = await axios.get(url);
    return response.data;

}

const $ = cheerio.load(html);
const products = []

$('.s-result-item').each((index, element) => {
    //Extract
})

