

function Doctor() {
    let doctorsarray = [
        { doctorId: 1, doctorName: "Aishwarya", designation: "Head Cardiologist", experience: 10, contactNumber: 7282918891 },
        { doctorId: 2, doctorName: "Amala", designation: "Head Radiologist", experience: 14, contactNumber: 7345918891 },
        { doctorId: 3, doctorName: "Madhavi", designation: "Head Gynaecologist", experience: 20, contactNumber: 7333318891 },
        { doctorId: 4, doctorName: "Janakiram", designation: "Head Gastraentologist", experience: 30, contactNumber: 7345568891 },
        { doctorId: 5, doctorName: "Tom", designation: "Head Veterarian", experience: 50, contactNumber: 7239818891 },
    
    ];
    
    let doctorsresults = doctorsarray.map(item => {
        return <tr>
            <td>{item.doctorId}</td>
            <td>{item.doctorName}</td>
            <td>{item.designation}</td>
            <td>{item.experience}</td>
            <td>{item.contactNumber}</td>
        </tr>;
    
    });
    return (
        <>
            <center><table border="2" width="500">
                <tr>
                    <th>Doctor id </th>
                    <th>Doctor Name</th>
                    <th>Doctor Designation</th>
                    <th>Doctor Experience  </th>
                    <th>Doctor Contact number </th>
                </tr>
                {doctorsresults}
            </table>
            </center>
        </>
    )


}
export default Doctor;