import React from 'react';
function App() {
  return (
    <>
      <h3> How to display images? </h3>
      <p> The image is put in the public folder and the picture name is called in the src value. Then the image is displayed </p>
      <p> The image can also be displayed by creatign an images folder in src and then putting the image there. </p>
      <img src='person1.jpg' alt="person1" /> <br />
    </>
  );
}
export default App;