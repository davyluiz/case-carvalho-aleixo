## 🎯Objective

Create a simple script to scrape Amazon product listings from the first page of search results for a given keyword.

## 📌Task Requirements

1. **Backend/API (Node.js):**

- Set up a Node.js project with the necessary dependencies (express, axios, cheerio, etc.).
- Write a script using axios to fetch the contents of the Amazon search results page for a given keyword.
- Use cheerio to parse the HTML content and extract the following details for each product listing on the first page:
  - Product Title;
  - Rating (stars out of five);
  - Number of reviews;
  - Product image URL.
- Create an endpoint `/api/scrape` where a GET request with a query parameter `?keyword=yourKeyword` initiates the scraping process and returns the extracted data in JSON format.

2. **Frontend (HTML, CSS, JavaScript):**

- Develop a simple webpage:
  - An input field to enter the search keyword;
  - A button to initiate the scraping process.
- Style the webpage to be user-friendly and presentable;
- Implement JavaScript to make an AJAX call to the backend endpoint when the button is clicked, and display the results formatted cleanly on the page.

## 📄 Documentation

Provide comments within your code to offer clarity on your logic and process.
Include a *README.md* file with the setup and running instructions.

## 🧐Considerations

Ensure you handle errors gracefully both on the backend and frontend.
Provide clear instructions on how to run the application.
