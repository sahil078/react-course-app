
import './App.css';
import React, {useState}from 'react';
import filterData from './data';
import Navbar from './components/navBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { CourseData } from './CourseData';

function App() {

  const [category , setCategory] = useState(filterData[0].title);

  return (
    <div className='flex flex-col min-h-screen bg-gray-800'>

      <div>
        <Navbar />
      </div>

      <div className='bg-gray-800'>
        <div>
          <Filter category={category} setCategory={setCategory} filterData={filterData} />
        </div>

        <div className='w-11/12 max-w-[1100px] mx-auto flex flex-wrap justify-center items-center min-h-[60vh]'>
          <Cards CourseData={CourseData} category={category} />
        </div>
      </div>

    </div>
  );
}

export default App;
