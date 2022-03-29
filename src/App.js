import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from './data.js';

export default function App() {
  return (
    <div>
        <Navbar />
        <div className="container">
            {data.map(item => (
                <Card
                    key={item.id}
                    {...item}
                />
            ))}
            </div>
            
    </div>
  );
}