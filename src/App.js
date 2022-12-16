import React from 'react'
import Covid from './component/covid';
import copyright from './component/copyright.gif'
import { useEffect } from 'react';
import { useState } from 'react';
const App = () => {
  const [copyr, setCopyR] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCopyR(false);
    }, 4000);
  })
  return (
    <>
      {copyr ? (
        <div className='mycopy'><img src={copyright} alt="copyright" /></div>
        
      ) : (
        <Covid />
      )}
    </>
  );
}

export default App;