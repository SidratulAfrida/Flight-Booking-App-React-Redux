import './App.css';
import Table from "./components/Table";
import Header from './components/Header';
import Book from './components/Booking'; // Corrected the path here
import React from 'react'


function App() {
  return (
    <div className="bg-[url('./assets/banner.png')] bg-cover bg-no-repeat">
      <Header />
      <section className="h-screen">
        <Book />
        <Table />
      </section>
    </div>
  );
}

export default App;
