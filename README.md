# TDOOS Redesign

This is a JavaScript project to redesign [The Dictionary of Obscure Sorrows](http://www.dictionaryofobscuresorrows.com/). This is a website full of gorgeous, somewhat esoteric words that deserve a more beautiful place than a Tumblr blog. Code is currently being spiked as I explore new technologies such as Node and Cheerio by following a tutorial and playing about. These will eventually be rewritten in a test-driven manner.

This project will be built as a single-page application using the MERN stack - [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://reactjs.org/), and [Node](https://nodejs.org/en/). I will make use of a webscraper to retrieve the content for the application.

Currently, there is a web scraper built using [CheerioJS](https://cheerio.js.org/) and Node, by adapting [this tutorial](https://scotch.io/tutorials/scraping-the-web-with-node-js). Functionality is currently limited to simply finding the final entry and definition on a predefined page of the original blog, but will be expanded in the near future.
