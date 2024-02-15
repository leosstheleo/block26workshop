import React, { useState, useEffect } from 'react';

function App() {
  const [dogList, setDogList] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random/20");
        const result = await response.json();
        setDogList(result.message);
      } catch (error) {
        console.log("error:", error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <>
      <h1>Dog CEO API</h1>
      {dogList && dogList.map((dog, idx) => {
        return <img key={idx} src={dog} alt="random dog image" />;
      })}
    </>
  );
}

export default App;


