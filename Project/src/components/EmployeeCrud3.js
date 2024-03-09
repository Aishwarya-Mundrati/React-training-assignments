import { useState } from "react";




function EmployeeCrud3() {

    const [deptsArray, setDeptsArray] = useState([]);

    const [empid, setempid] = useState("");
    const [empname, setempname] = useState("");
    const [deptnum, setdeptnum] = useState("");
    const [job, setjob] = useState("");
    const [sal, setsal] = useState("");

    function getDeptsClick() {
        let data = [
            { empid: 101, empname: "Scott", job :"Architect", sal : 20000, deptnum: 10 },
            { empid: 102, empname: "Smith", job :"Manager", sal: 30000, deptnum: 20 },
            { empid: 103, empname: "Sandy", job :"Lead", sal: 40000, deptnum: 10 },
            { empid: 104, empname: "Sam", job :"Analyst", sal: 50000, deptnum: 30 },
            { empid: 105, empname: "Sreeman", job : "Tester", sal: 60000, deptnum: 20 },
            { empid: 106, empname: "Sowmya", job : "Service Line", sal: 80000, deptnum: 30 },
        ];

        setDeptsArray(data);

    }

    function addDeptClick() {
        let empobj = {};
        empobj.empid = empid;
        empobj.empname = empname;
        empobj.job = job;
        empobj.sal = sal;
        empobj.deptnum = deptnum;



        let tempArray = [...deptsArray];
        tempArray.push(empobj);
        setDeptsArray(tempArray);

        clearFields();

    }

    function clearFields() {
        setempid("");
        setempname("");
        setdeptnum("");
        setjob("");
        setsal("");
    }


    function deleteClick(eno) {


        let tempArray = [...deptsArray];

        let index = tempArray.findIndex(item => item.empid == eno);
        tempArray.splice(index, 1);

        setDeptsArray(tempArray);
    }

    function selectClick(eno) {
        let empobj = deptsArray.find(item => item.empid == eno);
        setempid(empobj.empid);
        setempname(empobj.empname);
        setsal(empobj.sal);
        setjob(empobj.job);
        setdeptnum(empobj.deptnum);
    }


    function updateDeptClick() {
        let tempArray = [...deptsArray];

        let index = tempArray.findIndex(item => item.empid == empid);
        tempArray[index].empname = empname;
        tempArray[index].sal = sal;
        tempArray[index].job = job;
        tempArray[index].deptnum = deptnum;

        setDeptsArray(tempArray);

        clearFields();
    }

    let resultArray = deptsArray.map(item => {
        return <tr>
            <td>{item.empid}</td>
            <td>{item.empname}</td>
            <td>{item.sal}</td>
            <td>{item.job}</td>
            <td>{item.deptnum}</td>

            <td width="50" align="center">
                <i class="fa fa-hand-pointer-o" aria-hidden="true" onClick={() => { selectClick(item.empid) }} > </i> 
                <i class="fa fa-trash" aria-hidden="true" onClick={() => { deleteClick(item.empid) }} ></i>
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Empid" type="text"
                value={empid} onChange={(e) => setempid(e.target.value)} />

            <input placeholder="Empname" type="text"
                value={empname} onChange={(e) => setempname(e.target.value)} />

            <input placeholder="Sal" type="text"
                value={sal} onChange={(e) => setsal(e.target.value)} />

            <input placeholder="Job" type="text"
                value={job} onChange={(e) => setjob(e.target.value)} />

            <input placeholder="EmpDept" type="text"
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
                    <th>Salary </th>
                    <th>Job</th>
                    <th>Dept Number </th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default EmployeeCrud3;