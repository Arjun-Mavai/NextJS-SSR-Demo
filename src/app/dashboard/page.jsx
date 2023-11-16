// pages/index.js
// "use client"
import Image from "next/image";
import React from "react";

const YOUR_API_KEY = `25ac2b7a001a4b8f9b8cc5a7e6abad04`;

export default async function Home() {
  const articles = await getNewsData();

  console.log({ articles });

  return (
    <div className="card-wrapper">
      <h1>Latest News</h1>
      <ul className="card-list">
        {Array.isArray(articles) ? (
          articles.map((article, index) => (
<<<<<<< HEAD
            <li key={index} className="card">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <div className="card-image">
                  <img src={article.urlToImage} alt={article.title} />
=======
            <li key={index} className='card'>
              <a href={article.url} target='_blank' rel='noopener noreferrer'>
                <div className='card-image'>
                  <img src={article.urlToImage} alt={article.title} />
                 
>>>>>>> 22070b310f46dae305e782533c686cba7f452f86
                </div>
                <div className="card-content">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-description">{article.description}</p>
                  <div className="card-details">
                    <p className="card-source">
                      Published by: {article.source.name} <br />{" "}
                      <span>
                        Author : <strong>Arjun Gurjar</strong>
                      </span>
                    </p>
                    <p className="card-date">
                      {new Date(article.publishedAt).toDateString()}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))
        ) : (
          <div>No Articles found ...</div>
        )}
      </ul>
    </div>
  );
}

export async function getNewsData() {
  // Fetch news data
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${YOUR_API_KEY}`
    );
    if (!res.ok) {
      throw new Error(
        `network response was not ok ${res.ok} ${res.status}${res.status}`
      );
    }
    const news = await res.json();
    console.log(news);
    return news.articles;
  } catch (error) {
    console.error(`Error occured while fetching data ${error}`);
    return [];
  }

  // This 'articles' props will be passed to the Home component
}
