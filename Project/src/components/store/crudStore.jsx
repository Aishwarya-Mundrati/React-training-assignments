import { legacy_createStore as CreateStore } from "redux";
import { crudReducer } from "../reducers/crud.reducer";

export const CrudStore = CreateStore(crudReducer);
 