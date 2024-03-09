import { useState } from "react";



function EmployeeCrud() {

    const [deptsArray, setDeptsArray] = useState([]);

    const [empid, setempid] = useState("");
    const [empname, setempname] = useState("");
    const [deptnum, setdeptnum] = useState("");


    function getDeptsClick() {
        let data = [
            { empid: 101, empname: "Scott", deptnum: 10 },
            { empid: 102, empname: "Smith", deptnum: 20 },
            { empid: 103, empname: "Sandy", deptnum: 10 },
            { empid: 104, empname: "Sam", deptnum: 30 },
            { empid: 105, empname: "Sreeman", deptnum: 20 },
            { empid: 106, empname: "Sowmya", deptnum: 30 },
        ];

        setDeptsArray(data);

    }

    function addDeptClick()
    {
        let empobj = { };
        empobj.empid = empid; 
        empobj.empname = empname; 
        empobj.deptnum = deptnum; 
        

        let tempArray = [...deptsArray];
        tempArray.push(empobj);       
        setDeptsArray( tempArray );

       clearFields();

    }

    function  clearFields()
    {
        setempid("");
        setempname("");
        setdeptnum("");
    }


    function  deleteClick(eno)
    {


        let tempArray = [...deptsArray];
        
        let  index = tempArray.findIndex( item => item.empid == eno );
        tempArray.splice(index, 1); 

        setDeptsArray( tempArray );
    }

    function  selectClick(eno)
    {
      let empobj =   deptsArray.find(item =>  item.empid ==  eno);
      setempid(empobj.empid);
      setempname(empobj.empid);
      setdeptnum(empobj.deptnum);
   
    }


    function  updateDeptClick()
    {
        let tempArray = [...deptsArray];

        let index = tempArray.findIndex(item => item.empid == empid);
        tempArray[index].empname = empname ;
        tempArray[index].deptnum = deptnum ;


        setDeptsArray( tempArray );

        clearFields();
    }

    let resultArray = deptsArray.map(item => {
        return <tr>
            <td>{item.empid}</td>
            <td>{item.empname}</td>
            <td>{item.deptnum}</td>
            <td align="center">
                <i class="fa fa-hand-pointer-o" aria-hidden="true" onClick={() => {selectClick(item.empid)}} > </i>
                <i class="fa fa-trash" aria-hidden="true" onClick={() => {deleteClick(item.empid)}} ></i>
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Empid" type="text"
                value={empid} onChange={(e) => setempid(e.target.value)} />

            <input placeholder="Dname" type="text"
                value={empname} onChange={(e) => setempname(e.target.value)} />

            <input placeholder="Loc" type="text"
                value={deptnum} onChange={(e) => setdeptnum(e.target.value)} />


            <hr />

            <input type="button" value="Get Emps" onClick={getDeptsClick} />
            <input type="button" value="Add Emp" onClick={addDeptClick} />
            <input type="button" value="Update Emp" onClick={updateDeptClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Dept Number </th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default EmployeeCrud;