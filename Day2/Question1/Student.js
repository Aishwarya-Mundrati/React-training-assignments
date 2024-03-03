


function Student(){
    let studentArray = { sid: 1, sname: "Aishwarya", course: "Computer", age: 22, total: 100 };
    return(
        <>
        <center>
        <table>
          <table border="2" width="500">
            <tr>
              <th> Student id</th>
              <td> {studentArray.sid} </td>
            </tr>
            <tr>
              <th> Student id</th>
              <td> {studentArray.sname}</td>
            </tr>
            <tr>
              <th> Student id</th>
              <td> {studentArray.course} </td>
            </tr>
            <tr>
              <th> Student id</th>
              <td> {studentArray.age} </td>
            </tr>
            <tr>
              <th> Student id</th>
              <td> {studentArray.total} </td>
            </tr>
          </table>
        </table>
      </center>
        </>
    )
    
}

export default Student; 
