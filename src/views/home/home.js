
import style from './home.css';
import React, { useEffect } from 'react';

function Home() {
  function aa(){
    console.log(11111)
  }
  useEffect(() => {
    aa();
  }, [])
  return (
    <div className={`${style.title} content`}>
        这里是标题部分
    </div>
  );
}

export default Home;
