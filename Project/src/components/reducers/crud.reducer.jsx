import { action_Types } from "../actions/actiontypes";


const initialState = {
  products: [
    
    {
      "prodId": 1,
      "prodName": "Roby",
      "prodDesc": "The Sunshine Solitaire Bridal Ring set by CaratLane is the perfect choice for a new bride. Set in 18kt yellow gold and diamonds in prong setting, this ring set radiates elegance and sophistication. The solitaire diamond in the engagement ring is expertly crafted to ensure maximum brilliance and sparkle. ",
      "img": "5.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 4
    },
    {
      "prodId": 2,
      "prodName": "Heenss",
      "prodDesc": "Set in 14 KT Rose Gold(3.450 g) with diamonds (0.155 ct ,IJ-SI)",
      "img": "6.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 3
    },
    {
      "prodId": 3,
      "prodName": "Riyal",
      "prodDesc": "The Queen of Diamonds Solitaire Rings by CaratLane are a breathtakingly beautiful piece of jewellery that is fit for royalty. Made with 18kt yellow gold, the ring features a magnificent diamond in the center, surrounded by a halo of smaller diamonds set in a prong setting. ",
      "img": "8.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 2
    },
    {
      "prodId": 4,
      "prodName": "Hiranya",
      "prodDesc": "The Queen of Diamonds Solitaire Rings by CaratLane are a breathtakingly beautiful piece of jewellery that is fit for royalty. Made with 18kt yellow gold, the ring features a magnificent diamond in the center, surrounded by a halo of smaller diamonds set in a prong setting. ",
      "img": "3.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 3
    },
	{
      "prodId": 5,
      "prodName": "Vipala",
      "prodDesc": "Perfect Jewel from the Nizams.  ",
      "img": "1.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 5
    },
    {
      "prodId": 6,
      "prodName": "Rapid",
      "prodDesc": "Set in 14 KT Rose Gold(3.450 g) with diamonds (0.155 ct ,IJ-SI) ",
      "img": "9.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 5
    },
    {
      "prodId": 7,
      "prodName": "Tiara",
      "prodDesc": "The Queen of Diamonds Solitaire Rings by CaratLane are a breathtakingly beautiful piece of jewellery that is fit for royalty. Made with 18kt yellow gold, the ring features a magnificent diamond in the center, surrounded by a halo of smaller diamonds set in a prong setting. ",
      "img": "10.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 3
    },
    {
      "prodId": 8,
      "prodName": "Reeks",
      "prodDesc": "The Sunshine Solitaire Bridal Ring set by CaratLane is the perfect choice for a new bride. Set in 18kt yellow gold and diamonds in prong setting, this ring set radiates elegance and sophistication. The solitaire diamond in the engagement ring is expertly crafted to ensure maximum brilliance and sparkle. ",
      "img": "2.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 4
    },
    {
      "prodId": 9,
      "prodName": "Uon",
      "prodDesc": "The Solitaire Bridal Ring set by CaratLane is the perfect choice for girl.",
      "img": "4.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 2
    },
    {
      "prodId": 10,
      "prodName": "jeeeeya",
      "prodDesc": "The perfect jewel for formal events.",
      "img": "7.png",
      "prodPrice": 789,
      "prodQuantity": 12,
      "rating": 5
    }
  ],
  cartProducts: [],
};
export const crudReducer = (state = initialState, action) => {
  console.log(action, state);
  let updatedState = { ...state };
  switch (action.type) {
    case action_Types.Get: {
      updatedState = state;
      break;
    }
    case action_Types.Add: {
      state.products.push(action.product);
      updatedState.products = state.products;
      // const fs=require('fs');  
      // console.log(fs);
      // fs.readFile("./myFile.json", "utf8", (err, jsonString) => {
      //   if (err) {
      //     return;
      //   }
      //   try {
      //     console.log(jsonString);
      //     const customer = JSON.parse(jsonString);
      //   } catch (err) {
      //     console.log("Error parsing JSON string:", err);
      //   }
      // });
      break;
    }
    case action_Types.Edit: {
      const index = state.products.findIndex(
        (x) => x.prodId === action.product.prodId
      );
      if (index > -1) {
        state.products[index]=action.product
      }
      updatedState.products = state.products;
      break;
    }
    case action_Types.Delete: {
      const index = state.products.findIndex(
        (x) => x.prodId === action.product.prodId
      );
      if (index > -1) {
        state.products.splice(index, 1);
      }
      updatedState.products = state.products;
      break;
    }
    case action_Types.AddToCart: {
      const ind = state.cartProducts.findIndex(
        (x) => x.prodId === action.cartProduct.prodId
      );
      if (ind > -1) {
        state.cartProducts[ind]["selectedQuantity"] =
          state.cartProducts[ind]["selectedQuantity"] + 1;
      } else {
        state.cartProducts.push(action.cartProduct);
      }
      updatedState.cartProducts = state.cartProducts;
      break;
    }
    case action_Types.RemoveFromCart: {
      const index = state.cartProducts.findIndex(
        (x) => x.prodId === action.cartProduct.prodId
      );
      if (index > -1) {
        state.cartProducts.splice(index, 1);
      }
      updatedState.cartProducts = state.cartProducts;
      break;
    }
    case action_Types.UpdateCart: {
      const index = state.cartProducts.findIndex(
        (x) => x.prodId === action.cartProduct.prodId
      );
      if (index > -1) {
        state.cartProducts[index] = action.cartProduct;
      }
      updatedState.cartProducts = state.cartProducts;
      break;
    }
    default: {
      updatedState = state;
      break;
    }
  }
  console.log(updatedState);
  return updatedState;
};
