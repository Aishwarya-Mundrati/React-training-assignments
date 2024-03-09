import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action_Types } from "../../actions/actiontypes";
import "../Header/Header.css";
function CartModal(props) {
  const [cartProducts, setcartProducts] = useState([]);
  const [contentType, setContentType] = useState("cart");
  let cartList = useSelector((state) => state.cartProducts);
  useEffect(() => {
    console.log("before==>", cartProducts);
    setcartProducts(cartList);
    console.log("after==>", cartProducts);
  }, [cartProducts]);
  const disPatchCart = useDispatch();
  function removeFromCart(item) {
    disPatchCart({ type: action_Types.RemoveFromCart, cartProduct: item });
  }
  function updateCart(item, type) {
    let temp = JSON.parse(JSON.stringify(item));
    temp.selectedQuantity =
      type === "inc" ? temp.selectedQuantity + 1 : temp.selectedQuantity - 1;
    disPatchCart({ type: action_Types.UpdateCart, cartProduct: temp });
  }
  const cartItems = cartProducts.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.prodName}</td>
        <td>
          <div className="row text-center">
            <button
              onClick={() => {
                updateCart(item, "dec");
              }}
              className="btn col "
            >
              -
            </button>
            <input className=" col" readOnly value={item.selectedQuantity} />
            <button
              onClick={() => {
                updateCart(item, "inc");
              }}
              className="btn col"
            >
              +
            </button>
          </div>
        </td>
        <td>{item.selectedQuantity * item.prodPrice}</td>
        <td>
          <a
            onClick={() => {
              removeFromCart(item);
            }}
          >
            <i className="fa fa-trash-o" />
          </a>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="modal show" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">You have completed your purchase. Thanks for shopping! See you! </h5>
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
              {contentType == "cart" ? (
                <div>
                  {" "}
                  <table className="table table-bordered" border={2}>
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>{cartItems}</tbody>
                  </table>
                  <div className="text-end me-2">
                    <button className="btn btn-success" onClick={()=>{setContentType('checkout')}}>Checkout</button>
                  </div>
                </div>
              ) : (
                <div>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(CartModal);
