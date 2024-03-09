


function Student(){
    let studentarray = { sid: 1, sname: "Aishwarya", course: "Computer", age: 22, total: 100 };
    return(
        <>
        <center>
        <table>
          <table border="2" width="500">
            <tr>
              <th> Student id</th>
              <td> {studentarray.sid} </td>
            </tr>
            <tr>
              <th> Student id</th>
              <td> {studentarray.sname}</td>
            </tr>
            <tr>
              <th> Student id</th>
              <td> {studentarray.course} </td>
            </tr>
            <tr>
              <th> Student id</th>
              <td> {studentarray.age} </td>
            </tr>
            <tr>
              <th> Student id</th>
              <td> {studentarray.total} </td>
            </tr>
          </table>
        </table>
      </center>
        </>
    )
    
}

export default Student; 
