import { legacy_createStore as createStore } from 'redux';

// Step1:   Reducer Function
const bankReducer = (state, action) => 
{
    // Convert action type to upper case
    action.type = action.type.toUpperCase();    

    // alert(action.type);
    let  updatedState = {};

    switch (action.type) 
    {
        case "CREATE":
            updatedState.balance =  0;   
            break; 

        case "DEPOSIT":
            updatedState.balance =  state.balance + parseFloat(action.amount);
            break;
            
        case "WITHDRAW":
            if(state.balance>0)
            {
                if(state.balance < parseFloat(action.amount))  
                {
                    alert("You trying to remove an item not in the cart");
                    updatedState.balance =  state.balance;
                }
                else
                {
                    updatedState.balance =  state.balance - parseFloat(action.amount);
                }
            }
            else {
                alert("There are no items in the cart please add your favorite items ");
                    updatedState.balance =  state.balance;
            }
            
            break;
        default:
           updatedState = state;
           break;
      }

      return updatedState;
};

// Step2:  Create Store
const bankStore = createStore(bankReducer);
export default bankStore;