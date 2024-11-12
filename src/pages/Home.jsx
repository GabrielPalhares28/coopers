// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import ToDoList from '../components/ToDoList';
import GoodThings from '../components/GoodThings';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <ToDoList />
      <GoodThings />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Home;
