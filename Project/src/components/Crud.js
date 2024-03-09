import { useState } from "react";



function Crud() {

    const [deptsArray, setDeptsArray] = useState([]);

    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");


    function getDeptsClick() {
        let data = [
            { deptno: 10, dname: "Accounts", loc: "Hyd" },
            { deptno: 20, dname: "Sales", loc: "Pune" },
            { deptno: 30, dname: "Marketing", loc: "Hyd" },
            { deptno: 40, dname: "Operations", loc: "Chnnai" },
        ];

        setDeptsArray(data);

    }

    function addDeptClick()
    {
        let deptObj = { };
        deptObj.deptno = deptno; 
        deptObj.dname = dname; 
        deptObj.loc = loc; 
        

        let tempArray = [...deptsArray];
        tempArray.push(deptObj);       
        setDeptsArray( tempArray );

       clearFields();

    }

    function  clearFields()
    {
        setDeptno("");
        setDname("");
        setLoc("");
    }


    function  deleteClick(dno)
    {


        let tempArray = [...deptsArray];
        
        let  index = tempArray.findIndex( item => item.deptno == dno );
        tempArray.splice(index, 1); 

        setDeptsArray( tempArray );
    }

    function  selectClick(dno)
    {
      let deptObj =   deptsArray.find(item =>  item.deptno ==  dno);
      setDeptno(deptObj.deptno);
      setDname(deptObj.dname);
      setLoc(deptObj.loc);
   
    }


    function  updateDeptClick()
    {
        let tempArray = [...deptsArray];

        let index = tempArray.findIndex(item => item.deptno == deptno);
        tempArray[index].dname = dname ;
        tempArray[index].loc = loc ;


        setDeptsArray( tempArray );

        clearFields();
    }

    let resultArray = deptsArray.map(item => {
        return <tr>
            <td>{item.deptno}</td>
            <td>{item.dname}</td>
            <td>{item.loc}</td>
            <td align="center">
                <a href="javascript:void(0);" onClick={() => {selectClick(item.deptno)}}>Select</a>|
                <a href="javascript:void(0);" onClick={() => {deleteClick(item.deptno)}}>Delete</a>
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Deptno" type="text"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />

            <input placeholder="Dname" type="text"
                value={dname} onChange={(e) => setDname(e.target.value)} />

            <input placeholder="Loc" type="text"
                value={loc} onChange={(e) => setLoc(e.target.value)} />


            <hr />

            <input type="button" value="Get Depts" onClick={getDeptsClick} />
            <input type="button" value="Add Dept" onClick={addDeptClick} />
            <input type="button" value="Update Dept" onClick={updateDeptClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>Dept Number</th>
                    <th>Dept Name</th>
                    <th>Dept Location</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default Crud;