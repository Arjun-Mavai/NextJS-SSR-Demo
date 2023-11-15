"use client"

import React, { useEffect, useState } from 'react';
// import './csr-card.css'; // Import the CSS file


export default function CSRPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
          throw new Error(`Network response was not ok ${res.ok} ${res.status}`);
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.log(`Error occurred while fetching the data ${error.message}`);
        return [];
      }
    }
    fetchData();
  }, []);

  return (
    <div className="csr-card-wrapper">
      
      <ul className="csr-card-list">
        {data?.map((item) => (
          <li key={item.id} className="csr-card">
            <div className="csr-card-content">
              <h2 className="csr-card-title">{item.title}</h2>
              <p className="csr-card-body">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
