import React from 'react';
import CoctailList from '../component/CoctailList';
import SearchInput from '../component/SeacrchInput'
const Home = () => {
  return(
    <div>
        <SearchInput/>
        <CoctailList/>
    </div>
  ) 
};

export default Home;
