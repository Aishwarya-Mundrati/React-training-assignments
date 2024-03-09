import React, { useState } from "react";
import "./products.css";
import { action_Types } from "../actions/actiontypes";
function ProductModal(props) {
  const actionType = props.actionType;
  const [prodName, setProdName] = useState(
    props.prdoObj ? props.prdoObj.prodName : ""
  );
  const [prodDesc, setProdDesc] = useState(
    props.prdoObj ? props.prdoObj.prodDesc : ""
  );
  const [prodPrice, setProdPrice] = useState(
    props.prdoObj ? props.prdoObj.prodPrice : ""
  );
  const [img, setProdImg] = useState(
    props.prdoObj ? props.prdoObj.img : ""
  );
  const [prodQuantity, setProdQuantity] = useState(
    props.prdoObj ? props.prdoObj.prodQuantity : 0
  );
  const [rating, setRating] = useState(
    props.prdoObj ? props.prdoObj.rating : 0
  );
  const deafultRating = [1, 2, 3, 4, 5];
  function submitEmployee() {
    let obj = {
      prodId: props.prdoObj ? props.prdoObj.prodId : null,
      prodName: prodName,
      prodDesc: prodDesc,
      prodPrice: prodPrice,
      prodQuantity: prodQuantity,
      img: img,
      rating: 3,
    };
    props.setProdObj(obj);
  }
  function confirmDelete() {
    props.setProdObj(props.prdoObj);
    // let tempEmps = [...EmpList];
    // let index = tempEmps.findIndex((x) => x.empid == selectedEmp.empid);
    // if (index > -1) {
    //   tempEmps.splice(index, 1);
    //   setEmpList(tempEmps);
    //   setActionType(null);
    // }

  }
  return (
    
    <div className="modal show" tabIndex="-1">
        
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{actionType + " Product"} </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.closeModal(true);
              }}
            ></button>
          </div>
          <div className="modal-body">
            {actionType === action_Types.Edit ||
            actionType === action_Types.Add ? (
              <div className="row">
                <div class="form-group col-6">
                  <label for="Product"> Product Name</label>
                  <input
                    className="form-control"
                    name="prodName"
                    value={prodName}
                    onChange={($event) => {
                      setProdName($event.target.value);
                    }}
                  />
                </div>
       
                <div className="form-group col-6">
                  <label htmlFor="prodDesc">
                    Product Description &nbsp;
                  </label>
                  <input
                    className="form-control"
                    name="prodDesc"
                    value={prodDesc}
                    onChange={($event) => {
                      setProdDesc($event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="prodImg">
                    Product Img &nbsp;
                  </label>

                  {img && (
                    <div>
                      <a className="text-end" onClick={() => setProdImg(null)}>
                        <i className="fa fa-delete-o" />
                      </a>
                      <img
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(img)}
                      />
                      <br />
                    </div>
                  )}
                  <input
                    type="file"
                    className="form-control"
                    name="prodImg"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setProdImg(event.target.files[0]);
                    }}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="prodPrice">
                    Product Price &nbsp;{" "}
                  </label>
                  <input
                    className="form-control"
                    name="prodPrice"
                    value={prodPrice}
                    onChange={($event) => {
                      setProdPrice($event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="setProdQuantity">
                    Product Quantity &nbsp;{" "}
                  </label>
                  <input
                    className="form-control"
                    name="setProdQuantity"
                    value={prodQuantity}
                    onChange={($event) => {
                      setProdQuantity($event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="rating">
                    Product Rating &nbsp;{" "}
                  </label>
                  <div className="inputrate">
                  {deafultRating.map((num, i) => {
                   return  <input
                      className="form-control"
                      name="rating"
                      value={rating}
                      onChange={($event) => {
                        setRating($event.target.value);
                      }}
                    />;
                  })}
                  </div>
                </div>
              </div>
            ) : (
              "Are you sure to Delete ?"
            )}
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => {
                props.closeModal(true);
              }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={
                actionType == action_Types.Edit ||
                actionType == action_Types.Add
                  ? submitEmployee
                  : confirmDelete
              }
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductModal);
