import React from 'react';
import './App.css';
import artists from "./store";

export default function Artists(){
    return (
      <>
      <h1>MTV Base Headline Artists 2019</h1>
      {artists.map(artist =>(
        <div id="card-body" key={artist.id}>
        <div className="card">
          <h2>{artist.name}</h2>
          <p>genre: {artist.genre}</p>
          <p>Albums released: {artist.albums}</p>
        </div>
        </div>
      ))}
     </>
    );
  }

