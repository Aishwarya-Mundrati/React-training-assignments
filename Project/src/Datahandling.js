import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // Scalar Variables
  let uname = "Scott";
  let age = 25;
  let email = "scott@gmai.com";


  // Array
  let citiesArray = ["Hyderabad", "Mumbai", "Pune", "Chennai", "Goa", "Hyderabad", "Mumbai", "Pune", "Chennai", "Goa"];

   // Object
   let deptObj = { deptno: 10, dname: "Accounts", loc: "Hyd" };


   // Array of Objects

   let deptsArray = [
    { deptno: 10, dname: "Accounts", loc: "Hyd" },
    { deptno: 20, dname: "Sales", loc: "Pune" },
    { deptno: 30, dname: "Marketing", loc: "Hyd" },
    { deptno: 40, dname: "Operations", loc: "Chnnai" },
  ];



  let resultArray = citiesArray.map((item) =>  
  {
    return <li>{item}</li>
  });


  let resultArray2 =  deptsArray.map(item => 
    {
      return <tr>
              <td>{item.deptno}</td>
              <td>{item.dname}</td>
              <td>{item.loc}</td>
            </tr>;
    });


  return (
    <>
      <h3>Data Handling in React Components</h3>     
      <hr/>

      <div>
        User Name :   {uname}  <br/>
        User Email :   {email}  <br/>
        User Age :   {age}  <br/>
      </div>
      <hr/>


      <ol>
        {resultArray}
      </ol>

      <hr/>

      <div>
        Dept Number  :   {deptObj.deptno}  <br/>
        Dept Dname  :   {deptObj.dname}  <br/>
        Dept Location  :   {deptObj.loc}  <br/>
       
      </div>
      <hr/>

      <table  border="2"  width="500">

          <tr>
            <th>Dept Number</th>
            <th>Dept Name</th>
            <th>Dept Location</th>
          </tr>

          {resultArray2}
      </table>

    </>
  );
}

export default App;