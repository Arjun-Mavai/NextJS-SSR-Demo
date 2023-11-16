return code

return (
<div className='dark' style={{color:'white'}}>
<h1>Latest News</h1>
<ul>
{Array.isArray(articles) ? (
articles.map((article) => (
<>

            <div className='container' style={{background:'gray', borderRadius:'15px' , padding:'15px'}}>
            <li key={article.title}>
              <div className='links'>
              <div>{article.description} </div>

              <a href={article.url}  >
                {article.title}

              </a>
              <img src={article.urlToImage} alt={article.title} height={200} width={300} style={{marginLeft:'0px'}} className="article-image" />

              </div>

             <div className='below detaling' style={{display:'flex' , justifyContent:'space-between'}}>
              <div> Author:  <strong>Arjun Gurjar</strong> </div>
              <div className="details" style={{display:"flex", flexDirection:'column'}}>
              <div> <p className="source">Published by: {article.source.name}</p></div>
                <div><p className="text-sm text-gray-500">

Published on: {new Date(article.publishedAt).toDateString()}

</p></div>
              </div>
             </div>
              </li>
            </div>

            <hr />






            </>
          ))
        ) : (
          <div>No Articles found ...</div>
        )}
      </ul>
    </div>

);


################### login file code 
// pages/csr-example.js
"use client"

import React, { useEffect, useState } from 'react';
 
 


export default function CSRPage() {

  const [data ,setData]= useState([]);

  useEffect(()=>{
    async function fetchData() {
  try{
    
     const res=  await fetch('https://jsonplaceholder.typicode.com/posts') ;
     if(!res.ok){
      throw new Error(`Netowork response was not ok ${res.ok} ${res.status}`)
     }
     const jsonData = await res.json();
     setData(jsonData)
    

  }

  catch(error){
    console.log(`Error occured while fetching the data ${error.message}`);
    return []

  }

}
    fetchData();
    
  },[])
   

  return (
    <div>
      <h1>Client-Side Rendering (CSR) Example with React Query</h1>
      <ul>
        { data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
###############