import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "./productModal";
import "./products.css";
import { CrudStore } from "../store/crudStore";
import { action_Types } from "../actions/actiontypes";
function ProductsList() {
  const [selectedProd, setSelectedProd] = useState(null);
  const [actionType, setActionType] = useState(null);
  const dispatchProduct = useDispatch(CrudStore);

  function ratingRes(rating) {
    return [1, 2, 3, 4, 5].map((x) => {
      return (
        <i
          key={x}
          className={
            rating >= x
              ? "fa fa-star checked"
              : rating < x && rating > x - 1
              ? "fa fa-star-half-o checked"
              : "fa fa-star-o"
          }
        ></i>
      );
    });
  }
  function getProdObj(data) {
    console.log(data);
    data.prodId = data.prodId ? data.prodId : prodList.length + 1;
    dispatchProduct({ type: actionType, product: data });
    setActionType(null);
    // setProdObj(data);
  }
  function addProduct() {
    setActionType(action_Types.Add);
    setSelectedProd(null);
    // dispatchProduct({ type: action_Types.Add });
  }
  function editProd(prod) {
    setActionType(action_Types.Edit);
    setSelectedProd(prod);
  }
  function addtoCart(prod) {
    let tempProd = { ...prod };
    tempProd["selectedQuantity"] = 1;
    setSelectedProd(tempProd);
    dispatchProduct({ type: action_Types.AddToCart, cartProduct: tempProd });
  }
  function deleteProd(prod) {
    setActionType(action_Types.Delete);
    setSelectedProd(prod);
  }
  let prodList = useSelector((state) => state.products);
  const prodRender = prodList.map((prod) => {
    return (
      <div key={prod.prodId} className="col-4 mb-3">
        <div className="card text-center">
          <div>
            <button 
              className="invisible"
              onClick={() => {
                editProd(prod);
              }}
            >
              <i className="fa fa-pencil-square-o" />
            </button>
            <button className="invisible"
              onClick={() => {
                deleteProd(prod);
              }}
            >
              <i className="fa fa-trash-o" />
            </button>
          </div>
          <div className="text-center ">
            <img
              src={prod.img}
              className="avatar prod_img "
              alt={prod.prodName}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{prod.prodName}</h5>
            <small>{prod.prodDesc}</small>
            <p className="card-text">{ratingRes(prod.rating)}</p>
          </div>
          <div className="card-footer">
            {/* <p className="card-text"> */}
            <input
              type="button"
              className="btn btn-secondary" style={{ backgroundColor: '#3A004D', color: 'white' }}
              value="Add to Cart"
              onClick={() => {
                addtoCart(prod);
              }}
            />
            {/* </p> */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
    
      <div className="container">
        <div className="col text-end">
          <button class="invisible" onClick={addProduct}>
            Add Product
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
      <div className="row">{prodRender}</div>
      </div>
      </div>
      {actionType && (
        <ProductModal
          setProdObj={(data) => {
            getProdObj(data);
          }}
          closeModal={() => {
            setActionType(null);
          }}
          actionType={actionType}
          prdoObj={selectedProd}
        />
      )}
    </>
  );
}

export default React.memo(ProductsList);
