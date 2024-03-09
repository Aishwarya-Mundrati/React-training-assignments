import { useState } from "react";
import { dataSericeObj } from "./dataService"; 
import './product.css';
function Product() {

    const [prodsArray, setProdsArray] = useState([]);
    const [prodid, setProdid] = useState("");
    const [pname, setPname] = useState("");
    const [prodDesc, setprodDesc] = useState("");
    const [imageurl, setimageurl] = useState("");
    const [price, setPrice] = useState("");

    function getProdClick() {

        dataSericeObj.getAllProducts().then(resData => {
            setProdsArray(resData.data);
        });

    }

    function addProdClick() {
        let prodObj = {};
        prodObj.prodid = prodid;
        prodObj.pname = pname;
        prodObj.prodDesc = prodDesc;
        prodObj.imageurl = imageurl;
        prodObj.price = price;


        dataSericeObj.addProd(prodObj).then(resData => {
            alert("New Product Added to server");
            getProdClick();
            clearFields();
        });
    }

    function clearFields() {
        setProdid("");
        setPname("");
        setprodDesc("");
        setimageurl("");
        setPrice("");
    }


    function deleteClick(prodid) {
        dataSericeObj.deleteProd(prodid).then(resData => {
            alert("Product deleted from server");
            getProdClick();
        });
    }

    function selectClick(prodid) {
        dataSericeObj.getProdById(prodid).then(resData => {
            let prodObj = resData.data;
            setProdid(prodObj.prodid);
            setPname(prodObj.pname);
            setprodDesc(prodObj.prodDesc);
            setimageurl(prodObj.imageurl);
            setPrice(prodObj.price);

        });



    }


    function updateClick() {
        let prodObj = {};
        prodObj.prodid = prodid;
        prodObj.pname = pname;
        prodObj.prodDesc = prodDesc;
        prodObj.imageurl = imageurl;
        prodObj.price = price;


        dataSericeObj.updateProd(prodObj).then(resData => {
            getProdClick();
            clearFields();
        });
    }

    let resultArray = prodsArray.map(item => {
        return <tr>
            <td className="text-center">{item.prodid}</td>
            <td>{item.pname}</td>
            <td>{item.prodDesc}</td>
            <td> <img src={item.imageurl} /></td>
            <td>{item.price}</td>


            <td align="center">
                <a href="javascript:void(0);" onClick={() => { selectClick(item.prodid) }}>Select</a>|
                <a href="javascript:void(0);" onClick={() => { updateClick(item.prodid) }}>Update</a>|
                <a href="javascript:void(0);" onClick={() => { deleteClick(item.prodid) }}>Delete</a>

            </td>
        </tr>;
    });

    return (
        <>
         <div className="container">
            <h3> All Products</h3>
            <hr />

            <input placeholder="Prod-id" type="text"
                value={prodid} onChange={(e) => setProdid(e.target.value)} />

            <input placeholder="Pname" type="text"
                value={pname} onChange={(e) => setPname(e.target.value)} />

            <input placeholder="Desc" type="text"
                value={prodDesc} onChange={(e) => setprodDesc(e.target.value)} />

            <input placeholder="Image url" type="text"
                value={imageurl} onChange={(e) => setimageurl(e.target.value)} />

            <input placeholder="Price" type="text"
                value={price} onChange={(e) => setPrice(e.target.value)} />
</div>
            <hr />
            <div className="container mb-3">
            <input type="button" value="Get Products" onClick={getProdClick} />
            <input  className="mx-3"  type="button" value="Add Products" onClick={addProdClick} />
            <input  type="button" value="Update Products" onClick={updateClick} />
            </div>

           <div className="container projectlinkimage">
            <table border="2" width="100%" className="table-bordered">
                <tr>
                    <th className="w-30">Product ID</th>
                    <th className="w-30">Product Name</th>
                    <th>Product Description</th>
                    <th className="w-30">Product image</th>
                    <th className="w-30">Product Price</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
            </div>
        </>
    );
}



export default Product;