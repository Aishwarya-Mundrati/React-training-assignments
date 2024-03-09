import React, { useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import CartModal from "../CartModal/CartModal";
function Header() {
  const [isCart, setIsCart] = useState(false);
  let cardItemCount = useSelector((state) => state.cartProducts.length);
  return (
    <>
      <div className="row ">
        <div ></div>
        <div>
          <div className="me-3 text-end">
            <a
              onClick={() => {
                setIsCart(true);
              }}
            >
              <i className="fa fa-cart-plus" />
              <span className="badge badge-warning" id="lblCartCount">
                {cardItemCount}
              </span>
            </a>
          </div>
        </div>
      </div>
      {isCart && (
        <CartModal
          closeModal={() => {
            setIsCart(false);
          }}
        />
      )}
    </>
  );
}

export default React.memo(Header);
