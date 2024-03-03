import React from 'react';

function App() {
  let citiesArray = ["Hyderabad", "Mumbai", "Pune", "Chennai", "Goa", "Hyderabad", "Mumbai", "Pune", "Chennai", "Goa"];
 
  let resultsArray = citiesArray.map((item,index) =>
  {
    return <li key={index} > {item} </li>
  });


  return (
    <>
    {resultsArray}

    </>
  );
}
export default App;