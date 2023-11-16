search feature 
// pages/index.js

import React, { useState } from 'react';

const YOUR_API_KEY = `25ac2b7a001a4b8f9b8cc5a7e6abad04`;

export default async function Home() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&q=${searchQuery}&apiKey=${YOUR_API_KEY}`
      );
      if (!res.ok) {
        throw new Error(`Network response was not ok ${res.status}`);
      }
      const news = await res.json();
      setArticles(news.articles);
    } catch (error) {
      console.error(`Error occurred while fetching data: ${error}`);
      setArticles([]);
    }
  };

  return (
    <div>
      <h1>Latest News</h1>
      <div>
        <input
          type="text"
          placeholder="Search for news..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map((article) => (
            <li key={article.title}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))
        ) : (
          <div>No articles found...</div>
        )}
      </ul>
    </div>
  );
}
